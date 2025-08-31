import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, MessageCircle } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useScrollEffect';
import { fadeInUp, fadeInLeft, fadeInRight } from '../utils/animations';

const ContatoPage: React.FC = () => {
  const [ref1, isVisible1] = useIntersectionObserver(0.3);
  const [ref2, isVisible2] = useIntersectionObserver(0.3);
  
  const [formData, setFormData] = useState({
    nome: '',
    empresa: '',
    telefone: '',
    email: '',
    mensagem: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você adicionaria a lógica de envio do formulário
    console.log('Formulário enviado:', formData);
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    setFormData({ nome: '', empresa: '', telefone: '', email: '', mensagem: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-black pt-24">
      {/* Hero Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0">
          <img 
            src="https://i.postimg.cc/htNgWNsQ/mars-plex-ryrx-BUeja-Lo-unsplash.jpg"
            alt="Contato"
            className="w-full h-full object-cover object-center"
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
            Entre em Contato
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-200 max-w-3xl mx-auto"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Estamos prontos para desenvolver a solução ideal para seu projeto
          </motion.p>
        </div>
      </section>

      {/* Contato Principal */}
      <section ref={ref1} className="py-20 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Formulário */}
            <motion.div
              variants={fadeInLeft}
              initial="hidden"
              animate={isVisible1 ? "visible" : "hidden"}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Solicite seu Orçamento
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="nome" className="block text-gray-300 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      Nome *
                    </label>
                    <input
                      type="text"
                      id="nome"
                      name="nome"
                      required
                      value={formData.nome}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:border-red-600 focus:outline-none transition-colors"
                      style={{ fontFamily: 'Poppins, sans-serif' }}
                    />
                  </div>
                  <div>
                    <label htmlFor="empresa" className="block text-gray-300 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      Empresa
                    </label>
                    <input
                      type="text"
                      id="empresa"
                      name="empresa"
                      value={formData.empresa}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:border-red-600 focus:outline-none transition-colors"
                      style={{ fontFamily: 'Poppins, sans-serif' }}
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="telefone" className="block text-gray-300 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      Telefone *
                    </label>
                    <input
                      type="tel"
                      id="telefone"
                      name="telefone"
                      required
                      value={formData.telefone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:border-red-600 focus:outline-none transition-colors"
                      style={{ fontFamily: 'Poppins, sans-serif' }}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-300 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      E-mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:border-red-600 focus:outline-none transition-colors"
                      style={{ fontFamily: 'Poppins, sans-serif' }}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="mensagem" className="block text-gray-300 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Mensagem *
                  </label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    required
                    rows={6}
                    value={formData.mensagem}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:border-red-600 focus:outline-none transition-colors resize-none"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                    placeholder="Descreva seu projeto ou necessidade..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 hover:scale-105 flex items-center justify-center space-x-2"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  <Send size={20} />
                  <span>Enviar Mensagem</span>
                </button>
              </form>
            </motion.div>

            {/* Informações de Contato */}
            <motion.div
              variants={fadeInRight}
              initial="hidden"
              animate={isVisible1 ? "visible" : "hidden"}
              className="space-y-8"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Fale Conosco
              </h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-6 bg-zinc-800 rounded-xl border border-zinc-700">
                  <div className="bg-red-600 p-3 rounded-lg">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      Telefone
                    </h3>
                    <p className="text-gray-300" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      (65) 99912-3456
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-6 bg-zinc-800 rounded-xl border border-zinc-700">
                  <div className="bg-red-600 p-3 rounded-lg">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      E-mail
                    </h3>
                    <p className="text-gray-300" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      contato@grupomedeiros.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-6 bg-zinc-800 rounded-xl border border-zinc-700">
                  <div className="bg-red-600 p-3 rounded-lg">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      Endereço
                    </h3>
                    <p className="text-gray-300" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      11°32'01.5"S 54°21'55.9"W<br />
                      Mato Grosso, Brasil
                    </p>
                  </div>
                </div>

                <a
                  href="https://wa.me/5565999123456"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-6 bg-green-600 hover:bg-green-700 rounded-xl transition-all duration-200 hover:scale-105"
                >
                  <MessageCircle className="text-white" size={24} />
                  <div>
                    <h3 className="text-white font-semibold" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      WhatsApp
                    </h3>
                    <p className="text-green-100" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      Fale conosco agora
                    </p>
                  </div>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mapa */}
      <section ref={ref2} className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            className="text-4xl lg:text-5xl font-bold text-white text-center mb-12"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Nossa Localização
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="bg-zinc-800 p-4 rounded-xl"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3879.492847935485!2d-54.3697277!3d-11.5395583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDMyJzAxLjUiUyA1NMKwMjEnNTUuOSJX!5e0!3m2!1spt!2sbr!4v1643723448123!5m2!1spt!2sbr"
              width="100%"
              height="450"
              style={{ border: 0, borderRadius: '8px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className=""
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContatoPage;
