import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import QuemSomos from './components/QuemSomos';
import Servicos from './components/Servicos';
import Diferenciais from './components/Diferenciais';
import ChamadaParaAcao from './components/ChamadaParaAcao';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import BackToTop from './components/BackToTop';
import ScrollToTop from './components/ScrollToTop';

// Pages
import QuemSomosPage from './pages/QuemSomosPage';
import ServicosPage from './pages/ServicosPage';
import BeneficiosPage from './pages/BeneficiosPage';
import ContatoPage from './pages/ContatoPage';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <QuemSomos />
      <Servicos />
      <Diferenciais />
      <ChamadaParaAcao />
    </>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-black text-white">
        <Header />
        
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/quem-somos" element={<QuemSomosPage />} />
            <Route path="/servicos" element={<ServicosPage />} />
            <Route path="/beneficios" element={<BeneficiosPage />} />
            <Route path="/contato" element={<ContatoPage />} />
          </Routes>
        </main>

        <Footer />
        <WhatsAppButton />
        <BackToTop />
      </div>
    </Router>
  );
}

export default App;