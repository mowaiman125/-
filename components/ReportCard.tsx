import React from 'react';
import { Award, Lock, ChevronRight } from 'lucide-react';

const ReportCard: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-4 ring-1 ring-black/5 relative">
      {/* Header - Kept visible to establish context */}
      <div className="bg-stone-50/50 p-4 border-b border-gray-100 text-center relative">
        <div className="flex justify-center items-center gap-3 mb-1.5 opacity-30">
          <div className="h-px w-8 bg-slate-400"></div>
          <h2 className="text-lg font-bold tracking-[0.2em] text-slate-800 uppercase">Watch Match</h2>
          <div className="h-px w-8 bg-slate-400"></div>
        </div>
        <div className="flex items-center justify-center gap-2 text-slate-400 opacity-60">
            <Award size={18} />
            <h3 className="text-xl font-bold">手錶鑑定報告</h3>
        </div>
      </div>

      <div className="relative bg-white min-h-[280px]">
        {/* Blurred Background Layer - Simulates the layout of a report without showing fake data */}
        <div className="absolute inset-0 p-5 filter blur-sm opacity-20 pointer-events-none overflow-hidden select-none bg-gray-50">
            {/* Fake Watch Title */}
            <div className="w-1/3 h-6 bg-slate-800 rounded mb-2"></div>
            <div className="w-1/2 h-5 bg-slate-600 rounded mb-4"></div>
            
            {/* Fake Grid of Checks */}
            <div className="grid grid-cols-2 gap-3 mb-6">
                {[1,2,3,4].map(i => (
                    <div key={i} className="bg-gray-300 h-16 rounded-lg flex flex-col items-center justify-center gap-2">
                         <div className="w-4 h-4 rounded-full bg-gray-400"></div>
                         <div className="w-10 h-2 bg-gray-400 rounded"></div>
                    </div>
                ))}
            </div>
            
            {/* Fake Notes Section */}
            <div className="space-y-2 mt-4">
                <div className="h-2 bg-gray-400 rounded w-full"></div>
                <div className="h-2 bg-gray-400 rounded w-5/6"></div>
                <div className="h-2 bg-gray-400 rounded w-4/6"></div>
                <div className="h-2 bg-gray-400 rounded w-full"></div>
            </div>

            {/* Fake Photos */}
             <div className="flex gap-2 mt-6">
                 {[1,2,3].map(i => (
                     <div key={i} className="w-16 h-16 bg-gray-300 rounded-lg"></div>
                 ))}
             </div>
        </div>

        {/* Locked Overlay Content */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center p-6 text-center">
            <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-emerald-200 shadow-lg mb-4 transform rotate-[-5deg] ring-4 ring-white">
                <Lock className="text-white" size={24} strokeWidth={2.5} />
            </div>
            
            <h3 className="text-slate-800 font-bold text-lg mb-2">
                報告未解鎖
            </h3>
            
            <p className="text-sm text-gray-500 mb-6 max-w-[240px] leading-relaxed">
                選用代驗服務，獲取手錶最真實的報告
            </p>
            
            <button className="bg-slate-900 text-white text-sm font-bold py-3 px-10 rounded-xl shadow-lg shadow-slate-200 active:scale-95 transition-all flex items-center gap-2 hover:bg-slate-800">
                立即出價 <ChevronRight size={16} />
            </button>
        </div>
      </div>
    </div>
  );
};

export default ReportCard;