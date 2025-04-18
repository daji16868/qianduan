import React, { Suspense, lazy } from 'react';
import ErrorBoundary from './components/common/ErrorBoundary';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import { FullPageLoader } from './components/common/Loader';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Cases = lazy(() => import('./pages/Cases'));
const Services = lazy(() => import('./pages/Services'));
const Info = lazy(() => import('./pages/Info'));
const Contact = lazy(() => import('./pages/Contact'));

// AnimatedRoutes component for page transitions
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<FullPageLoader />}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cases" element={<Cases />} />
          <Route path="/services" element={<Services />} />
          <Route path="/info" element={<Info />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
};

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow pt-[72px] lg:pt-[104px]">
            <AnimatedRoutes />
          </main>
          <Footer />
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;