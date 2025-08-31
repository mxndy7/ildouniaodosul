import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const WhatsAppButton: React.FC = () => {
  return (
    <motion.a
      href="https://wa.me/5565999123456"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-xl z-50 transition-all duration-300"
      whileHover={{ scale: 1.1 }}
      animate={{ 
        scale: [1, 1.05, 1],
        rotate: [0, 5, -5, 0]
      }}
      transition={{ 
        scale: { repeat: Infinity, duration: 10 },
        rotate: { repeat: Infinity, duration: 10 }
      }}
    >
      <MessageCircle size={24} />
    </motion.a>
  );
};

export default WhatsAppButton;