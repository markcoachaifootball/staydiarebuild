import { useState, useRef, useEffect, useCallback } from 'react';
import { Send, X, Bot, User, Search, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Textarea } from './ui/textarea';
import { ScrollArea } from './ui/scroll-area';
import { supabase } from '@/integrations/supabase/client';
import ReactMarkdown from 'react-markdown';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const generateSessionId = () => crypto.randomUUID();

// The search bar component to embed in Hero or anywhere
export const AISearchBar = ({ onOpen }: { onOpen: (query?: string) => void }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onOpen(query.trim());
      setQuery('');
    } else {
      onOpen();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto mt-8">
      <div className="relative flex items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2 hover:bg-white/15 transition-colors focus-within:border-staydia-gold/50 focus-within:bg-white/15">
        <Sparkles className="h-5 w-5 text-staydia-gold mr-3 flex-shrink-0" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Ask our AI Assistant anything about Staydia..."
          className="flex-1 bg-transparent text-white placeholder:text-gray-400 text-base outline-none"
        />
        <button
          type="submit"
          className="ml-3 h-9 w-9 rounded-full bg-staydia-gold flex items-center justify-center hover:bg-staydia-gold/90 transition-colors flex-shrink-0"
        >
          <Send className="h-4 w-4 text-staydia-black" />
        </button>
      </div>
    </form>
  );
};

// The chat panel (modal overlay)
export const AIChatPanel = ({ isOpen, onClose, initialQuery }: { isOpen: boolean; onClose: () => void; initialQuery?: string }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "Hi! I'm here to help you learn about Staydia Sports' AI-powered broadcasting solutions. How can I assist you today?"
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const sessionIdRef = useRef(generateSessionId());
  const hasUserMessaged = useRef(false);
  const initialQueryProcessed = useRef(false);

  useEffect(() => {
    if (scrollAreaRef.current) {
      const scrollContainer = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
      if (scrollContainer) {
        scrollContainer.scrollTop = scrollContainer.scrollHeight;
      }
    }
  }, [messages]);

  // Auto-send initial query when panel opens with a query
  useEffect(() => {
    if (isOpen && initialQuery && !initialQueryProcessed.current) {
      initialQueryProcessed.current = true;
      const userMessage: Message = { role: 'user', content: initialQuery };
      const newMessages = [...messages, userMessage];
      setMessages(newMessages);
      hasUserMessaged.current = true;
      setIsLoading(true);

      streamChat(newMessages)
        .then(() => {
          setMessages(prev => {
            saveConversation(prev);
            return prev;
          });
        })
        .catch(() => {
          setMessages(prev => [...prev, {
            role: 'assistant',
            content: 'I apologize, but I encountered an error. Please try again.'
          }]);
        })
        .finally(() => setIsLoading(false));
    }
  }, [isOpen, initialQuery]);

  // Reset when closed
  useEffect(() => {
    if (!isOpen) {
      initialQueryProcessed.current = false;
    }
  }, [isOpen]);

  const saveConversation = useCallback(async (msgs: Message[]) => {
    try {
      const { error } = await supabase
        .from('chat_conversations' as any)
        .upsert({
          session_id: sessionIdRef.current,
          messages: msgs,
          updated_at: new Date().toISOString(),
        } as any, { onConflict: 'session_id' } as any);
      if (error) console.error('Save conversation error:', error);
    } catch (e) {
      console.error('Save conversation error:', e);
    }
  }, []);

  const emailConversation = useCallback(async (msgs: Message[]) => {
    if (!hasUserMessaged.current) return;
    try {
      const CHAT_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/email-chat-conversation`;
      await fetch(CHAT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
        },
        body: JSON.stringify({
          messages: msgs,
          sessionId: sessionIdRef.current,
        }),
      });
    } catch (e) {
      console.error('Email conversation error:', e);
    }
  }, []);

  const handleClose = useCallback(() => {
    emailConversation(messages);
    onClose();
  }, [messages, emailConversation, onClose]);

  const streamChat = async (messages: Message[]) => {
    const CHAT_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/ai-chat`;
    
    const response = await fetch(CHAT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
      },
      body: JSON.stringify({ messages }),
    });

    if (!response.ok || !response.body) {
      if (response.status === 429) throw new Error("Rate limit reached.");
      if (response.status === 402) throw new Error("Service temporarily unavailable.");
      throw new Error("Failed to connect to chat service");
    }

    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let textBuffer = "";
    let streamDone = false;
    let assistantContent = "";

    setMessages(prev => [...prev, { role: 'assistant', content: '' }]);

    while (!streamDone) {
      const { done, value } = await reader.read();
      if (done) break;
      
      textBuffer += decoder.decode(value, { stream: true });

      let newlineIndex: number;
      while ((newlineIndex = textBuffer.indexOf("\n")) !== -1) {
        let line = textBuffer.slice(0, newlineIndex);
        textBuffer = textBuffer.slice(newlineIndex + 1);

        if (line.endsWith("\r")) line = line.slice(0, -1);
        if (line.startsWith(":") || line.trim() === "") continue;
        if (!line.startsWith("data: ")) continue;

        const jsonStr = line.slice(6).trim();
        if (jsonStr === "[DONE]") { streamDone = true; break; }

        try {
          const parsed = JSON.parse(jsonStr);
          const content = parsed.choices?.[0]?.delta?.content;
          if (content) {
            assistantContent += content;
            setMessages(prev => {
              const newMessages = [...prev];
              newMessages[newMessages.length - 1] = { role: 'assistant', content: assistantContent };
              return newMessages;
            });
          }
        } catch {
          textBuffer = line + "\n" + textBuffer;
          break;
        }
      }
    }

    if (textBuffer.trim()) {
      for (const line of textBuffer.split("\n")) {
        if (!line.trim() || line.startsWith(":") || !line.startsWith("data: ")) continue;
        const jsonStr = line.slice(6).trim();
        if (jsonStr === "[DONE]") continue;
        try {
          const parsed = JSON.parse(jsonStr);
          const content = parsed.choices?.[0]?.delta?.content;
          if (content) {
            assistantContent += content;
            setMessages(prev => {
              const newMessages = [...prev];
              newMessages[newMessages.length - 1] = { role: 'assistant', content: assistantContent };
              return newMessages;
            });
          }
        } catch { /* ignore */ }
      }
    }
  };

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', content: input };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);
    hasUserMessaged.current = true;

    try {
      await streamChat(newMessages);
      setMessages(prev => {
        saveConversation(prev);
        return prev;
      });
    } catch (error) {
      console.error('Chat error:', error);
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: 'I apologize, but I encountered an error. Please try again or contact our support team.'
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <Card className="w-full max-w-lg h-[600px] shadow-2xl border-border bg-background">
        <CardContent className="p-0 h-full flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-border bg-primary text-primary-foreground rounded-t-lg">
            <div className="flex items-center gap-2">
              <Bot className="h-5 w-5" />
              <span className="font-semibold">Staydia AI Assistant</span>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleClose}
              className="text-primary-foreground hover:bg-primary-foreground/20"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Messages */}
          <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>
            <div className="space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex gap-3 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {message.role === 'assistant' && (
                    <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                      <Bot className="h-4 w-4 text-primary-foreground" />
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] rounded-lg p-3 text-sm ${
                      message.role === 'user'
                        ? 'bg-primary text-primary-foreground ml-auto'
                        : 'bg-muted text-muted-foreground'
                    }`}
                  >
                    {message.role === 'assistant' ? (
                      <div className="prose prose-sm prose-invert max-w-none">
                        <ReactMarkdown>{message.content}</ReactMarkdown>
                      </div>
                    ) : (
                      message.content
                    )}
                  </div>
                  {message.role === 'user' && (
                    <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                      <User className="h-4 w-4 text-muted-foreground" />
                    </div>
                  )}
                </div>
              ))}
              {isLoading && (
                <div className="flex gap-3">
                  <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <Bot className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <div className="bg-muted text-muted-foreground rounded-lg p-3 text-sm">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <div className="w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <div className="w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>

          {/* Input */}
          <div className="p-4 border-t border-border">
            <div className="flex gap-2">
              <Textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me about Staydia Sports..."
                className="resize-none min-h-[44px]"
                disabled={isLoading}
              />
              <Button
                onClick={sendMessage}
                disabled={!input.trim() || isLoading}
                size="sm"
                className="px-3"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

// Main wrapper that manages state globally
export const AIChat = () => {
  return null; // No longer renders a floating button
};
