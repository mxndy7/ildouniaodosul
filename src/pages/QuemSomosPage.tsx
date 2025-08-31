import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Heart } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useScrollEffect';
import { fadeInUp, staggerContainer } from '../utils/animations';

const QuemSomosPage: React.FC = () => {
  const [ref1, isVisible1] = useIntersectionObserver(0.3);
  const [ref2, isVisible2] = useIntersectionObserver(0.3);
  const [ref3, isVisible3] = useIntersectionObserver(0.3);

const timelineItems = [
  { 
    ano: '2000', 
    evento: 'Ildo Ribeiro de Medeiros inicia sua trajetória no setor madereiro, aprendendo sobre manejo e produção de madeira.' 
  },
  { 
    ano: '2005', 
    evento: 'Expansão para pecuária, implementando práticas de manejo sustentável.' 
  },
  { 
    ano: '2010', 
    evento: 'Entrada na agricultura, com foco em cultivo produtivo e sustentável.' 
  },
  { 
    ano: '2015', 
    evento: 'Integração dos setores: agricultura, pecuária e manejo florestal, com aproveitamento de resíduos.' 
  },
  { 
    ano: '2020', 
    evento: 'Criação do setor de Biomassa e implementação da frota própria de transporte.' 
  },
  { 
    ano: '2025', 
    evento: 'Grupo Medeiros atua de forma integrada em agricultura, pecuária, biomassa e transporte, com sustentabilidade e inovação.' 
  },
];

  const valores = [
    {
      icone: Target,
      titulo: 'Missão',
      descricao: 'Fornecer soluções sustentáveis em manejo florestal, transformando resíduos em recursos valiosos para um futuro mais verde.'
    },
    {
      icone: Eye,
      titulo: 'Visão',
      descricao: 'Ser reconhecida como líder em soluções florestais sustentáveis, promovendo o desenvolvimento econômico aliado à preservação ambiental.'
    },
    {
      icone: Heart,
      titulo: 'Valores',
      descricao: 'Sustentabilidade, inovação, qualidade, responsabilidade social e compromisso com o meio ambiente.'
    }
  ];

  return (
    <div className="min-h-screen bg-black pt-24">
      {/* Hero Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0">
          <img 
            src="https://i.postimg.cc/SN8ffM50/dodi-achmad-3-VTDgd-JE6a-U-unsplash.jpg"
            alt="Floresta"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl lg:text-7xl font-bold text-white mb-6"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Quem Somos
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-200 max-w-3xl mx-auto"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Conheça nossa história, missão e compromisso com a sustentabilidade
          </motion.p>
        </div>
      </section>

      {/* Nossa História - Timeline */}
      <section ref={ref1} className="py-20 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            className="text-4xl lg:text-5xl font-bold text-white text-center mb-16"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Nossa História
          </motion.h2>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-red-600 transform md:-translate-x-1/2"></div>

            {timelineItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isVisible1 ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
                }`}
              >
                <div className={`bg-zinc-800 p-6 rounded-lg shadow-xl max-w-md ${
                  index % 2 === 0 ? 'ml-16 md:ml-0 md:mr-8' : 'ml-16 md:ml-8'
                }`}>
                  <div className="text-red-600 font-bold text-xl mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {item.ano}
                  </div>
                  <p className="text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {item.evento}
                  </p>
                </div>
                
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-red-600 rounded-full transform md:-translate-x-1/2 border-4 border-zinc-900"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section ref={ref2} className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            className="text-4xl lg:text-5xl font-bold text-white text-center mb-16"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Missão, Visão e Valores
          </motion.h2>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isVisible2 ? "visible" : "hidden"}
            className="grid lg:grid-cols-3 gap-8"
          >
            {valores.map((valor) => {
              const IconComponent = valor.icone;
              return (
                <motion.div
                  key={valor.titulo}
                  variants={fadeInUp}
                  className="bg-zinc-800 p-8 rounded-xl text-center border border-zinc-700 hover:border-red-600/50 transition-all duration-300"
                >
                  <div className="bg-red-600 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                    <IconComponent className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {valor.titulo}
                  </h3>
                  <p className="text-gray-300 leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {valor.descricao}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Compromisso com Sustentabilidade */}
      <section ref={ref3} className="py-20 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isVisible3 ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Compromisso com a Sustentabilidade
              </h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Acreditamos que o desenvolvimento econômico e a preservação ambiental devem caminhar juntos. Por isso, todas as nossas operações são pautadas em práticas sustentáveis que respeitam o meio ambiente.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Nosso trabalho não apenas limpa e organiza áreas florestais, mas transforma resíduos em recursos valiosos, contribuindo para um ciclo produtivo mais limpo e eficiente.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isVisible3 ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 gap-4"
            >
              <img 
                src="https://i.postimg.cc/PJYFBF6h/aaaaaaaaaaaaaaaaa1.jpg"
                alt="Grupo Medeiros 1"
                className="w-full h-48 object-cover rounded-lg"
              />
              <img 
                src="https://i.postimg.cc/JhF6tWvM/ccccccccc.jpg"
                alt="Grupo Medeiros 2"
                className="w-full h-48 object-cover rounded-lg"
              />
              <img 
                src="https://i.postimg.cc/MHvFdpBc/6347bf96-2e60-42d1-bffc-1c3770e03e84.jpg"
                alt="Grupo Medeiros 3"
                className="w-full h-48 object-cover rounded-lg"
              />
              <img 
                src="https://i.postimg.cc/TwZ4NXJC/bbbbbbbb.jpg"
                alt="GRupo Medeiros 4"
                className="w-full h-48 object-cover rounded-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QuemSomosPage;