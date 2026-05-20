import React from 'react';
import { Cpu, Terminal, Shield, GitBranch } from 'lucide-react';

function Footer() {
  return (
    <footer className="w-full bg-[#030308] border-t border-white/5 py-12 px-6 sm:px-12 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-gray-500">
        
        {/* Brand details */}
        <div className="flex flex-col space-y-2 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start space-x-2 text-white font-extrabold tracking-tight">
            <div className="w-6 h-6 rounded-md bg-gradient-to-br from-accentViolet to-accentBlue flex items-center justify-center">
              <Cpu className="w-3.5 h-3.5 text-white" />
            </div>
            <span>PREDICTIFY<span className="text-accentViolet">.AI</span></span>
          </div>
          <p className="text-xs text-gray-600 font-sans max-w-sm">
            AI-Powered compensation analytics and dynamic machine learning forecasting for high-growth tech careers.
          </p>
        </div>

        {/* Architectural specifics */}
        <div className="flex flex-wrap justify-center gap-8 text-xs font-semibold uppercase tracking-wider text-gray-600">
          <div className="flex items-center space-x-1.5">
            <Terminal className="w-4 h-4 text-accentViolet" />
            <span>FastAPI + Scikit-Learn</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <Shield className="w-4 h-4 text-accentBlue" />
            <span>Random Forest Regressor</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <GitBranch className="w-4 h-4 text-accentPink" />
            <span>React + Vite + Recharts</span>
          </div>
        </div>

        {/* Copyright info */}
        <div className="text-center md:text-right text-xs text-gray-600 font-sans">
          <span>&copy; {new Date().getFullYear()} Predictify.AI. All rights reserved.</span>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
