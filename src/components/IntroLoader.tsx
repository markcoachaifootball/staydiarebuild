import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface IntroLoaderProps {
  onComplete: () => void;
}

const IntroLoader = ({ onComplete }: IntroLoaderProps) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);
  
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
      }, 400);
      return () => clearTimeout(timer);
    } else {
      // Show all words together briefly
      setShowAll(true);
      const completeTimer = setTimeout(() => {
        onComplete();
      }, 800);
      return () => clearTimeout(completeTimer);
    }
  }, [currentWordIndex, onComplete, words.length]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-black flex items-center justify-center"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-wrap justify-center items-center gap-3 md:gap-5 px-6 max-w-4xl">
        <AnimatePresence mode="wait">
          {!showAll ? (
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
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="flex flex-wrap justify-center items-center gap-3 md:gap-5"
            >
              {words.map((word, index) => (
                <span
                  key={index}
                  className={`text-3xl md:text-5xl lg:text-6xl font-bold ${
                    word.highlight ? 'text-staydia-gold' : 'text-white'
                  }`}
                >
                  {word.text}
                </span>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default IntroLoader;
