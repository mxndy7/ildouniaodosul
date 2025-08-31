import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useIntersectionObserver } from '../hooks/useScrollEffect';
import { fadeInLeft, fadeInRight } from '../utils/animations';

const QuemSomos: React.FC = () => {
  const [ref, isVisible] = useIntersectionObserver(0.3);

  return (
    <section ref={ref} className="py-20 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Quem Somos
            </h2>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif' }}>
              O Grupo Medeiros é especialista em limpeza de áreas, remoção de resíduos florestais e produção de cavaco de madeira, promovendo energia limpa e aproveitamento sustentável.
            </p>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Com anos de experiência no setor, oferecemos soluções completas que transformam resíduos florestais em recursos valiosos, contribuindo para um futuro mais sustentável.
            </p>
            <Link
              to="/quem-somos"
              className="inline-block bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full font-medium transition-all duration-200 hover:scale-105"
            >
              Saiba Mais
            </Link>
          </motion.div>

          <motion.div
            variants={fadeInRight}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="relative"
          >
            <img 
              src="https://i.postimg.cc/SKVhXHds/IMAGEM-DE-PICADOR-OU-DE-SUA-PREFERENCIA-ILDAO-DO-CAPUCCHINO-5.png"
              alt="Ildao"
              className="w-full h-64 md:h-96 object-cover object-center rounded-lg shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-lg"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default QuemSomos;
