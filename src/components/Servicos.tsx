import React from 'react';
import { motion } from 'framer-motion';
import { Truck, TreePine, Recycle, MapPin } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useScrollEffect';
import { staggerContainer, scaleIn } from '../utils/animations';
import { Link } from 'react-router-dom';

const Servicos: React.FC = () => {
  const [ref, isVisible] = useIntersectionObserver(0.2);

  const servicos = [
    {
      id: '1',
      titulo: 'Limpeza e Preparo de Áreas',
      descricao: 'Limpeza especializada de terrenos e preparo para novos projetos florestais.',
      icone: TreePine,
    },
    {
      id: '2',
      titulo: 'Remoção de Resíduos Florestais',
      descricao: 'Remoção eficiente de galhos, troncos e outros resíduos florestais.',
      icone: Recycle,
    },
    {
      id: '3',
      titulo: 'Produção de Cavaco para Biomassa',
      descricao: 'Transformação de resíduos em cavaco de madeira para energia limpa.',
      icone: MapPin,
    },
    {
      id: '4',
      titulo: 'Logística e Transporte',
      descricao: 'Transporte especializado para materiais florestais e biomassa.',
      icone: Truck,
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Nossos Serviços
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Oferecemos soluções completas em manejo florestal sustentável
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          {servicos.map((servico) => {
            const IconComponent = servico.icone;
            return (
              <motion.div
                key={servico.id}
                variants={scaleIn}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-zinc-800 p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-zinc-700 hover:border-red-600/50"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-red-600 p-3 rounded-lg mr-4">
                    <IconComponent className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {servico.titulo}
                  </h3>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {servico.descricao}
                </p>
                <Link
                  to="/contato"
                  className="inline-block bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105"
                >
                  Solicitar Orçamento
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Servicos;