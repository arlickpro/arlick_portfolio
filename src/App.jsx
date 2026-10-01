import { useState } from 'react';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import WhyWorkWithMe from './components/WhyWorkWithMe';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import Toast from './components/Toast';

export default function App() {
  const [toast, setToast] = useState(null);

  const triggerToast = ({ type = 'info', message }) => {
    setToast({ type, message });
    setTimeout(() => {
      setToast(null);
    }, 3800);
  };

  const closeToast = () => {
    setToast(null);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-cyan-500/20 selection:text-cyan-400 relative overflow-x-hidden">
      {/* Background ambient subtle glow blobs */}
      <div className="fixed top-20 left-1/4 -translate-x-1/2 w-[500px] h-[500px] bg-cyan-500/10 blur-3xl rounded-full pointer-events-none -z-10" />
      <div className="fixed bottom-20 right-1/4 translate-x-1/2 w-[550px] h-[550px] bg-purple-500/10 blur-3xl rounded-full pointer-events-none -z-10" />

      {/* Scroll Progress Bar */}
      <ScrollProgress />

      {/* Glass Navbar */}
      <Navbar />

      {/* Main Sections */}
      <main>
        <Hero onTriggerToast={triggerToast} />
        <About />
        <Services />
        <Projects onTriggerToast={triggerToast} />
        <WhyWorkWithMe />
        <Contact onTriggerToast={triggerToast} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Back to Top Button */}
      <BackToTop />

      {/* Toast Notification */}
      <Toast toast={toast} onClose={closeToast} />
    </div>
  );
}
