import React from 'react';
import { Menu, User } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-3">
      <div className="flex items-center justify-between">
        <button className="floating-button bg-slate-900/80 backdrop-blur-lg border border-slate-700/50 hover:bg-slate-800 transition-all">
          <Menu className="w-5 h-5" />
        </button>

        <div className="text-center">
          <h1 className="text-lg font-semibold bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent">
            AI Website Builder
          </h1>
          <p className="text-xs text-slate-400">v1.0 • Beta</p>
        </div>

        <button className="floating-button bg-slate-900/80 backdrop-blur-lg border border-slate-700/50 hover:bg-slate-800 transition-all">
          <User className="w-5 h-5" />
        </button>
      </div>
    </header>
  );
};