// src/components/Chat/InputArea.tsx
import { KeyboardEvent, useState, useEffect, useRef } from 'react';
import { Plus, Mic, ArrowUp, Sparkles } from 'lucide-react';

interface InputAreaProps {
  value: string;
  onChange: (value: string) => void;
  onSend: () => void;
  isLoading: boolean;
}

export const InputArea = ({
  value,
  onChange,
  onSend,
  isLoading,
}: InputAreaProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const hasText = value.trim().length > 0;
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const borderRef = useRef<HTMLDivElement>(null);

  // Auto-resize textarea
  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = `${Math.min(textarea.scrollHeight, 96)}px`;
    }
  }, [value]);

  const handleKeyPress = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (hasText && !isLoading) {
        onSend();
      }
    }
  };

  const handleSend = () => {
    if (hasText && !isLoading) {
      onSend();
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      {/* Main input container */}
      <div className="relative">
        {/* Curved path animated border */}
        <div className="absolute -inset-0.5 rounded-2xl overflow-hidden">
          {/* Animated SVG border that follows the curved path */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            {/* Define the gradient */}
            <defs>
              <linearGradient id="border-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="50%" stopColor="#06b6d4" />
                <stop offset="100%" stopColor="#8b5cf6" />
              </linearGradient>
            </defs>
            
            {/* Animated path that follows the rounded rectangle */}
            <path
              d="M5,5 Q5,5 5,5 L95,5 Q95,5 95,5 L95,95 Q95,95 95,95 L5,95 Q5,95 5,95 Z"
              fill="none"
              stroke="url(#border-gradient)"
              strokeWidth="1"
              strokeDasharray="2,2"
              className="animate-border-move"
            />
          </svg>
        </div>
        
        {/* Main input container */}
        <div className={`
          relative
          bg-gray-900/95 backdrop-blur-xl
          border ${isFocused ? 'border-gray-600/50' : 'border-gray-800'}
          rounded-2xl
          transition-all duration-300
          shadow-xl
          p-3 sm:p-4
          flex flex-col
          gap-3
        `}>
          {/* Textarea at the top */}
          <div className="relative">
            <div className="flex items-start gap-2">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 mt-2.5 sm:mt-3 flex-shrink-0" />
              <textarea
                ref={textareaRef}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                onKeyPress={handleKeyPress}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                placeholder="Describe your vision... I'll turn it into a beautiful website."
                className="
                  flex-1
                  bg-transparent
                  text-gray-100
                  placeholder:text-gray-500
                  focus:outline-none
                  resize-none
                  py-2 sm:py-3
                  text-sm sm:text-base
                  leading-relaxed
                  min-h-[48px] sm:min-h-[60px]
                  max-h-[96px]
                  w-full
                "
                rows={1}
                disabled={isLoading}
              />
            </div>
            
            {/* Character counter - only show when typing */}
            {value.length > 0 && (
              <div className="flex justify-end mt-1">
                <span className={`text-xs ${
                  value.length > 200 ? 'text-rose-400' : 'text-gray-500'
                }`}>
                  {value.length}/500
                </span>
              </div>
            )}
          </div>

          {/* Button row below textarea */}
          <div className="flex items-center justify-between">
            {/* Left buttons */}
            <div className="flex items-center gap-1 sm:gap-2">
              {/* Plus button - smaller */}
              <button className="
                w-8 h-8 sm:w-10 sm:h-10
                rounded-full
                bg-gradient-to-br from-gray-800 to-gray-900
                border border-gray-700
                flex items-center justify-center
                hover:scale-105
                active:scale-95
                transition-all duration-200
                group
                hover:border-blue-500/50
              ">
                <Plus className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-400 group-hover:text-blue-400 transition-colors" />
              </button>

              {/* Microphone button - smaller */}
              <button className="
                w-8 h-8 sm:w-10 sm:h-10
                rounded-full
                bg-gradient-to-br from-gray-800 to-gray-900
                border border-gray-700
                flex items-center justify-center
                hover:scale-105
                active:scale-95
                transition-all duration-200
                group
                hover:border-cyan-500/50
              ">
                <Mic className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-400 group-hover:text-cyan-400 transition-colors" />
              </button>
            </div>

            {/* Send button area */}
            <div className="flex items-center gap-2">
              {hasText && (
                <span className="text-xs text-gray-400 hidden sm:inline animate-in slide-in-from-right-5">
                  Press Enter
                </span>
              )}
              
              <button
                onClick={handleSend}
                disabled={!hasText || isLoading}
                className={`
                  relative
                  w-8 h-8 sm:w-10 sm:h-10
                  rounded-full
                  flex items-center justify-center
                  transition-all duration-300
                  overflow-hidden
                  ${hasText
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:shadow-lg hover:scale-105 active:scale-95'
                    : 'bg-gray-800/50 text-gray-600 cursor-not-allowed'
                  }
                `}
              >
                {/* Glow effect when active */}
                {hasText && (
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 animate-pulse" />
                )}
                
                <div className="relative z-10">
                  {isLoading ? (
                    <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                  ) : (
                    <ArrowUp className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  )}
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};