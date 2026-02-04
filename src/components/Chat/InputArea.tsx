import { KeyboardEvent, useState } from 'react';
import { Send, Plus, Mic, ArrowUp } from 'lucide-react';

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
        
        <div className="relative">
          {/* Input container with clean border */}
          <div className={`
            bg-gray-900/80 backdrop-blur-xl
            border ${isFocused ? 'border-gray-600' : 'border-gray-800'}
            rounded-2xl
            transition-all duration-300
            shadow-xl
            p-1
            flex items-end gap-2
          `}>
            {/* Left action buttons */}
            <div className="flex items-center pl-2 pb-2 gap-1">
              {/* Plus button with circular gradient */}
              <button className="
                w-10 h-10 
                rounded-full 
                bg-gradient-to-br from-gray-800 to-gray-900 
                border border-gray-700 
                flex items-center justify-center 
                hover:scale-105 
                active:scale-95 
                transition-all duration-200
                group
              ">
                <Plus className="w-5 h-5 text-gray-400 group-hover:text-gray-300 transition-colors" />
              </button>

              {/* Microphone button with circular gradient */}
              <button className="
                w-10 h-10 
                rounded-full 
                bg-gradient-to-br from-gray-800 to-gray-900 
                border border-gray-700 
                flex items-center justify-center 
                hover:scale-105 
                active:scale-95 
                transition-all duration-200
                group
              ">
                <Mic className="w-5 h-5 text-gray-400 group-hover:text-gray-300 transition-colors" />
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

            {/* Send button */}
            <div className="pb-2 pr-1">
              <button
                onClick={handleSend}
                disabled={!hasText || isLoading}
                className={`
                  w-10 h-10
                  rounded-full
                  flex items-center justify-center
                  transition-all duration-300
                  ${hasText
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:shadow-lg hover:scale-105 active:scale-95'
                    : 'bg-gray-800/50 text-gray-600 cursor-not-allowed'
                  }
                `}
              >
                {isLoading ? (
                  <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                ) : (
                  <ArrowUp className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};