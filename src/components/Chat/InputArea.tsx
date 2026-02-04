import { KeyboardEvent, useState } from 'react';
import { Send, Paperclip, Mic } from 'lucide-react';

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

  const handleKeyPress = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (value.trim() && !isLoading) {
        onSend();
      }
    }
  };

  const handleSend = () => {
    if (value.trim() && !isLoading) {
      onSend();
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 p-4">
      <div className="max-w-3xl mx-auto">
        {/* Subtle gradient fade */}
        <div className="absolute bottom-full left-0 right-0 h-12 bg-gradient-to-t from-gray-950 to-transparent pointer-events-none" />
        
        <div className="relative">
          {/* Beautiful border container */}
          <div className="relative group">
            {/* Animated border */}
            <div className={`
              absolute -inset-0.5 rounded-2xl blur opacity-70
              bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500
              transition-all duration-500
              ${isFocused ? 'opacity-100 blur-md' : 'group-hover:opacity-80 group-hover:blur-sm'}
            `}></div>
            
            {/* Input container */}
            <div className={`
              relative
              bg-gray-900/90 backdrop-blur-xl
              rounded-2xl
              transition-all duration-300
              shadow-2xl
              p-1
              flex items-end gap-2
              border border-gray-700/50
            `}>
              {/* Left action buttons */}
              <div className="flex items-center pl-2 pb-2">
                <button className="p-2 rounded-lg hover:bg-gray-800/50 transition-colors">
                  <Paperclip className="w-4 h-4 text-gray-500" />
                </button>
                <button className="p-2 rounded-lg hover:bg-gray-800/50 transition-colors">
                  <Mic className="w-4 h-4 text-gray-500" />
                </button>
              </div>

              {/* Textarea */}
              <div className="flex-1">
                <textarea
                  value={value}
                  onChange={(e) => onChange(e.target.value)}
                  onKeyPress={handleKeyPress}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  placeholder="Start typing your idea here..."
                  className="
                    w-full
                    bg-transparent
                    text-gray-100
                    placeholder:text-gray-600
                    focus:outline-none
                    resize-none
                    py-3
                    text-sm md:text-base
                    min-h-[20px]
                    max-h-[120px]
                  "
                  rows={1}
                  disabled={isLoading}
                />
              </div>

              {/* Send button */}
              <div className="pb-2 pr-1">
                <button
                  onClick={handleSend}
                  disabled={!value.trim() || isLoading}
                  className={`
                    p-3 rounded-xl
                    transition-all duration-300
                    ${!value.trim() || isLoading
                      ? 'bg-gray-800 text-gray-600 cursor-not-allowed'
                      : 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:shadow-lg hover:scale-105 active:scale-95'
                    }
                  `}
                >
                  {isLoading ? (
                    <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                  ) : (
                    <Send className="w-5 h-5" />
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