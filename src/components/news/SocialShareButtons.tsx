
import React from 'react';
import { Facebook, Twitter, Linkedin, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SocialShareButtonsProps {
  title: string;
  url: string;
}

const SocialShareButtons: React.FC<SocialShareButtonsProps> = ({ title, url }) => {
  const encodedTitle = encodeURIComponent(title);
  const encodedUrl = encodeURIComponent(url);

  const shareUrls = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    twitter: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}&via=staydiasports`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    whatsapp: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`
  };

  const handleShare = (platform: string) => {
    const url = shareUrls[platform as keyof typeof shareUrls];
    window.open(url, '_blank', 'width=600,height=400');
  };

  return (
    <div className="flex flex-col gap-4 sticky top-24">
      <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">Share Article</h3>
      <div className="flex flex-col gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => handleShare('facebook')}
          className="justify-start gap-2 bg-transparent border-gray-600 text-white hover:bg-blue-600 hover:border-blue-600"
        >
          <Facebook size={16} />
          Facebook
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => handleShare('twitter')}
          className="justify-start gap-2 bg-transparent border-gray-600 text-white hover:bg-blue-400 hover:border-blue-400"
        >
          <Twitter size={16} />
          Twitter
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => handleShare('linkedin')}
          className="justify-start gap-2 bg-transparent border-gray-600 text-white hover:bg-blue-500 hover:border-blue-500"
        >
          <Linkedin size={16} />
          LinkedIn
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => handleShare('whatsapp')}
          className="justify-start gap-2 bg-transparent border-gray-600 text-white hover:bg-green-600 hover:border-green-600"
        >
          <MessageCircle size={16} />
          WhatsApp
        </Button>
      </div>
    </div>
  );
};

export default SocialShareButtons;
