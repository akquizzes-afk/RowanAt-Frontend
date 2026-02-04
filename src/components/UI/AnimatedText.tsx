import React from 'react';

export const AnimatedText: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-6 text-center">
      <div className="relative">
        <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full blur-xl" />
        <div className="relative">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-4">
            Tell me your idea,
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            <span className="typewriter border-r-4 pr-1">let me handle the rest!</span>
          </h2>
        </div>
      </div>
      
      <div className="mt-8 text-slate-300 max-w-md">
        <p className="text-lg mb-2">✨ Describe your dream website in simple words</p>
        <p className="text-sm opacity-75">Our AI agents will plan, code, and deploy it automatically</p>
      </div>

      <div className="mt-12 animate-pulse">
        <div className="w-8 h-8 border-t-2 border-indigo-500 rounded-full animate-spin mx-auto" />
        <p className="mt-3 text-sm text-slate-400">Waiting for your brilliant idea...</p>
      </div>
    </div>
  );
};