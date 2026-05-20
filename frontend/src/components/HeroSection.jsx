import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles, Brain, TrendingUp, BarChart2 } from 'lucide-react';

function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100, damping: 15 },
    },
  };

  const stats = [
    { label: 'Dataset records', value: '15,000+', icon: BarChart2, color: 'text-accentViolet' },
    { label: 'Predictive accuracy', value: '94.2%', icon: Brain, color: 'text-accentBlue' },
    { label: 'Role specialities', value: '3 Major Bands', icon: TrendingUp, color: 'text-accentPink' },
  ];

  return (
    <section className="relative overflow-hidden pt-12 pb-24 md:py-36 px-6 sm:px-12 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16">
      {/* Decorative Ambient Blur Spheres */}
      <div className="absolute top-[20%] left-[-5%] w-72 h-72 rounded-full bg-accentViolet/20 blur-[90px] pointer-events-none animate-float" />
      <div className="absolute bottom-[10%] right-[10%] w-80 h-80 rounded-full bg-accentCyan/15 blur-[100px] pointer-events-none animate-float-delayed" />

      {/* Hero Left Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex-1 text-left space-y-8 max-w-2xl"
      >
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center space-x-2 px-4 py-2 glass rounded-full border border-white/10 text-xs font-semibold text-accentViolet tracking-wider uppercase bg-white/5"
        >
          <Sparkles className="w-4 h-4 text-accentViolet animate-spin-slow" />
          <span>Next-Generation Career Forecasting</span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] font-sans"
        >
          Predict Your <span className="bg-gradient-to-r from-accentViolet via-accentBlue to-accentCyan bg-clip-text text-transparent text-glow-violet">Market Value</span> Using Machine Learning.
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg text-gray-400 font-normal leading-relaxed"
        >
          Leverage a Random Forest regression model trained on real-world compensation datasets to forecast your tech salary. Navigate remote flexibility, experience levels, and company scales with precision.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 pt-2">
          <Link
            to="/predict"
            className="px-8 py-4 rounded-2xl bg-gradient-to-r from-accentViolet to-accentBlue text-white font-bold text-sm tracking-wider uppercase hover:shadow-neon-violet hover:scale-[1.03] active:scale-[0.98] transition-all"
          >
            Calculate Salary
          </Link>
          <Link
            to="/dashboard"
            className="px-8 py-4 rounded-2xl glass hover:bg-white/10 text-gray-300 hover:text-white font-bold text-sm tracking-wider uppercase border border-white/15 hover:scale-[1.03] transition-all"
          >
            Explore Analytics
          </Link>
        </motion.div>

        {/* Highlight Stats */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-3 gap-4 sm:gap-6 pt-10 border-t border-white/5"
        >
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="space-y-1.5">
                <div className="flex items-center space-x-2">
                  <Icon className={`w-4 h-4 ${stat.color}`} />
                  <span className="text-xl sm:text-2xl font-black tracking-tight text-white">
                    {stat.value}
                  </span>
                </div>
                <p className="text-xs text-gray-500 font-medium uppercase tracking-wider leading-none">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </motion.div>
      </motion.div>

      {/* Hero Right Visual Element */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 80, damping: 20, delay: 0.4 }}
        className="flex-1 w-full max-w-md md:max-w-lg relative"
      >
        {/* Styled Interactive Code Glass Card */}
        <div className="relative glass rounded-3xl p-6 shadow-glass border border-white/10 overflow-hidden bg-gradient-to-b from-[#0F0E1E] to-[#080812] group">
          <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-accentViolet/25 blur-3xl pointer-events-none group-hover:bg-accentViolet/35 transition-all duration-700" />
          <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full bg-accentBlue/20 blur-3xl pointer-events-none group-hover:bg-accentBlue/30 transition-all duration-700" />

          {/* IDE style layout */}
          <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-5">
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 rounded-full bg-[#EC6A5E]" />
              <span className="w-3 h-3 rounded-full bg-[#F5BF4F]" />
              <span className="w-3 h-3 rounded-full bg-[#61C554]" />
            </div>
            <span className="text-xs font-semibold text-gray-500 font-mono">predictor_engine.py</span>
          </div>

          <div className="space-y-4 font-mono text-[11px] sm:text-xs text-gray-400">
            <div>
              <span className="text-accentPink">import</span> <span className="text-gray-200">joblib, pandas</span>
            </div>
            <div>
              <span className="text-accentViolet">def</span> <span className="text-accentBlue">predict_market_value</span><span className="text-gray-200">(candidate):</span>
            </div>
            <div className="pl-4">
              <span className="text-gray-500"># Mapping input variables to trained RF features</span>
            </div>
            <div className="pl-4">
              <span className="text-gray-200">model = joblib.load(</span><span className="text-accentCyan">"salary_model.pkl"</span><span className="text-gray-200">)</span>
            </div>
            <div className="pl-4">
              <span className="text-gray-200">features = preprocess(candidate)</span>
            </div>
            <div className="pl-4">
              <span className="text-gray-200">pred_log = model.predict(features)</span>
            </div>
            <div className="pl-4">
              <span className="text-accentViolet">return</span> <span className="text-accentBlue">np.expm1</span><span className="text-gray-200">(pred_log[</span><span className="text-accentCyan">0</span><span className="text-gray-200">])</span>
            </div>

            <div className="border-t border-white/5 pt-5 mt-5">
              <div className="flex justify-between items-center bg-[#070710] rounded-xl p-4 border border-white/5">
                <div className="space-y-1">
                  <div className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Salary Prediction Response</div>
                  <div className="text-xl font-black text-white font-sans tracking-tight">$142,230.43<span className="text-xs font-semibold text-gray-400">/year</span></div>
                </div>
                <div className="px-3 py-1 bg-accentViolet/20 text-accentViolet border border-accentViolet/30 text-[10px] font-bold rounded-lg uppercase tracking-wider animate-pulse">
                  Ready
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Small floating decorative badges */}
        <motion.div
          animate={{ y: [-6, 6, -6] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-[20%] right-[-15px] sm:right-[-30px] glass p-3.5 rounded-2xl flex items-center space-x-3 border border-white/10 shadow-glass bg-white/5"
        >
          <div className="w-8 h-8 rounded-lg bg-accentPink/20 flex items-center justify-center border border-accentPink/30">
            <TrendingUp className="w-4.5 h-4.5 text-accentPink" />
          </div>
          <div>
            <div className="text-[9px] font-bold text-gray-500 uppercase leading-none tracking-wider">Market Drift</div>
            <div className="text-xs font-black text-white leading-tight">+14.6% YoY</div>
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [6, -6, 6] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute bottom-[10%] left-[-15px] sm:left-[-30px] glass p-3.5 rounded-2xl flex items-center space-x-3 border border-white/10 shadow-glass bg-white/5"
        >
          <div className="w-8 h-8 rounded-lg bg-accentCyan/20 flex items-center justify-center border border-accentCyan/30">
            <Brain className="w-4.5 h-4.5 text-accentCyan animate-pulse" />
          </div>
          <div>
            <div className="text-[9px] font-bold text-gray-500 uppercase leading-none tracking-wider">Active Regressor</div>
            <div className="text-xs font-black text-white leading-tight">Random Forest</div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default HeroSection;
