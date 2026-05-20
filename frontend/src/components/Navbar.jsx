import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Menu, X, ArrowUpRight } from 'lucide-react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Predictor', path: '/predict' },
    { name: 'Analytics', path: '/dashboard' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-4 sm:px-8 py-4 bg-transparent">
      <div className="max-w-7xl mx-auto glass rounded-2xl px-6 py-3 flex items-center justify-between shadow-glass">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center space-x-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accentViolet to-accentBlue flex items-center justify-center shadow-neon-violet group-hover:scale-105 transition-all">
            <Cpu className="w-5 h-5 text-white animate-pulse" />
          </div>
          <span className="font-extrabold text-xl tracking-tight bg-gradient-to-r from-white via-gray-100 to-gray-400 bg-clip-text text-transparent font-sans">
            PREDICTIFY<span className="text-accentViolet">.AI</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {links.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className="relative font-medium text-sm transition-colors text-gray-300 hover:text-white"
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-accentViolet to-accentBlue shadow-[0_0_8px_#8B5CF6]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link
            to="/predict"
            className="flex items-center space-x-1.5 bg-gradient-to-r from-accentViolet to-accentBlue text-white text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-xl hover:shadow-neon-violet transition-all duration-300 hover:scale-[1.02]"
          >
            <span>Run Prediction</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-xl text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-3 px-4 py-6 glass rounded-2xl flex flex-col space-y-4 shadow-glass border border-white/5"
          >
            {links.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-base font-semibold px-4 py-2.5 rounded-xl transition-all ${
                    isActive
                      ? 'bg-gradient-to-r from-accentViolet/20 to-accentBlue/20 text-white border-l-4 border-accentViolet'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <Link
              to="/predict"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center space-x-2 bg-gradient-to-r from-accentViolet to-accentBlue text-white font-bold text-sm tracking-wider uppercase py-3 rounded-xl hover:shadow-neon-violet transition-all duration-300"
            >
              <span>Run Prediction</span>
              <ArrowUpRight className="w-4.5 h-4.5" />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
