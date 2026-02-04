import React, { KeyboardEvent } from 'react';
import { Send, Sparkles } from 'lucide-react';

interface InputAreaProps {
  value: string;
  onChange: (value: string) => void;
  onSend: () => void;
  isLoading: boolean;
  isAssistantMode: boolean;
  onToggleAssistantMode: () => void;
}

export const InputArea: React.FC<InputAreaProps> = ({
  value,
  onChange,
  onSend,
  isLoading,
  isAssistantMode,
  onToggleAssistantMode,
}) => {
  const handleKeyPress = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      onSend();
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 p-4 bg-gradient-to-t from-slate-950 via-slate-950/95 to-transparent">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-end gap-2">
          <button
            onClick={onToggleAssistantMode}
            className={`p-3 rounded-xl transition-all ${
              isAssistantMode
                ? 'bg-indigo-500/20 border border-indigo-500/50'
                : 'bg-slate-800/50 border border-slate-700/50 hover:bg-slate-700/50'
            }`}
            title="Toggle Assistant Mode"
          >
            <Sparkles className={`w-5 h-5 ${isAssistantMode ? 'text-indigo-300' : 'text-slate-400'}`} />
          </button>

          <div className="flex-1 relative">
            <textarea
              value={value}
              onChange={(e) => onChange(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder={
                isAssistantMode
                  ? "Describe your website idea (Assistant Mode ON)..."
                  : "Type your website requirements here..."
              }
              className="w-full bg-slate-900/80 backdrop-blur-lg border border-slate-700/50 rounded-2xl px-4 py-3 pr-12 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-transparent resize-none min-h-[56px] max-h-[120px]"
              rows={1}
              disabled={isLoading}
            />
            
            <button
              onClick={onSend}
              disabled={!value.trim() || isLoading}
              className="absolute right-2 bottom-2 p-2 rounded-xl bg-indigo-500 hover:bg-indigo-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <Send className="w-5 h-5 text-white" />
              )}
            </button>
          </div>
        </div>

        <div className="mt-3 flex items-center justify-center gap-4 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500" />
            <span className="text-slate-400">Online</span>
          </div>
          <div className="text-slate-500">Press Enter to send</div>
          {isAssistantMode && (
            <div className="flex items-center gap-1 text-indigo-400">
              <Sparkles className="w-3 h-3" />
              <span>Assistant Mode</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};