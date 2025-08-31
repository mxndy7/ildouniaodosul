import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Leaf, Zap, DollarSign, RefreshCw, TrendingUp, Users } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useScrollEffect';
import { fadeInUp, staggerContainer } from '../utils/animations';

const BeneficiosPage: React.FC = () => {
  const [ref1, isVisible1] = useIntersectionObserver(0.3);
  const [ref2, isVisible2] = useIntersectionObserver(0.3);

  const beneficios = [
    {
      icone: Leaf,
      titulo: 'Energia Renovável',
      descricao: 'A biomassa é uma fonte de energia 100% renovável que reduz a dependência de combustíveis fósseis.'
    },
    {
      icone: Zap,
      titulo: 'Redução de Impactos Ambientais',
      descricao: 'Diminuição significativa das emissões de CO2 e outros gases do efeito estufa.'
    },
    {
      icone: RefreshCw,
      titulo: 'Reaproveitamento de Resíduos',
      descricao: 'Transformação de resíduos florestais em recursos valiosos para geração de energia.'
    },
    {
      icone: DollarSign,
      titulo: 'Alternativa Econômica',
      descricao: 'Solução custo-efetiva que gera economia a longo prazo e novas oportunidades de negócio.'
    }
  ];

  const contadores = [
    { numero: 2000, sufixo: '+', descricao: 'Hectares Recuperados', icone: TrendingUp },
    { numero: 300, sufixo: '+', descricao: 'Toneladas Reaproveitadas', icone: RefreshCw },
    { numero: 50, sufixo: '+', descricao: 'Projetos Concluídos', icone: Users },
    { numero: 100, sufixo: '%', descricao: 'Satisfação dos Clientes', icone: Leaf }
  ];

  return (
    <div className="min-h-screen bg-black pt-24">
      {/* Hero Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0">
          <img 
            src="https://i.postimg.cc/wTkwLNZW/cavaco-de-madeira-para-que-serve.jpg"
            alt="Beneficios da Biomas"
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
            Benefícios da Biomassa
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-200 max-w-3xl mx-auto"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Descubra como a biomassa pode transformar seu negócio e contribuir para um futuro sustentável
          </motion.p>
        </div>
      </section>

      {/* Benefícios */}
      <section ref={ref1} className="py-20 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            className="text-4xl lg:text-5xl font-bold text-white text-center mb-16"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Vantagens da Biomassa
          </motion.h2>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isVisible1 ? "visible" : "hidden"}
            className="grid md:grid-cols-2 gap-8"
          >
            {beneficios.map((beneficio) => {
              const IconComponent = beneficio.icone;
              return (
                <motion.div
                  key={beneficio.titulo}
                  variants={fadeInUp}
                  className="bg-zinc-800 p-8 rounded-xl border border-zinc-700 hover:border-red-600/50 transition-all duration-300"
                >
                  <div className="bg-red-600 p-4 rounded-lg w-16 h-16 mb-6 flex items-center justify-center">
                    <IconComponent className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {beneficio.titulo}
                  </h3>
                  <p className="text-gray-300 leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {beneficio.descricao}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Contadores Animados */}
      <section ref={ref2} className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            className="text-4xl lg:text-5xl font-bold text-white text-center mb-16"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Nossos Números
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contadores.map((contador) => {
              const IconComponent = contador.icone;
              return (
                <motion.div
                  key={contador.descricao}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isVisible2 ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.8 }}
                  className="text-center bg-zinc-800 p-8 rounded-xl border border-zinc-700"
                >
                  <div className="bg-red-600 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                    <IconComponent className="text-white" size={24} />
                  </div>
                  <AnimatedCounter 
                    target={contador.numero} 
                    suffix={contador.sufixo}
                    isVisible={isVisible2}
                  />
                  <p className="text-gray-300 mt-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {contador.descricao}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

const AnimatedCounter: React.FC<{ target: number; suffix: string; isVisible: boolean }> = ({ target, suffix, isVisible }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 seconds
    const increment = target / (duration / 16); // 60fps
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target, isVisible]);

  return (
    <div className="text-4xl font-bold text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>
      {count}{suffix}
    </div>
  );
};

export default BeneficiosPage;