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
          {/* Input container with glass effect */}
          <div className={`
            bg-gray-900/80 backdrop-blur-xl
            border ${isFocused ? 'border-gray-600' : 'border-gray-800'}
            rounded-2xl
            transition-all duration-300
            shadow-2xl
            p-1
            flex items-end gap-2
          `}>
            {/* Left action buttons - minimal */}
            <div className="flex items-center pl-2 pb-2">
              <button className="p-2 rounded-lg hover:bg-gray-800/50 transition-colors">
                <Paperclip className="w-4 h-4 text-gray-500" />
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
                placeholder="Describe your website idea..."
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

            {/* Right action buttons */}
            <div className="flex items-center gap-1 pb-2 pr-1">
              <button className="p-2 rounded-lg hover:bg-gray-800/50 transition-colors">
                <Mic className="w-4 h-4 text-gray-500" />
              </button>
              
              <button
                onClick={handleSend}
                disabled={!value.trim() || isLoading}
                className={`
                  p-2 rounded-xl
                  transition-all duration-300
                  ${!value.trim() || isLoading
                    ? 'bg-gray-800 text-gray-600 cursor-not-allowed'
                    : 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:shadow-lg hover:scale-105'
                  }
                `}
              >
                {isLoading ? (
                  <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                ) : (
                  <Send className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>

          {/* Helper text */}
          <div className="mt-2 flex items-center justify-center">
            <div className="text-xs text-gray-500 flex items-center gap-2">
              <kbd className="px-2 py-1 bg-gray-900 border border-gray-800 rounded">Enter</kbd>
              <span>to send</span>
              <span className="text-gray-600">•</span>
              <kbd className="px-2 py-1 bg-gray-900 border border-gray-800 rounded">Shift + Enter</kbd>
              <span>for new line</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};