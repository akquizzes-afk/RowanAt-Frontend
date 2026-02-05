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
    <div className="w-full max-w-2xl mx-auto">
      {/* NEW BORDER LOGIC: 
          We use p-[1px] to create a gap for the background to show through (the border).
          overflow-hidden ensures the spinning gradient stays inside the rounded shape.
      */}
      <div className="relative rounded-2xl overflow-hidden p-[1px] transition-all duration-300">
        
        {/* Spinning Gradient Background - Follows corners perfectly */}
        <div className="absolute inset-[-100%] animate-spin-slow 
          bg-[conic-gradient(from_90deg_at_50%_50%,#0000_0%,#3b82f6_50%,#06b6d4_100%)]" 
        />

        {/* Main Input Container - Placed on top of the spinner */}
        <div className={`
          relative
          bg-gray-900/95 backdrop-blur-xl
          rounded-2xl
          h-full w-full
          p-3 md:p-4
          flex flex-col gap-3
          transition-all duration-300
          ${isFocused ? 'bg-gray-900/100' : 'bg-gray-900/95'}
        `}>
          
          {/* Textarea */}
          <div className="flex items-start gap-2">
            <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-amber-400 mt-2 md:mt-3 flex-shrink-0" />
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
                py-2
                text-sm md:text-base
                leading-relaxed
                min-h-[48px] md:min-h-[60px]
                max-h-[96px]
                w-full
              "
              rows={1}
              disabled={isLoading}
            />
          </div>

          {/* Buttons */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <button className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center hover:scale-105 active:scale-95 transition-all duration-200 group hover:border-blue-500/50">
                <Plus className="w-3.5 h-3.5 md:w-4 md:h-4 text-gray-400 group-hover:text-blue-400" />
              </button>
              <button className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center hover:scale-105 active:scale-95 transition-all duration-200 group hover:border-cyan-500/50">
                <Mic className="w-3.5 h-3.5 md:w-4 md:h-4 text-gray-400 group-hover:text-cyan-400" />
              </button>
            </div>

            <div className="flex items-center gap-2">
              {hasText && (
                <span className="text-xs text-gray-400 hidden md:inline">Press Enter</span>
              )}
              <button
                onClick={handleSend}
                disabled={!hasText || isLoading}
                className={`
                  w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-all duration-300
                  ${hasText
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:shadow-lg hover:scale-105 active:scale-95'
                    : 'bg-gray-800/50 text-gray-600 cursor-not-allowed'
                  }
                `}
              >
                {isLoading ? (
                  <div className="w-3.5 h-3.5 md:w-4 md:h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                ) : (
                  <ArrowUp className="w-3.5 h-3.5 md:w-4 md:h-4" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};