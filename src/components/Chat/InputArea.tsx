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

  // Auto-resize textarea
  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = `${Math.min(textarea.scrollHeight, 120)}px`;
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
    <div className="fixed bottom-0 left-0 right-0 z-40 p-4 md:relative md:p-0 md:mt-12">
      <div className="max-w-3xl mx-auto">
        {/* Desktop: No gradient fade, Mobile: Keep fade */}
        <div className="md:hidden absolute bottom-full left-0 right-0 h-12 bg-gradient-to-t from-gray-950 to-transparent pointer-events-none" />
        
        {/* Animated border container */}
        <div className="relative">
          {/* Animated border - moving lines */}
          <div className="absolute -inset-0.5 rounded-2xl overflow-hidden">
            {/* Top moving line */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-move-left-right" />
            
            {/* Right moving line */}
            <div className="absolute top-0 right-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-cyan-500 to-transparent animate-move-top-bottom" />
            
            {/* Bottom moving line */}
            <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent animate-move-right-left" />
            
            {/* Left moving line */}
            <div className="absolute top-0 left-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-blue-400 to-transparent animate-move-bottom-top" />
          </div>
          
          {/* Main input container */}
          <div className={`
            relative
            bg-gray-900/90 backdrop-blur-xl
            border ${isFocused ? 'border-gray-600' : 'border-gray-800'}
            rounded-2xl
            transition-all duration-300
            shadow-2xl
            p-4
            flex flex-col
            gap-4
          `}>
            {/* Textarea at the top */}
            <div className="relative">
              <div className="flex items-start gap-2">
                <Sparkles className="w-5 h-5 text-amber-400 mt-3 flex-shrink-0" />
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
                    py-3
                    text-base
                    leading-relaxed
                    min-h-[60px]
                    max-h-[120px]
                    w-full
                  "
                  rows={2}
                  disabled={isLoading}
                />
              </div>
              
              {/* Character counter */}
              <div className="flex justify-end mt-2">
                <span className={`text-xs ${
                  value.length > 200 ? 'text-rose-400' : 'text-gray-500'
                }`}>
                  {value.length}/500
                </span>
              </div>
            </div>

            {/* Button row below textarea */}
            <div className="flex items-center justify-between">
              {/* Left buttons */}
              <div className="flex items-center gap-2">
                {/* Plus button */}
                <button className="
                  w-12 h-12
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
                  <Plus className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors" />
                </button>

                {/* Microphone button */}
                <button className="
                  w-12 h-12
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
                  <Mic className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                </button>
              </div>

              {/* Send button */}
              <div className="flex items-center gap-3">
                {hasText && (
                  <span className="text-sm text-gray-400 animate-in slide-in-from-right-5">
                    Press Enter to send
                  </span>
                )}
                
                <button
                  onClick={handleSend}
                  disabled={!hasText || isLoading}
                  className={`
                    relative
                    w-12 h-12
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
                      <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                    ) : (
                      <ArrowUp className="w-5 h-5" />
                    )}
                  </div>
                  
                  {/* Ripple effect on hover */}
                  {hasText && (
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-blue-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};