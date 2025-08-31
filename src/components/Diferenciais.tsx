import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Users, Truck, Settings } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useScrollEffect';
import { staggerContainer } from '../utils/animations';

const Diferenciais: React.FC = () => {
  const [ref, isVisible] = useIntersectionObserver(0.3);

  const diferenciais = [
    {
      id: '1',
      titulo: 'Sustentabilidade',
      descricao: 'Compromisso com práticas ambientalmente responsáveis',
      icone: Leaf,
    },
    {
      id: '2',
      titulo: 'Equipe Especializada',
      descricao: 'Profissionais experientes em manejo florestal',
      icone: Users,
    },
    {
      id: '3',
      titulo: 'Máquinas de Alta Performance',
      descricao: 'Equipamentos modernos para máxima eficiência',
      icone: Truck,
    },
    {
      id: '4',
      titulo: 'Soluções Personalizadas',
      descricao: 'Projetos adaptados às necessidades específicas',
      icone: Settings,
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Nossos Diferenciais
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto" style={{ fontFamily: 'Poppins, sans-serif' }}>
            O que nos torna únicos no mercado de soluções florestais
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {diferenciais.map((diferencial) => {
            const IconComponent = diferencial.icone;
            return (
              <motion.div
                key={diferencial.id}
                variants={{
                  hidden: { scale: 0.8, opacity: 0, rotateY: -15 },
                  visible: { scale: 1, opacity: 1, rotateY: 0, transition: { duration: 0.6 } }
                }}
                whileHover={{ scale: 1.05 }}
                className="text-center group"
              >
                <div className="bg-red-600 p-6 rounded-full w-20 h-20 mx-auto mb-6 group-hover:bg-red-700 transition-colors duration-300 flex items-center justify-center">
                  <IconComponent className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {diferencial.titulo}
                </h3>
                <p className="text-gray-300" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {diferencial.descricao}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Diferenciais;