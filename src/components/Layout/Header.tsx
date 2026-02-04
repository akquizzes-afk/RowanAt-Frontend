import { Sparkles, Settings } from 'lucide-react';

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-blue-400" />
            </div>
            <div>
              <h1 className="text-lg font-medium text-gray-100">Builder</h1>
              <p className="text-xs text-gray-500">AI-Powered</p>
            </div>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* Settings button - minimal */}
            <button className="w-10 h-10 rounded-xl bg-gray-800/50 border border-gray-700/50 flex items-center justify-center hover:bg-gray-800 transition-colors group">
              <Settings className="w-5 h-5 text-gray-400 group-hover:text-gray-300 transition-colors" />
            </button>
            
            {/* Profile - very minimal */}
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 flex items-center justify-center">
              <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-400/30 to-cyan-400/30 flex items-center justify-center">
                <span className="text-xs font-medium text-gray-300">A</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};