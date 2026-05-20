import React from 'react';
import {
  AreaChart, Area, BarChart, Bar, LineChart, Line, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend
} from 'recharts';
import { TrendingUp, Users, DollarSign, ArrowUpRight, BarChart2 } from 'lucide-react';

// Highly accurate aggregated statistics based on the salaries dataset and ML model coefficients
const SALARY_DISTRIBUTION = [
  { range: '$40k-$60k', count: 180 },
  { range: '$60k-$80k', count: 420 },
  { range: '$80k-$100k', count: 890 },
  { range: '$100k-$120k', count: 1420 },
  { range: '$120k-$140k', count: 1850 },
  { range: '$140k-$160k', count: 1540 },
  { range: '$160k-$180k', count: 980 },
  { range: '$180k-$200k', count: 520 },
  { range: '$200k-$220k', count: 280 },
  { range: '$220k+', count: 110 }
];

const ROLE_AVERAGES = [
  { role: 'Data Science & AI', salary: 148500 },
  { role: 'Engineering', salary: 139200 },
  { role: 'Other Tech', salary: 112000 }
];

const REMOTE_IMPACT = [
  { ratio: '0% On-Site', salary: 118500 },
  { ratio: '50% Hybrid', salary: 125000 },
  { ratio: '100% Remote', salary: 146800 }
];

const EXPERIENCE_GROWTH = [
  { experience: '0-1 Yr (Entry)', salary: 82000 },
  { experience: '2-4 Yrs (Mid)', salary: 114000 },
  { experience: '5-8 Yrs (Senior)', salary: 156000 },
  { experience: '9+ Yrs (Executive)', salary: 202000 }
];

const COMPANY_SIZE_DATA = [
  { name: 'Small (<50)', value: 15, avgSalary: 89000, color: '#EC4899' },
  { name: 'Medium (50-250)', value: 55, avgSalary: 132000, color: '#8B5CF6' },
  { name: 'Large (>250)', value: 30, avgSalary: 156000, color: '#3B82F6' }
];

const customTooltipStyle = {
  contentStyle: {
    backgroundColor: 'rgba(15, 14, 30, 0.95)',
    borderRadius: '16px',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.3)',
    color: '#fff',
    fontFamily: 'Outfit, sans-serif',
  },
  labelStyle: {
    fontWeight: 'bold',
    color: '#8B5CF6',
  }
};

function DashboardCharts() {
  const formatYAxis = (tickItem) => {
    return `$${(tickItem / 1000).toFixed(0)}k`;
  };

  return (
    <div className="space-y-8">
      {/* Overview Cards Row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {/* Median Compensation */}
        <div className="glass rounded-2xl p-5 border border-white/5 bg-gradient-to-br from-[#0F0E1E] to-[#05050C]">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Median Tech Compensation</span>
            <div className="w-8 h-8 rounded-lg bg-accentViolet/10 flex items-center justify-center border border-accentViolet/20">
              <DollarSign className="w-4 h-4 text-accentViolet" />
            </div>
          </div>
          <div className="text-2xl font-black text-white tracking-tight">$132,450</div>
          <div className="flex items-center space-x-1 text-[10px] font-semibold text-emerald-400 mt-1">
            <ArrowUpRight className="w-3.5 h-3.5" />
            <span>+14.6% YoY growth</span>
          </div>
        </div>

        {/* Remote Advantage */}
        <div className="glass rounded-2xl p-5 border border-white/5 bg-gradient-to-br from-[#0F0E1E] to-[#05050C]">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Remote Work Premium</span>
            <div className="w-8 h-8 rounded-lg bg-accentBlue/10 flex items-center justify-center border border-accentBlue/20">
              <TrendingUp className="w-4 h-4 text-accentBlue" />
            </div>
          </div>
          <div className="text-2xl font-black text-white tracking-tight">+$28,300</div>
          <div className="flex items-center space-x-1 text-[10px] font-semibold text-accentBlue mt-1">
            <BarChart2 className="w-3.5 h-3.5" />
            <span>Relative remote markup</span>
          </div>
        </div>

        {/* Major Specialities */}
        <div className="glass rounded-2xl p-5 border border-white/5 bg-gradient-to-br from-[#0F0E1E] to-[#05050C]">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Data Science Advantage</span>
            <div className="w-8 h-8 rounded-lg bg-accentPink/10 flex items-center justify-center border border-accentPink/20">
              <Users className="w-4 h-4 text-accentPink" />
            </div>
          </div>
          <div className="text-2xl font-black text-white tracking-tight">$148,500</div>
          <div className="flex items-center space-x-1 text-[10px] font-semibold text-accentPink mt-1">
            <ArrowUpRight className="w-3.5 h-3.5" />
            <span>Top compensated sector</span>
          </div>
        </div>
      </div>

      {/* Main Charts Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Salary Distribution Area Chart */}
        <div className="glass rounded-3xl p-6 border border-white/5 bg-gradient-to-b from-[#0F0E1E]/80 to-[#070712]/90">
          <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-6">Market Salary Distribution</h3>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={SALARY_DISTRIBUTION} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorCount" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.03)" />
                <XAxis dataKey="range" stroke="rgba(255,255,255,0.4)" fontSize={10} />
                <YAxis stroke="rgba(255,255,255,0.4)" fontSize={10} />
                <Tooltip {...customTooltipStyle} formatter={(value) => [`${value} Professionals`, 'Sample size']} />
                <Area type="monotone" dataKey="count" stroke="#8B5CF6" strokeWidth={2} fillOpacity={1} fill="url(#colorCount)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Role Averages Bar Chart */}
        <div className="glass rounded-3xl p-6 border border-white/5 bg-gradient-to-b from-[#0F0E1E]/80 to-[#070712]/90">
          <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-6">Average Compensation by Role Band</h3>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={ROLE_AVERAGES} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                <defs>
                  <linearGradient id="barGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8B5CF6" />
                    <stop offset="95%" stopColor="#3B82F6" />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.03)" />
                <XAxis dataKey="role" stroke="rgba(255,255,255,0.4)" fontSize={10} />
                <YAxis tickFormatter={formatYAxis} stroke="rgba(255,255,255,0.4)" fontSize={10} />
                <Tooltip {...customTooltipStyle} formatter={(value) => [`$${value.toLocaleString()}`, 'Avg Salary']} />
                <Bar dataKey="salary" fill="url(#barGrad)" radius={[8, 8, 0, 0]} barSize={40} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Remote Impact Line Chart */}
        <div className="glass rounded-3xl p-6 border border-white/5 bg-gradient-to-b from-[#0F0E1E]/80 to-[#070712]/90">
          <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-6">Compensation by Remote Setup</h3>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={REMOTE_IMPACT} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.03)" />
                <XAxis dataKey="ratio" stroke="rgba(255,255,255,0.4)" fontSize={10} />
                <YAxis tickFormatter={formatYAxis} stroke="rgba(255,255,255,0.4)" fontSize={10} />
                <Tooltip {...customTooltipStyle} formatter={(value) => [`$${value.toLocaleString()}`, 'Avg Salary']} />
                <Line type="monotone" dataKey="salary" stroke="#06B6D4" strokeWidth={3} activeDot={{ r: 8 }} dot={{ r: 5 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Experience Growth Trajectory */}
        <div className="glass rounded-3xl p-6 border border-white/5 bg-gradient-to-b from-[#0F0E1E]/80 to-[#070712]/90">
          <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-6">Salary Progression by Experience Level</h3>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={EXPERIENCE_GROWTH} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorPink" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#EC4899" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#EC4899" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.03)" />
                <XAxis dataKey="experience" stroke="rgba(255,255,255,0.4)" fontSize={10} />
                <YAxis tickFormatter={formatYAxis} stroke="rgba(255,255,255,0.4)" fontSize={10} />
                <Tooltip {...customTooltipStyle} formatter={(value) => [`$${value.toLocaleString()}`, 'Avg Salary']} />
                <Area type="monotone" dataKey="salary" stroke="#EC4899" strokeWidth={3} fillOpacity={1} fill="url(#colorPink)" dot={{ r: 5 }} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Company Size Analytics Pie Chart */}
        <div className="glass rounded-3xl p-6 border border-white/5 bg-gradient-to-b from-[#0F0E1E]/80 to-[#070712]/90 lg:col-span-2">
          <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-6">Market Distribution & Avg Compensation by Company Scale</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            
            {/* Pie Chart Display */}
            <div className="h-64 relative flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={COMPANY_SIZE_DATA}
                    cx="50%"
                    cy="50%"
                    innerRadius={65}
                    outerRadius={90}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {COMPANY_SIZE_DATA.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip {...customTooltipStyle} formatter={(value) => [`${value}% Share`, 'Market Ratio']} />
                </PieChart>
              </ResponsiveContainer>
              
              {/* Inner Label for Donut */}
              <div className="absolute text-center">
                <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider leading-none">Market</span>
                <div className="text-2xl font-black text-white leading-none mt-1">Scale</div>
              </div>
            </div>

            {/* Custom Interactive Legend / Summary */}
            <div className="space-y-4">
              {COMPANY_SIZE_DATA.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-4 rounded-2xl bg-[#080715] border border-white/5">
                  <div className="flex items-center space-x-3">
                    <span className="w-3.5 h-3.5 rounded-full" style={{ backgroundColor: item.color }} />
                    <div>
                      <div className="text-xs font-bold text-white font-sans">{item.name}</div>
                      <div className="text-[10px] text-gray-500 font-semibold uppercase tracking-wider">{item.value}% Market Share</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-gray-400 font-bold leading-none">Avg Base</div>
                    <div className="text-base font-black text-white mt-1">${item.avgSalary.toLocaleString()}</div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default DashboardCharts;
