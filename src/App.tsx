import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useState, useEffect, lazy, Suspense } from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { WhatsAppButton } from './components/layout/WhatsAppButton';
import { MagneticCursor } from './components/animations/MagneticCursor';
import { LoadingScreen } from './components/animations/LoadingScreen';
import { Home } from './pages/Home';

// Lazy load pages for better performance
const Services = lazy(() => import('./pages/Services').then(module => ({ default: module.Services })));
const About = lazy(() => import('./pages/About').then(module => ({ default: module.About })));
const Contact = lazy(() => import('./pages/Contact').then(module => ({ default: module.Contact })));
const ECommerce = lazy(() => import('./pages/services/ECommerce').then(module => ({ default: module.ECommerce })));
const MobileApps = lazy(() => import('./pages/services/MobileApps').then(module => ({ default: module.MobileApps })));
const InformativeWebsites = lazy(() => import('./pages/services/InformativeWebsites').then(module => ({ default: module.InformativeWebsites })));
const DatabaseSolutions = lazy(() => import('./pages/services/DatabaseSolutions').then(module => ({ default: module.DatabaseSolutions })));
const Maintenance = lazy(() => import('./pages/services/Maintenance').then(module => ({ default: module.Maintenance })));
const TechSupport = lazy(() => import('./pages/services/TechSupport').then(module => ({ default: module.TechSupport })));

function AppContent() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Smooth loading experience
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);

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
            <Suspense fallback={<div className="min-h-screen" />}>
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
            </Suspense>
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
