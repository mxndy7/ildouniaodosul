import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Phone, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo e Descrição */}
          <div className="lg:col-span-2">
            <img 
              src="https://i.postimg.cc/sDDvqXR1/427637661-331391836569900-384040602156394090-n-removebg-preview.png" 
              alt="Grupo Medeiros" 
              className="h-22 w-auto mb-6"
            />
            <p className="text-gray-400 leading-relaxed max-w-md" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Especialistas em soluções sustentáveis para o setor florestal, transformando resíduos em energia limpa.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-white font-semibold mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Links Rápidos
            </h3>
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'Quem Somos', path: '/quem-somos' },
                { name: 'Serviços', path: '/servicos' },
                { name: 'Contato', path: '/contato' },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="hover:text-red-600 transition-colors duration-200"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-white font-semibold mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Contato
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Phone size={16} />
                <span style={{ fontFamily: 'Poppins, sans-serif' }}>(65) 99912-3456</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={16} />
                <span style={{ fontFamily: 'Poppins, sans-serif' }}>contato@grupomedeiros.com</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Rodovia MT 423<br />
                  União do Sul 78543000
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Redes Sociais e Copyright */}
        <div className="border-t border-zinc-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0" style={{ fontFamily: 'Poppins, sans-serif' }}>
            © {currentYear} Grupo Medeiros. Todos os direitos reservados.
          </p>
          
          <div className="flex items-center space-x-6">
            <a
              href="https://www.instagram.com/grupomedeiros_/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-600 transition-colors duration-200"
            >
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;