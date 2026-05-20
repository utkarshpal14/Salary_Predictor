import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Calendar, Clock, Compass, ArrowRight } from 'lucide-react';

function ResultCard({ salary, inputs }) {
  // Format annual salary
  const formattedSalary = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(salary);

  // Derivations
  const monthlySalary = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(salary / 12);

  const hourlyRate = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 2,
  }).format(salary / (52 * 40)); // 40h/week, 52 weeks

  // Dynamic advice generator based on input parameters
  const getDynamicAdvice = () => {
    const advice = [];
    if (inputs.remote_ratio < 100) {
      advice.push('Transitioning to 100% Fully Remote work can increase global career opportunities by up to 2.4x.');
    }
    if (inputs.company_size !== 'L') {
      advice.push('Large scale (L) companies pay an average of 18.5% higher base salaries for identical technology titles.');
    }
    if (inputs.employee_residence !== 'US' && inputs.company_location === 'US') {
      advice.push('Residing outside the US while contracting remote for a US company offers optimal salary-to-living-cost leverage.');
    }
    if (inputs.experience_years < 5) {
      advice.push('Hitting the 5-year senior mark is projected to increase your market valuation by roughly 27.4%.');
    }
    if (advice.length === 0) {
      advice.push('Your career profile is currently fully optimized for peak market value compensation!');
    }
    return advice;
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 15 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 15 }}
      className="glass rounded-3xl p-6 sm:p-8 shadow-glass border border-accentViolet/20 relative overflow-hidden bg-gradient-to-b from-[#110D2D]/60 to-[#05050C]/90"
    >
      {/* Decorative neon visual overlays */}
      <div className="absolute top-[-50px] right-[-50px] w-48 h-48 rounded-full bg-accentViolet/20 blur-3xl pointer-events-none animate-pulse-slow" />

      {/* Comp finalized badge */}
      <div className="flex items-center space-x-2 text-xs font-bold text-accentViolet uppercase tracking-wider mb-5">
        <Sparkles className="w-4 h-4 text-accentViolet animate-spin-slow" />
        <span>Computation Finalized</span>
      </div>

      {/* Main highlighted estimated salary output */}
      <div className="space-y-1 mb-8">
        <div className="text-xs font-semibold text-gray-500 uppercase tracking-widest leading-none">Estimated Base Compensation</div>
        <div className="flex items-baseline space-x-1">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight text-glow-violet font-sans"
          >
            {formattedSalary}
          </motion.span>
          <span className="text-sm font-bold text-gray-400">/year</span>
        </div>
      </div>

      {/* Salary Breakdowns */}
      <div className="grid grid-cols-2 gap-4 border-t border-b border-white/5 py-6 mb-8 bg-[#090818]/40 rounded-2xl px-5 border border-white/5">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-accentBlue/10 flex items-center justify-center border border-accentBlue/20">
            <Calendar className="w-5 h-5 text-accentBlue" />
          </div>
          <div>
            <div className="text-[10px] text-gray-500 font-bold uppercase tracking-wider leading-none mb-1">Monthly Equivalent</div>
            <div className="text-base font-extrabold text-white">{monthlySalary}</div>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-accentPink/10 flex items-center justify-center border border-accentPink/20">
            <Clock className="w-5 h-5 text-accentPink" />
          </div>
          <div>
            <div className="text-[10px] text-gray-500 font-bold uppercase tracking-wider leading-none mb-1">Hourly Equivalent</div>
            <div className="text-base font-extrabold text-white">
              {hourlyRate}
              <span className="text-[10px] font-medium text-gray-400">/hr</span>
            </div>
          </div>
        </div>
      </div>

      {/* Dynamic Career Guidance Advice */}
      <div className="space-y-4">
        <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center space-x-2">
          <Compass className="w-4.5 h-4.5 text-accentCyan animate-pulse" />
          <span>Strategic Optimization Advice</span>
        </h3>
        
        <ul className="space-y-3">
          {getDynamicAdvice().map((advice, idx) => (
            <motion.li
              key={idx}
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 + idx * 0.1 }}
              className="flex items-start space-x-2.5 text-xs sm:text-sm text-gray-400 leading-relaxed font-sans"
            >
              <ArrowRight className="w-4 h-4 text-accentViolet flex-shrink-0 mt-0.5" />
              <span>{advice}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default ResultCard;
