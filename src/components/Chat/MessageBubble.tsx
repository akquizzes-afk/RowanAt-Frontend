import { Message } from '../../types';
import { Check, Clock, AlertCircle, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';

interface MessageBubbleProps {
  message: Message;
}

export const MessageBubble = ({ message }: MessageBubbleProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 10);
    return () => clearTimeout(timer);
  }, []);

  const isUser = message.sender === 'user';

  return (
    <div 
      className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4 transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      <div className={`max-w-[85%] md:max-w-[75%] ${isUser ? 'ml-4' : 'mr-4'}`}>
        {/* Message bubble */}
        <div className={`
          relative rounded-2xl px-4 py-3
          ${isUser 
            ? 'bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-br-md' 
            : 'bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800 rounded-bl-md'
          }
          shadow-xl
        `}>
          {/* Decorative corner accent */}
          {!isUser && (
            <div className="absolute -left-2 top-0 w-4 h-4 bg-gradient-to-br from-gray-900 to-gray-800 transform rotate-45 border-l border-t border-gray-800"></div>
          )}
          
          <div className="relative z-10">
            {/* Content */}
            <p className="text-gray-100 leading-relaxed whitespace-pre-wrap">
              {message.content}
            </p>
            
            {/* Timestamp & status */}
            <div className={`flex items-center gap-2 mt-3 text-xs ${
              isUser ? 'justify-end' : 'justify-start'
            }`}>
              {!isUser && (
                <div className="flex items-center gap-1 text-gray-400">
                  <Sparkles className="w-3 h-3" />
                  <span className="font-medium">AI</span>
                </div>
              )}
              
              <span className="text-gray-500">
                {message.timestamp.toLocaleTimeString([], { 
                  hour: '2-digit', 
                  minute: '2-digit' 
                })}
              </span>
              
              {isUser && message.status && (
                <div className="flex items-center">
                  {message.status === 'sending' && (
                    <Clock className="w-3 h-3 text-gray-400 animate-pulse" />
                  )}
                  {message.status === 'sent' && (
                    <Check className="w-3 h-3 text-gray-400" />
                  )}
                  {message.status === 'error' && (
                    <AlertCircle className="w-3 h-3 text-red-400" />
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};