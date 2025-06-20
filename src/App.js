import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaArrowUp } from 'react-icons/fa';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header.jsx';
import Hero from './Components/Hero/Hero.jsx';
import ServiceForm from './Components/ServiceForm/ServiceForm.jsx';
import Features from './Components/Features/Featuers.jsx';
import Testimonials from './Components/Testimonials/Testimonials.jsx';
import Footer from './Components/Footer/Footer.jsx';
import ChatbaseChatbot from './Components/Chatbot/Chatbot.jsx';
import About from './Pages/About/About.jsx';
import Clients from './Pages/Clients/Clients.jsx';
import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const serviceFormRef = useRef(null);
  const featuresRef = useRef(null);
  const footerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleContactScroll = () => {
    serviceFormRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleGetStarted = () => {
    featuresRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app">
      <ToastContainer position="top-center" autoClose={3000} />
      <Header
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
        onGetStarted={handleContactScroll}
      />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero onContact={handleGetStarted} />
                <Features ref={featuresRef} />
                <ServiceForm ref={serviceFormRef} />
                <Testimonials />
              </>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/clients" element={<Clients />} />
        </Routes>
      </main>
      <Footer />
      {showScrollTop && (
        <button
          className="scroll-to-top"
          onClick={handleScrollTop}
          aria-label="Scroll to top"
        >
          <FaArrowUp />
        </button>
      )}
      <h2 className="Ai-title">Maani AI</h2>
      <ChatbaseChatbot />
    </div>
  );
}

export default App;