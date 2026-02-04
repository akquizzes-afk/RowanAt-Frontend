import React, { useRef, useEffect } from 'react';
import { Message } from '../../types';
import { MessageBubble } from './MessageBubble';

interface MessageListProps {
  messages: Message[];
}

export const MessageList: React.FC<MessageListProps> = ({ messages }) => {
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="flex-1 overflow-y-auto px-4 py-20">
      <div className="max-w-3xl mx-auto">
        {messages.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-slate-500 mb-4">No messages yet</div>
            <div className="text-sm text-slate-600">
              Start by describing your website idea below
            </div>
          </div>
        ) : (
          messages.map((message) => (
            <MessageBubble key={message.id} message={message} />
          ))
        )}
        <div ref={endRef} />
      </div>
    </div>
  );
};