import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface IntroLoaderProps {
  onComplete: () => void;
}

const IntroLoader = ({ onComplete }: IntroLoaderProps) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  
  // Remove the loading class immediately on mount to prevent flash
  useEffect(() => {
    document.documentElement.classList.remove('intro-loading');
  }, []);
  const [showLogo, setShowLogo] = useState(false);
  
  const words = [
    { text: 'AI-Automated', highlight: true },
    { text: 'Sports', highlight: false },
    { text: 'Camera', highlight: false },
    { text: '&', highlight: false },
    { text: 'Streaming', highlight: true },
  ];

  useEffect(() => {
    if (currentWordIndex < words.length) {
      const timer = setTimeout(() => {
        setCurrentWordIndex(prev => prev + 1);
      }, 700);
      return () => clearTimeout(timer);
    } else if (!showLogo) {
      // Show logo after words
      setShowLogo(true);
    }
  }, [currentWordIndex, showLogo, words.length]);

  useEffect(() => {
    if (showLogo) {
      const completeTimer = setTimeout(() => {
        onComplete();
      }, 1000);
      return () => clearTimeout(completeTimer);
    }
  }, [showLogo, onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-black flex items-center justify-center"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-wrap justify-center items-center gap-3 md:gap-5 px-6 max-w-4xl">
        <AnimatePresence mode="wait">
          {!showLogo ? (
            <motion.span
              key={currentWordIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className={`text-4xl md:text-6xl lg:text-7xl font-bold ${
                words[currentWordIndex]?.highlight 
                  ? 'text-staydia-gold' 
                  : 'text-white'
              }`}
            >
              {words[currentWordIndex]?.text}
            </motion.span>
          ) : (
            <motion.img
              key="logo"
              src="/lovable-uploads/f7690435-d61e-4b90-8008-5e6981cb119d.png"
              alt="Staydia Sports"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="h-32 md:h-48 lg:h-56 w-auto"
            />
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default IntroLoader;
