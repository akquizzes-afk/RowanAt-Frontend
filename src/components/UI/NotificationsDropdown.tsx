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
      {/* Backdrop - Different for mobile vs desktop */}
      <div 
        className="
          fixed inset-0 z-40 
          bg-black/20 backdrop-blur-sm 
          md:bg-transparent md:backdrop-blur-none
        " 
        onClick={onClose} 
      />
      
      {/* Dropdown Card */}
      <div
        ref={dropdownRef}
        className={`
          absolute z-50 
          animate-in slide-in-from-top-5 duration-200
          top-16 left-4 right-4
          md:top-14 md:left-auto md:right-4 md:w-80
        `}
      >
        <div className="
          bg-gray-900/95 backdrop-blur-xl 
          border border-gray-800 rounded-2xl 
          shadow-2xl overflow-hidden 
          ring-1 ring-white/10
        ">
          
          {/* Header */}
          <div className="
            p-4 border-b border-gray-800 
            flex items-center justify-between 
            bg-gray-900/50
          ">
            <div className="flex items-center gap-2">
              <div className="relative">
                <Bell className="w-5 h-5 text-amber-400" />
                <span className="
                  absolute top-0 right-0 
                  w-2 h-2 bg-amber-500 
                  rounded-full animate-pulse
                " />
              </div>
              <h3 className="font-medium text-gray-200">
                Notifications
              </h3>
            </div>
            
            <button 
              onClick={onClose} 
              className="
                p-1.5 rounded-lg 
                hover:bg-gray-800 
                text-gray-400 hover:text-white 
                transition-colors
              "
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body Content */}
          <div className="
            p-6 md:p-8 
            text-center 
            bg-gradient-to-b from-gray-900/50 to-transparent
          ">
            {/* Icon */}
            <div className="
              w-14 h-14 md:w-16 md:h-16 
              mx-auto mb-4 rounded-full 
              bg-gradient-to-br from-gray-800 to-gray-900 
              border border-gray-700 
              flex items-center justify-center 
              shadow-inner
            ">
              <Sparkles className="w-7 h-7 md:w-8 md:h-8 text-gray-500" />
            </div>
            
            {/* Title */}
            <h4 className="
              text-base md:text-lg 
              font-medium text-gray-200 
              mb-2
            ">
              All Caught Up! 🎉
            </h4>
            
            {/* Message */}
            <p className="
              text-xs md:text-sm 
              text-gray-400 mb-6 
              leading-relaxed px-4
            ">
              No new notifications. Your dashboard is looking clean.
            </p>

            {/* Pro Tip Card */}
            <div className="
              bg-gray-800/30 
              border border-gray-700/50 
              rounded-xl p-3 md:p-4 
              text-left
            ">
              <div className="flex items-start gap-3">
                <div className="
                  p-1.5 rounded-lg 
                  bg-amber-500/10 
                  shrink-0
                ">
                  <Zap className="w-4 h-4 text-amber-400" />
                </div>
                <div>
                  <p className="
                    text-xs md:text-sm 
                    font-medium text-gray-200 
                    mb-1
                  ">
                    Did you know?
                  </p>
                  <p className="
                    text-[10px] md:text-xs 
                    text-gray-400 
                    leading-relaxed
                  ">
                    You can use voice commands to build faster. 
                    Just tap the microphone icon below.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="
            p-3 border-t border-gray-800 
            bg-gray-900/80 
            flex items-center justify-between
          ">
            <span className="text-[10px] md:text-xs text-gray-500">
              Updated just now
            </span>
            <button className="
              text-[10px] md:text-xs 
              text-blue-400 hover:text-blue-300 
              font-medium transition-colors
            ">
              View History
            </button>
          </div>
        </div>
      </div>
    </>
  );
};