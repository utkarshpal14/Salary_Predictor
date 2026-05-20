import React, { useState } from 'react';
import PredictionForm from '../components/PredictionForm';
import ResultCard from '../components/ResultCard';
import { salaryApi } from '../api/api';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldAlert, Sparkles, Terminal } from 'lucide-react';

function Predict() {
  const [result, setResult] = useState(null);
  const [inputs, setInputs] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handlePredictionSubmit = async (formData) => {
    setIsLoading(true);
    setError(null);
    setInputs(formData);
    
    try {
      const response = await salaryApi.predictSalary(formData);
      setResult(response.predicted_salary);
    } catch (err) {
      setError(err.message || 'Failed to connect to the prediction backend.');
      setResult(null);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="py-12 px-6 sm:px-12 max-w-7xl mx-auto space-y-10">
      {/* Page Header */}
      <div className="text-left space-y-2">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-sans">
          AI Salary <span className="bg-gradient-to-r from-accentViolet to-accentBlue bg-clip-text text-transparent">Workspace</span>
        </h1>
        <p className="text-sm text-gray-400 max-w-2xl font-normal leading-relaxed">
          Configure your professional parameters to run high-fidelity machine learning predictions on tech industry compensation scales.
        </p>
      </div>

      {/* Main Grid Workspace */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Input Selection Form */}
        <div className="lg:col-span-7">
          <PredictionForm onPredict={handlePredictionSubmit} isLoading={isLoading} />
        </div>

        {/* Right: Real-time Output Visualizations */}
        <div className="lg:col-span-5 h-full">
          <AnimatePresence mode="wait">
            {error && (
              <motion.div
                key="error"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="glass rounded-3xl p-6 sm:p-8 border border-red-500/20 bg-gradient-to-b from-[#1E0F0F]/80 to-[#100707]/90 text-left space-y-4 shadow-glass"
              >
                <div className="flex items-center space-x-3 text-red-400">
                  <div className="p-2 bg-red-400/10 rounded-xl border border-red-400/20">
                    <ShieldAlert className="w-5.5 h-5.5 text-red-400" />
                  </div>
                  <h3 className="font-bold text-base">Backend Connection Offline</h3>
                </div>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-sans">
                  {error}
                </p>
                <div className="pt-2 border-t border-white/5 space-y-2">
                  <div className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Troubleshooting Instructions</div>
                  <ul className="list-disc list-inside text-[11px] text-gray-400 space-y-1 leading-normal font-sans">
                    <li>Verify the FastAPI backend is running locally at <code className="text-accentViolet">http://127.0.0.1:8000</code></li>
                    <li>Verify that CORS configurations allow localhost domain hooks.</li>
                  </ul>
                </div>
              </motion.div>
            )}

            {result !== null && !isLoading && !error && (
              <ResultCard key="result" salary={result} inputs={inputs} />
            )}

            {!isLoading && result === null && !error && (
              <motion.div
                key="waiting"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="glass rounded-3xl p-8 border border-white/5 bg-gradient-to-b from-[#0F0E1E]/40 to-[#05050C]/60 h-full flex flex-col items-center justify-center text-center space-y-6 min-h-[420px] relative overflow-hidden"
              >
                <div className="absolute w-44 h-44 rounded-full bg-accentViolet/5 blur-3xl pointer-events-none" />
                
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accentViolet/10 to-accentBlue/10 flex items-center justify-center border border-white/10 relative shadow-neon-violet animate-float">
                  <Sparkles className="w-8 h-8 text-accentViolet" />
                </div>
                
                <div className="space-y-2 max-w-xs">
                  <h3 className="text-base font-bold text-white tracking-tight">Awaiting Selection</h3>
                  <p className="text-xs text-gray-500 leading-relaxed font-normal">
                    Submit the predictor form to compile dummy encoded vector arrays and launch the Random Forest estimation query.
                  </p>
                </div>
              </motion.div>
            )}

            {isLoading && (
              <motion.div
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="glass rounded-3xl p-8 border border-white/5 bg-gradient-to-b from-[#0F0E1E]/40 to-[#05050C]/60 h-full flex flex-col items-center justify-center text-center space-y-6 min-h-[420px]"
              >
                <div className="relative flex items-center justify-center">
                  <div className="w-16 h-16 border-4 border-accentViolet/20 border-t-accentViolet rounded-full animate-spin" />
                  <Terminal className="w-6 h-6 text-accentViolet absolute animate-pulse" />
                </div>
                <div className="space-y-1.5 max-w-xs">
                  <h3 className="text-base font-bold text-white tracking-tight">Funnels & Vectorization</h3>
                  <p className="text-xs text-gray-500 leading-relaxed font-normal">
                    Aligning categorical indices and mapping log scales to expm1 coordinates...
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default Predict;
