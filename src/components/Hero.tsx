import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://i.postimg.cc/N088vvtd/ricardo-gomez-angel-x9u-Ce-BNO-Ag-unsplash.jpg"
          alt="Floresta"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ fontFamily: 'Montserrat, sans-serif' }}
          className="text-4xl md:text-6xl font-bold text-white mb-8"
        >
          Soluções Sustentáveis em Biomassa e Limpeza Florestal
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-xl md:text-2xl text-gray-200 mb-12 font-light"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          Transformamos resíduos florestais em energia limpa e sustentável
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <Link
            to="/contato"
            className="inline-block bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105"
          >
            Solicitar Orçamento
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;