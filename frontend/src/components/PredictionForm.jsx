import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Brain, HelpCircle, Briefcase, Globe, Settings, Award } from 'lucide-react';

const EMPLOYMENT_TYPES = [
  { value: 'FT', label: 'Full-Time (FT)' },
  { value: 'CT', label: 'Contract (CT)' },
  { value: 'PT', label: 'Part-Time (PT)' },
  { value: 'FL', label: 'Freelance (FL)' },
];

const COMPANY_SIZES = [
  { value: 'S', label: 'Small (< 50 employees)' },
  { value: 'M', label: 'Medium (50 - 250 employees)' },
  { value: 'L', label: 'Large (> 250 employees)' },
];

const ROLE_CATEGORIES = [
  { value: 'Data Scientist', label: 'Data Scientist' },
  { value: 'Data Engineer', label: 'Data Engineer' },
  { value: 'Data Analyst', label: 'Data Analyst' },
  { value: 'Machine Learning Engineer', label: 'Machine Learning Engineer' },
  { value: 'Research Scientist', label: 'Research Scientist' },
  { value: 'Data Science Manager', label: 'Data Science Manager' },
  { value: 'Data Architect', label: 'Data Architect' },
  { value: 'Machine Learning Scientist', label: 'Machine Learning Scientist' },
  { value: 'Big Data Engineer', label: 'Big Data Engineer' },
  { value: 'AI Scientist', label: 'AI Scientist' },
  { value: 'Director of Data Science', label: 'Director of Data Science' },
  { value: 'Data Science Consultant', label: 'Data Science Consultant' },
  { value: 'Data Analytics Manager', label: 'Data Analytics Manager' },
  { value: 'BI Data Analyst', label: 'BI Data Analyst' },
  { value: 'Computer Vision Engineer', label: 'Computer Vision Engineer' },
  { value: 'ML Engineer', label: 'ML Engineer' },
  { value: 'Lead Data Engineer', label: 'Lead Data Engineer' },
  { value: 'Applied Data Scientist', label: 'Applied Data Scientist' },
  { value: 'Business Data Analyst', label: 'Business Data Analyst' },
  { value: 'Data Engineering Manager', label: 'Data Engineering Manager' },
  { value: 'Head of Data', label: 'Head of Data' },
  { value: 'Analytics Engineer', label: 'Analytics Engineer' },
  { value: 'Data Science Engineer', label: 'Data Science Engineer' },
  { value: 'Lead Data Analyst', label: 'Lead Data Analyst' },
  { value: 'Machine Learning Developer', label: 'Machine Learning Developer' },
  { value: 'Computer Vision Software Engineer', label: 'Computer Vision Software Engineer' },
  { value: 'NLP Engineer', label: 'NLP Engineer' },
];

const COUNTRIES = [
  { code: 'US', name: 'United States (US)' },
  { code: 'GB', name: 'United Kingdom (GB)' },
  { code: 'IN', name: 'India (IN)' },
  { code: 'DE', name: 'Germany (DE)' },
  { code: 'CA', name: 'Canada (CA)' },
  { code: 'FR', name: 'France (FR)' },
  { code: 'ES', name: 'Spain (ES)' },
  { code: 'AU', name: 'Australia (AU)' },
  { code: 'JP', name: 'Japan (JP)' },
  { code: 'BR', name: 'Brazil (BR)' },
  { code: 'NL', name: 'Netherlands (NL)' },
  { code: 'MX', name: 'Mexico (MX)' },
  { code: 'IT', name: 'Italy (IT)' },
  { code: 'PL', name: 'Poland (PL)' },
  { code: 'PT', name: 'Portugal (PT)' },
  { code: 'PK', name: 'Pakistan (PK)' },
  { code: 'RU', name: 'Russia (RU)' },
  { code: 'CN', name: 'China (CN)' },
  { code: 'AE', name: 'United Arab Emirates (AE)' },
  { code: 'SG', name: 'Singapore (SG)' },
];

const WORK_YEARS = [2024, 2023, 2022, 2021];

const REMOTE_RATIOS = [
  { value: 100, label: '100% Fully Remote' },
  { value: 50, label: '50% Hybrid Work' },
  { value: 0, label: '0% Fully On-site' },
];

function PredictionForm({ onPredict, isLoading }) {
  const [formData, setFormData] = useState({
    work_year: 2024,
    employment_type: 'FT',
    employee_residence: 'US',
    remote_ratio: 100,
    company_location: 'US',
    company_size: 'M',
    experience_years: 3,
    role_category: 'Data Scientist',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'work_year' || name === 'remote_ratio' || name === 'experience_years'
        ? Number(value)
        : value,
    }));
    // Clear validation error when typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (formData.experience_years < 0 || formData.experience_years > 40) {
      newErrors.experience_years = 'Experience must be between 0 and 40 years';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onPredict(formData);
    }
  };

  return (
    <div className="glass rounded-3xl p-6 sm:p-8 shadow-glass border border-white/10 relative overflow-hidden bg-gradient-to-b from-[#0F0E1E]/80 to-[#070712]/90">
      {/* Decorative neon corner glow */}
      <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-accentViolet/5 blur-[50px] pointer-events-none" />
      
      <div className="flex items-center space-x-3 mb-8 border-b border-white/5 pb-4">
        <div className="p-2.5 rounded-xl bg-accentViolet/10 border border-accentViolet/20">
          <Brain className="w-5.5 h-5.5 text-accentViolet animate-pulse" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-white tracking-tight">Predictor Attributes</h2>
          <p className="text-xs text-gray-500 font-medium">Input your career profile parameters below.</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Core Career Attributes Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Role Category */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center space-x-1.5">
              <Briefcase className="w-3.5 h-3.5 text-accentViolet" />
              <span>Role Speciality</span>
            </label>
            <select
              name="role_category"
              value={formData.role_category}
              onChange={handleChange}
              className="w-full bg-[#080715] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-accentViolet focus:ring-1 focus:ring-accentViolet/50 transition-all font-sans"
            >
              {ROLE_CATEGORIES.map((role) => (
                <option key={role.value} value={role.value}>
                  {role.label}
                </option>
              ))}
            </select>
          </div>

          {/* Experience Years */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center space-x-1.5">
              <Award className="w-3.5 h-3.5 text-accentPink" />
              <span>Years of Experience</span>
            </label>
            <input
              type="number"
              name="experience_years"
              min="0"
              max="40"
              value={formData.experience_years}
              onChange={handleChange}
              className={`w-full bg-[#080715] border rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-accentPink focus:ring-1 focus:ring-accentPink/50 transition-all font-sans ${
                errors.experience_years ? 'border-red-500' : 'border-white/10'
              }`}
            />
            {errors.experience_years && (
              <p className="text-[10px] font-semibold text-red-400">{errors.experience_years}</p>
            )}
          </div>
        </div>

        {/* Global Locations Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Employee Residence */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center space-x-1.5">
              <Globe className="w-3.5 h-3.5 text-accentBlue" />
              <span>Employee Residence</span>
            </label>
            <select
              name="employee_residence"
              value={formData.employee_residence}
              onChange={handleChange}
              className="w-full bg-[#080715] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-accentBlue focus:ring-1 focus:ring-accentBlue/50 transition-all font-sans"
            >
              {COUNTRIES.map((c) => (
                <option key={c.code} value={c.code}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>

          {/* Company Location */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center space-x-1.5">
              <Globe className="w-3.5 h-3.5 text-accentCyan" />
              <span>Company HQ Location</span>
            </label>
            <select
              name="company_location"
              value={formData.company_location}
              onChange={handleChange}
              className="w-full bg-[#080715] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-accentCyan focus:ring-1 focus:ring-accentCyan/50 transition-all font-sans"
            >
              {COUNTRIES.map((c) => (
                <option key={c.code} value={c.code}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Employment Scales & Dynamics */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {/* Employment Type */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center space-x-1.5">
              <Briefcase className="w-3.5 h-3.5 text-accentViolet" />
              <span>Contract Type</span>
            </label>
            <select
              name="employment_type"
              value={formData.employment_type}
              onChange={handleChange}
              className="w-full bg-[#080715] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-accentViolet focus:ring-1 focus:ring-accentViolet/50 transition-all font-sans"
            >
              {EMPLOYMENT_TYPES.map((type) => (
                <option key={type.value} value={type.value}>
                  {type.label}
                </option>
              ))}
            </select>
          </div>

          {/* Remote Ratio */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center space-x-1.5">
              <Settings className="w-3.5 h-3.5 text-accentBlue" />
              <span>Remote Setup</span>
            </label>
            <select
              name="remote_ratio"
              value={formData.remote_ratio}
              onChange={handleChange}
              className="w-full bg-[#080715] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-accentBlue focus:ring-1 focus:ring-accentBlue/50 transition-all font-sans"
            >
              {REMOTE_RATIOS.map((ratio) => (
                <option key={ratio.value} value={ratio.value}>
                  {ratio.label}
                </option>
              ))}
            </select>
          </div>

          {/* Company Size */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center space-x-1.5">
              <Settings className="w-3.5 h-3.5 text-accentPink" />
              <span>Company Size</span>
            </label>
            <select
              name="company_size"
              value={formData.company_size}
              onChange={handleChange}
              className="w-full bg-[#080715] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-accentPink focus:ring-1 focus:ring-accentPink/50 transition-all font-sans"
            >
              {COMPANY_SIZES.map((size) => (
                <option key={size.value} value={size.value}>
                  {size.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Prediction Work Year */}
        <div className="grid grid-cols-1 gap-6">
          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center space-x-1.5">
              <Award className="w-3.5 h-3.5 text-accentCyan" />
              <span>Work Year Benchmarking</span>
            </label>
            <div className="flex gap-4">
              {WORK_YEARS.map((year) => (
                <button
                  key={year}
                  type="button"
                  onClick={() => setFormData((prev) => ({ ...prev, work_year: year }))}
                  className={`flex-grow py-3 px-4 rounded-xl border text-sm font-semibold transition-all ${
                    formData.work_year === year
                      ? 'bg-gradient-to-r from-accentViolet/25 to-accentBlue/25 border-accentViolet text-white shadow-neon-violet'
                      : 'bg-[#080715] border-white/5 text-gray-400 hover:text-white hover:border-white/10'
                  }`}
                >
                  {year}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Submit CTA */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full py-4 rounded-2xl bg-gradient-to-r from-accentViolet to-accentBlue text-white font-extrabold text-sm tracking-wider uppercase shadow-neon-violet hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 disabled:scale-100 disabled:pointer-events-none transition-all flex items-center justify-center space-x-2 mt-4"
        >
          {isLoading ? (
            <>
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              <span>Computing Market Value...</span>
            </>
          ) : (
            <>
              <Brain className="w-4.5 h-4.5" />
              <span>Submit Profile</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
}

export default PredictionForm;
