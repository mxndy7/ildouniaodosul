import React from 'react';
import { motion } from 'framer-motion';
import { TreePine, Recycle, MapPin, Truck, CheckCircle } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useScrollEffect';
import { fadeInLeft, fadeInRight } from '../utils/animations';
import { Link } from 'react-router-dom';

const ServicosPage: React.FC = () => {
  const [ref1, isVisible1] = useIntersectionObserver(0.3);
  const [ref2, isVisible2] = useIntersectionObserver(0.3);
  const [ref3, isVisible3] = useIntersectionObserver(0.3);
  const [ref4, isVisible4] = useIntersectionObserver(0.3);

  const servicosDetalhados = [
    {
      id: '1',
      titulo: 'Limpeza e Preparo de Áreas',
      descricao: 'Realizamos a limpeza completa de terrenos florestais, removendo vegetação indesejada e preparando o solo para novos plantios ou projetos de desenvolvimento. Nosso serviço inclui a remoção de galhos, folhas secas e outros materiais orgânicos.',
      imagem: 'https://i.postimg.cc/jdktvVYJ/IMAGEM-DE-PICADOR-OU-DE-SUA-PREFERENCIA-ILDAO-DO-CAPUCCHINO-1.png',
      icone: TreePine,
      beneficios: ['Preparo adequado do solo', 'Remoção de pragas', 'Redução de riscos de incêndio', 'Melhoria da produtividade']
    },
    {
      id: '2',
      titulo: 'Remoção de Resíduos Florestais',
      descricao: 'Especialistas na remoção eficiente de resíduos florestais, incluindo troncos caídos, galhos secos e material orgânico em decomposição. Garantimos a limpeza total da área com equipamentos modernos.',
      imagem: 'https://i.postimg.cc/y6tSgRg9/IMAGEM-DE-PICADOR-OU-DE-SUA-PREFERENCIA-ILDAO-DO-CAPUCCHINO.png',
      icone: Recycle,
      beneficios: ['Limpeza completa', 'Equipamentos modernos', 'Equipe especializada', 'Respeito ao meio ambiente']
    },
    {
      id: '3',
      titulo: 'Produção de Cavaco para Biomassa',
      descricao: 'Transformamos resíduos florestais em cavaco de madeira de alta qualidade para geração de energia limpa. Nosso processo garante a máxima eficiência energética e sustentabilidade.',
      imagem: 'https://i.postimg.cc/GpCNxzty/IMAGEM-DE-PICADOR-OU-DE-SUA-PREFERENCIA-ILDAO-DO-CAPUCCHINO-2.png',
      icone: MapPin,
      beneficios: ['Energia renovável', 'Qualidade garantida', 'Processo sustentável', 'Entrega pontual']
    },
    {
      id: '4',
      titulo: 'Logística e Transporte',
      descricao: 'Oferecemos serviços completos de logística e transporte especializado para materiais florestais e biomassa. Nossa frota está preparada para atender diferentes volumes e distâncias.',
      imagem: 'https://i.postimg.cc/cCn2czRf/IMAGEM-DE-PICADOR-OU-DE-SUA-PREFERENCIA-ILDAO-DO-CAPUCCHINO-3.png',
      icone: Truck,
      beneficios: ['Frota especializada', 'Transporte seguro', 'Cobertura regional']
    }
  ];

  return (
    <div className="min-h-screen bg-black pt-24">
      {/* Hero Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0">
          <img 
            src="https://i.postimg.cc/gk6Nt5xT/federico-respini-s-Yffw0-LNr7s-unsplash.jpg"
            alt="Serviços Florestais"
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
            Nossos Serviços
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-200 max-w-3xl mx-auto"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Soluções completas em manejo florestal sustentável
          </motion.p>
        </div>
      </section>

      {/* Serviços Detalhados */}
      {servicosDetalhados.map((servico, index) => {
        const IconComponent = servico.icone;
        const isEven = index % 2 === 0;
        
        return (
          <section key={servico.id} className={`py-20 ${index % 2 === 0 ? 'bg-zinc-900' : 'bg-black'}`}>
            <div className="max-w-7xl mx-auto px-4 lg:px-8">
              <div className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}>
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className={isEven ? '' : 'lg:col-start-2'}
                >
                  <div className="flex items-center mb-6">
                    <div className="bg-red-600 p-3 rounded-lg mr-4">
                      <IconComponent className="text-white" size={24} />
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-bold text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      {servico.titulo}
                    </h2>
                  </div>
                  
                  <p className="text-lg text-gray-300 mb-8 leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {servico.descricao}
                  </p>

                  <div className="space-y-4 mb-8">
                    {servico.beneficios.map((beneficio, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="text-red-600 flex-shrink-0" size={20} />
                        <span className="text-gray-300" style={{ fontFamily: 'Poppins, sans-serif' }}>
                          {beneficio}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Link
                    to="/contato"
                    className="inline-block bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-200 hover:scale-105"
                  >
                    Solicitar Orçamento
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className={isEven ? '' : 'lg:col-start-1 lg:row-start-1'}
                >
                  <img 
                    src={servico.imagem}
                    alt={servico.titulo}
                    className="w-full h-96 object-cover rounded-lg shadow-2xl"
                  />
                </motion.div>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default ServicosPage;