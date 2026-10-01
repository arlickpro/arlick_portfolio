import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 350) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      id="back-to-top-btn"
      aria-label="Back to top of page"
      className="fixed bottom-6 right-6 z-40 p-3.5 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 hover:from-cyan-300 hover:to-purple-400 text-white shadow-2xl shadow-cyan-500/30 hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
    >
      <ChevronUp className="w-5 h-5" />
    </button>
  );
}
