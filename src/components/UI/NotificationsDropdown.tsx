// src/components/UI/NotificationsDropdown.tsx
import { useRef, useEffect } from 'react';
import { Bell, X, Zap, Sparkles } from 'lucide-react';

interface NotificationsDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

export const NotificationsDropdown = ({ isOpen, onClose }: NotificationsDropdownProps) => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <>
      <div 
        className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm" 
        onClick={onClose} 
      />
      
      <div
        ref={dropdownRef}
        className="fixed top-14 left-1/2 -translate-x-1/2 w-[calc(100vw-2rem)] max-w-xs z-50 animate-in slide-in-from-top-5 duration-200 md:absolute md:top-12 md:left-auto md:right-0 md:translate-x-0 md:w-80"
      >
        <div className="bg-gray-900/95 backdrop-blur-xl border border-gray-800 rounded-xl md:rounded-2xl shadow-2xl overflow-hidden ring-1 ring-white/10">
          <div className="p-3 border-b border-gray-800 flex items-center justify-between bg-gray-900/50">
            <div className="flex items-center gap-2">
              <div className="relative">
                <Bell className="w-4 h-4 text-amber-400" />
                <span className="absolute top-0 right-0 w-1.5 h-1.5 bg-amber-500 rounded-full animate-pulse" />
              </div>
              <h3 className="font-medium text-gray-200 text-sm">
                Notifications
              </h3>
            </div>
            
            <button 
              onClick={onClose} 
              className="p-1 rounded-lg hover:bg-gray-800 text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-3 h-3" />
            </button>
          </div>

          <div className="p-4 text-center bg-gradient-to-b from-gray-900/50 to-transparent">
            <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 flex items-center justify-center shadow-inner">
              <Sparkles className="w-5 h-5 text-gray-500" />
            </div>
            
            <h4 className="text-sm font-medium text-gray-200 mb-1.5">
              All Caught Up! 🎉
            </h4>
            
            <p className="text-xs text-gray-400 mb-4 leading-relaxed">
              No new notifications.
              Your dashboard is looking clean.
            </p>

            <div className="bg-gray-800/30 border border-gray-700/50 rounded-lg p-2.5 text-left">
              <div className="flex items-start gap-2.5">
                <div className="p-1 rounded-md bg-amber-500/10">
                  <Zap className="w-3 h-3 text-amber-400" />
                </div>
                <div>
                  <p className="text-xs font-medium text-gray-200 mb-1">
                    Did you know?
                  </p>
                  <p className="text-[10px] text-gray-400 leading-relaxed">
                    You can use voice commands to build faster.
                    Just tap the microphone icon below.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-2.5 border-t border-gray-800 bg-gray-900/80 flex items-center justify-between">
            <span className="text-[10px] text-gray-500">
              Updated just now
            </span>
            <button className="text-[10px] text-blue-400 hover:text-blue-300 font-medium transition-colors">
              View History
            </button>
          </div>
        </div>
      </div>
    </>
  );
};