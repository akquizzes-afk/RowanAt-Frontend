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
      sender: 'user' as const,
      timestamp: new Date(),
      status: 'sending' as const,
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
        sender: 'gatekeeper' as const,
        timestamp: new Date(),
        // No status property for AI messages
      };

      setChatState(prev => {
        // Update the user message status to 'sent'
        const updatedMessages = prev.messages.map(msg => 
          msg.id === userMessage.id 
            ? { ...msg, status: 'sent' as const }
            : msg
        );
        
        // Add the AI message
        return {
          ...prev,
          messages: [...updatedMessages, aiMessage],
          isLoading: false,
        };
      });
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