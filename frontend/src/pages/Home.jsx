import React from 'react';
import HeroSection from '../components/HeroSection';
import { motion } from 'framer-motion';
import { Sparkles, Brain, Award, Cpu, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

function Home() {
  const features = [
    {
      title: 'ML-Powered Estimations',
      desc: 'Our Random Forest regressor analyses 8 different dimensions of industry data to output optimal predictions.',
      icon: Brain,
      color: 'from-accentViolet to-accentBlue',
    },
    {
      title: 'Strategic Career Compass',
      desc: 'Get highly actionable guidance calculated in real-time to optimize your remote setups and size benchmarks.',
      icon: Sparkles,
      color: 'from-accentBlue to-accentCyan',
    },
    {
      title: 'Unified Global Benchmarks',
      desc: 'Compare salaries across 20+ countries and residences to leverage location arbitrage in negotiations.',
      icon: Award,
      color: 'from-accentPink to-accentViolet',
    },
  ];

  return (
    <div className="space-y-24 pb-20 overflow-hidden">
      <HeroSection />

      {/* Feature Highlight Section */}
      <section className="px-6 sm:px-12 max-w-7xl mx-auto space-y-16">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 glass rounded-full border border-white/5 text-[10px] font-bold text-accentViolet tracking-wider uppercase bg-white/5">
            <Cpu className="w-3.5 h-3.5" />
            <span>Advanced System Utilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-sans">
            Engineered for <span className="bg-gradient-to-r from-accentViolet to-accentBlue bg-clip-text text-transparent">Professional Depth</span>
          </h2>
          <p className="text-sm text-gray-400 font-normal leading-relaxed">
            Harness tools built on verified ML regressions and real-world global tech compensation datasets.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ type: 'spring', stiffness: 100, damping: 15, delay: idx * 0.1 }}
                className="glass rounded-3xl p-6 sm:p-8 border border-white/5 bg-gradient-to-b from-[#0F0E1E] to-[#05050C] glass-hover flex flex-col justify-between"
              >
                <div className="space-y-6">
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-lg`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  {/* Copy */}
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-white tracking-tight font-sans">{feature.title}</h3>
                    <p className="text-sm text-gray-400 font-normal leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* How it Works / Roadmap Section */}
      <section className="px-6 sm:px-12 max-w-7xl mx-auto space-y-16">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-sans">
            Three Steps to <span className="bg-gradient-to-r from-accentBlue to-accentCyan bg-clip-text text-transparent">Unlocking Clarity</span>
          </h2>
          <p className="text-sm text-gray-400 leading-relaxed font-normal">
            A frictionless pipeline engineered to deliver immediate tech salary calibrations.
          </p>
        </div>

        {/* Steps Flow */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {[
            { step: '01', title: 'Input Attributes', desc: 'Define your role speciality, experience years, locations, and preferred work environment setup.' },
            { step: '02', title: 'Compute Value', desc: 'Our active Scikit-Learn regressor weights your parameters against engineered dummy-encoded vectors.' },
            { step: '03', title: 'Analyze Strategy', desc: 'Review comprehensive compensation breakdowns and customized AI instructions to negotiate higher.' },
          ].map((item, idx) => (
            <div key={idx} className="relative glass rounded-3xl p-6 sm:p-8 border border-white/5 bg-gradient-to-b from-[#0F0E1E]/50 to-[#05050C]/50">
              <div className="text-4xl font-black text-white/5 absolute top-5 right-5 font-sans leading-none">{item.step}</div>
              <div className="space-y-3 pt-4">
                <h3 className="text-base font-bold text-white tracking-tight">{item.title}</h3>
                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-normal">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Premium End CTA */}
      <section className="px-6 sm:px-12 max-w-7xl mx-auto">
        <div className="glass rounded-3xl p-8 sm:p-12 border border-white/10 relative overflow-hidden bg-gradient-to-r from-[#110D2D]/60 via-[#070712]/90 to-[#0F0E1E]/80 text-center space-y-6">
          <div className="absolute top-[-100px] left-[50%] transform -translate-x-1/2 w-80 h-80 rounded-full bg-accentViolet/10 blur-[80px] pointer-events-none" />
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-sans max-w-2xl mx-auto">
            Ready to Discover Your True Financial Potential?
          </h2>
          <p className="text-sm text-gray-400 leading-relaxed max-w-xl mx-auto font-normal">
            Calibrate your salary expectation using advanced AI regressor metrics today.
          </p>
          <div className="pt-4">
            <Link
              to="/predict"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-accentViolet to-accentBlue text-white font-bold text-sm tracking-wider uppercase px-8 py-4 rounded-2xl shadow-neon-violet hover:scale-[1.03] active:scale-[0.98] transition-all"
            >
              <span>Launch Predictor Workspace</span>
              <ArrowRight className="w-4.5 h-4.5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
