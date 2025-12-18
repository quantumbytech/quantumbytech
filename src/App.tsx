import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { WhatsAppButton } from './components/layout/WhatsAppButton';
import { MagneticCursor } from './components/animations/MagneticCursor';
import { LoadingScreen } from './components/animations/LoadingScreen';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { ECommerce } from './pages/services/ECommerce';
import { MobileApps } from './pages/services/MobileApps';
import { InformativeWebsites } from './pages/services/InformativeWebsites';
import { DatabaseSolutions } from './pages/services/DatabaseSolutions';
import { Maintenance } from './pages/services/Maintenance';
import { TechSupport } from './pages/services/TechSupport';

function AppContent() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Ensure minimum loading time for smooth experience
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />
      
      {!isLoading && (
        <div className="relative min-h-screen">
          <MagneticCursor />
          <Header />
          
          <main>
            <AnimatePresence mode="wait">
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/services/e-commerce" element={<ECommerce />} />
                <Route path="/services/mobile-apps" element={<MobileApps />} />
                <Route path="/services/informative-websites" element={<InformativeWebsites />} />
                <Route path="/services/database-solutions" element={<DatabaseSolutions />} />
                <Route path="/services/maintenance" element={<Maintenance />} />
                <Route path="/services/tech-support" element={<TechSupport />} />
              </Routes>
            </AnimatePresence>
          </main>

          <Footer />
          <WhatsAppButton />
        </div>
      )}
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
