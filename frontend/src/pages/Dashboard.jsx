import React from 'react';
import DashboardCharts from '../components/DashboardCharts';
import { Cpu } from 'lucide-react';

function Dashboard() {
  return (
    <div className="py-12 px-6 sm:px-12 max-w-7xl mx-auto space-y-10">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="text-left space-y-2">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-sans">
            Career <span className="bg-gradient-to-r from-accentBlue to-accentCyan bg-clip-text text-transparent">Analytics</span>
          </h1>
          <p className="text-sm text-gray-400 max-w-2xl font-normal leading-relaxed">
            Deconstruct salaries across categories, remote setups, company sizes, and geographical regions to map market metrics.
          </p>
        </div>
        
        {/* Data Source Meta Info */}
        <div className="flex items-center space-x-2 px-3 py-1.5 glass rounded-xl border border-white/5 text-[10px] font-bold text-accentCyan tracking-wider uppercase bg-white/5">
          <Cpu className="w-3.5 h-3.5 text-accentCyan" />
          <span>Dataset Source: salaries.csv</span>
        </div>
      </div>

      {/* Interactive Charts Dashboard Wrapper */}
      <div className="space-y-12">
        <DashboardCharts />
      </div>
    </div>
  );
}

export default Dashboard;
