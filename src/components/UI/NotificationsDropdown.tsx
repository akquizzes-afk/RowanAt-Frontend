// src/components/UI/NotificationsDropdown.tsx
import { useRef, useEffect } from 'react';
import { Bell, X, Zap, Sparkles, Check } from 'lucide-react';

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
      <div className="fixed inset-0 z-40" onClick={onClose} />
      
      {/* Mobile Dropdown */}
      <div
        ref={dropdownRef}
        className="md:hidden absolute top-14 right-4 z-50 w-[calc(100vw-2rem)] max-w-sm animate-in slide-in-from-top-5 duration-200"
      >
        <div className="bg-gray-900/95 backdrop-blur-xl border border-gray-800 rounded-2xl shadow-2xl overflow-hidden">
          <div className="p-3 border-b border-gray-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Bell className="w-4 h-4 text-amber-400" />
              <h3 className="font-medium text-gray-200 text-sm">Alerts</h3>
            </div>
            <button onClick={onClose} className="p-1 rounded-lg hover:bg-gray-800">
              <X className="w-3 h-3 text-gray-500" />
            </button>
          </div>

          <div className="p-6 text-center">
            <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center">
              <Check className="w-5 h-5 text-gray-600" />
            </div>
            <h4 className="text-sm font-medium text-gray-200 mb-1">All Clear</h4>
            <p className="text-xs text-gray-400">No notifications</p>
          </div>
        </div>
      </div>

      {/* Desktop Dropdown */}
      <div
        ref={dropdownRef}
        className="hidden md:block absolute top-14 right-4 z-50 w-80 animate-in slide-in-from-top-5 duration-200"
      >
        <div className="bg-gray-900/95 backdrop-blur-xl border border-gray-800 rounded-2xl shadow-2xl overflow-hidden">
          <div className="p-4 border-b border-gray-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Bell className="w-5 h-5 text-amber-400" />
              <h3 className="font-medium text-gray-200">Notifications</h3>
              <span className="text-xs bg-amber-500/20 text-amber-400 px-2 py-1 rounded-full">
                0 new
              </span>
            </div>
            <button onClick={onClose} className="p-1.5 rounded-lg hover:bg-gray-800">
              <X className="w-4 h-4 text-gray-500" />
            </button>
          </div>

          <div className="p-8 text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 flex items-center justify-center">
              <Sparkles className="w-8 h-8 text-gray-600" />
            </div>
            
            <h4 className="text-lg font-medium text-gray-200 mb-2">
              All Caught Up! 🎉
            </h4>
            
            <p className="text-sm text-gray-400 mb-6 leading-relaxed">
              No notifications at the moment. Everything is running smoothly.
            </p>

            <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 border border-gray-800 rounded-xl p-4">
              <div className="flex items-start gap-3">
                <Zap className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <div className="text-left">
                  <p className="text-sm font-medium text-gray-200 mb-1">Pro Tip</p>
                  <p className="text-xs text-gray-400">
                    Complete your first build to unlock achievements and earn bonus credits.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 border-t border-gray-800 bg-gradient-to-r from-gray-900/50 to-gray-800/50">
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-500">Last checked: Just now</span>
              <button className="text-xs text-cyan-400 hover:text-cyan-300 font-medium">
                View All
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};