import React from 'react';
import { ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollEffect } from '../hooks/useScrollEffect';

const BackToTop: React.FC = () => {
  const { scrollY } = useScrollEffect();
  const isVisible = scrollY > 500;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={scrollToTop}
          className="fixed bottom-6 left-6 bg-red-600 hover:bg-red-700 text-white p-3 rounded-full shadow-xl z-50 transition-all duration-300"
          whileHover={{ scale: 1.1 }}
        >
          <ChevronUp size={20} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;