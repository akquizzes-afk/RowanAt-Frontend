import React from 'react';
import { Message } from '../../types';
import { 
  User, 
  Shield, 
  FileCode, 
  Palette,
  CheckCircle,
  Clock,
  AlertCircle
} from 'lucide-react';

const senderConfig = {
  user: {
    bg: 'bg-indigo-500/20 border border-indigo-500/30',
    text: 'text-indigo-300',
    icon: <User className="w-4 h-4" />,
    align: 'justify-end',
    bubbleAlign: 'rounded-br-none ml-auto',
  },
  gatekeeper: {
    bg: 'bg-slate-800/60 border border-slate-700/50',
    text: 'text-slate-300',
    icon: <Shield className="w-4 h-4" />,
    align: 'justify-start',
    bubbleAlign: 'rounded-bl-none',
  },
  planner: {
    bg: 'bg-purple-500/20 border border-purple-500/30',
    text: 'text-purple-300',
    icon: <FileCode className="w-4 h-4" />,
    align: 'justify-start',
    bubbleAlign: 'rounded-bl-none',
  },
  coder: {
    bg: 'bg-amber-500/20 border border-amber-500/30',
    text: 'text-amber-300',
    icon: <FileCode className="w-4 h-4" />,
    align: 'justify-start',
    bubbleAlign: 'rounded-bl-none',
  },
  artist: {
    bg: 'bg-pink-500/20 border border-pink-500/30',
    text: 'text-pink-300',
    icon: <Palette className="w-4 h-4" />,
    align: 'justify-start',
    bubbleAlign: 'rounded-bl-none',
  },
};

export const MessageBubble: React.FC<{ message: Message }> = ({ message }) => {
  const config = senderConfig[message.sender];
  
  return (
    <div className={`flex ${config.align} mb-4`}>
      <div className="flex items-start gap-3 max-w-[85%]">
        {message.sender !== 'user' && (
          <div className={`p-2 rounded-lg ${config.bg} mt-1`}>
            {config.icon}
          </div>
        )}
        
        <div className={`p-4 rounded-2xl ${config.bg} ${config.bubbleAlign}`}>
          <div className="flex items-center gap-2 mb-2">
            <span className={`text-xs font-medium ${config.text}`}>
              {message.sender.charAt(0).toUpperCase() + message.sender.slice(1)}
            </span>
            <span className="text-xs text-slate-500">
              {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </span>
            
            {message.status === 'sending' && (
              <Clock className="w-3 h-3 text-amber-500 animate-pulse" />
            )}
            {message.status === 'sent' && (
              <CheckCircle className="w-3 h-3 text-emerald-500" />
            )}
            {message.status === 'error' && (
              <AlertCircle className="w-3 h-3 text-rose-500" />
            )}
          </div>
          
          <p className="text-slate-100 whitespace-pre-wrap break-words">
            {message.content}
          </p>
        </div>

        {message.sender === 'user' && (
          <div className={`p-2 rounded-lg ${config.bg} mt-1`}>
            {config.icon}
          </div>
        )}
      </div>
    </div>
  );
};