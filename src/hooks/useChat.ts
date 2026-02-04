import { useState, useCallback } from 'react';
import { ChatState, Message } from '../types';

export const useChat = () => {
  const [chatState, setChatState] = useState<ChatState>({
    messages: [],
    input: '',
    isLoading: false,
    isAssistantMode: false,
  });

  const sendMessage = useCallback(async () => {
    if (!chatState.input.trim() || chatState.isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: chatState.input,
      sender: 'user',
      timestamp: new Date(),
      status: 'sending',
    };

    // Add user message immediately
    setChatState(prev => ({
      ...prev,
      messages: [...prev.messages, userMessage],
      input: '',
      isLoading: true,
    }));

    // Simulate AI response after delay
    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: `I received: "${chatState.input}". Let me analyze this and start building your website! 🚀`,
        sender: 'gatekeeper',
        timestamp: new Date(),
      };

      setChatState(prev => ({
        ...prev,
        messages: prev.messages.map(msg => 
          msg.id === userMessage.id 
            ? { ...msg, status: 'sent' }
            : msg
        ).concat(aiMessage),
        isLoading: false,
      }));
    }, 1500);
  }, [chatState.input, chatState.isLoading]);

  const updateInput = useCallback((value: string) => {
    setChatState(prev => ({ ...prev, input: value }));
  }, []);

  const toggleAssistantMode = useCallback(() => {
    setChatState(prev => ({ ...prev, isAssistantMode: !prev.isAssistantMode }));
  }, []);

  return {
    chatState,
    sendMessage,
    updateInput,
    toggleAssistantMode,
  };
};