import { useRef, useEffect } from 'react';
import { Message } from '../../types';
import { MessageBubble } from './MessageBubble';

interface MessageListProps {
  messages: Message[];
}

export const MessageList = ({ messages }: MessageListProps) => {
  const endRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollToBottom = () => {
      if (endRef.current) {
        endRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    };

    const timeoutId = setTimeout(scrollToBottom, 100);
    return () => clearTimeout(timeoutId);
  }, [messages]);

  return (
    <div 
      ref={containerRef}
      className="flex-1 overflow-y-auto px-4 py-20 md:px-8 scroll-smooth"
      style={{ scrollBehavior: 'smooth' }}
    >
      <div className="max-w-3xl mx-auto pb-8">
        {messages.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-gray-500 mb-4 text-sm">Conversation will appear here</div>
            <div className="text-xs text-gray-600">
              Start by describing your website idea below
            </div>
          </div>
        ) : (
          messages.map((message) => (
            <MessageBubble key={message.id} message={message} />
          ))
        )}
        <div ref={endRef} className="h-px" />
      </div>
    </div>
  );
};