import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ChamadaParaAcao: React.FC = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-zinc-800">
      <div className="absolute inset-0">
        <img 
          src="https://i.postimg.cc/htNgWNsQ/mars-plex-ryrx-BUeja-Lo-unsplash.jpg"
          alt="Biomassa"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-4xl lg:text-6xl font-bold text-white mb-8"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          Transformamos resíduos em energia limpa
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-gray-200 mb-10"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          Faça parte desse futuro sustentável
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Link
            to="/contato"
            className="inline-block bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-black text-white px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-xl"
          >
            Entrar em Contato
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ChamadaParaAcao;