// src/components/Chat/MessageList.tsx
import { useRef, useEffect } from 'react';
import { User, Bot } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'assistant';
}

interface MessageListProps {
  messages: Message[];
}

export const MessageList = ({ messages }: MessageListProps) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  if (messages.length === 0) {
    return null;
  }

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-6 max-w-4xl mx-auto">
      {messages.map((message) => (
        <div
          key={message.id}
          className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
        >
          <div
            className={`max-w-[80%] md:max-w-[70%] flex gap-3 ${
              message.sender === 'user' ? 'flex-row-reverse' : 'flex-row'
            }`}
          >
            {/* Avatar */}
            <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
              message.sender === 'user' 
                ? 'bg-gradient-to-br from-blue-500 to-cyan-500' 
                : 'bg-gradient-to-br from-gray-800 to-gray-900'
            }`}>
              {message.sender === 'user' ? (
                <User className="w-4 h-4 text-white" />
              ) : (
                <Bot className="w-4 h-4 text-white" />
              )}
            </div>

            {/* Message Bubble */}
            <div
              className={`rounded-2xl p-4 ${
                message.sender === 'user'
                  ? 'bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-br-none'
                  : 'bg-gray-800/50 border border-gray-700/50 rounded-bl-none'
              }`}
            >
              <p className="text-gray-100 whitespace-pre-wrap">{message.text}</p>
            </div>
          </div>
        </div>
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
};