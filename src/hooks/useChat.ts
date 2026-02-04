import { useState, useCallback, useRef } from 'react';
import { ChatState, Message } from '../types';

const simulateAIResponse = (userInput: string): string => {
  const responses = [
    `Understood! I'll analyze your request and create a beautiful website based on "${userInput}".`,
    `Great idea! I'm now planning the structure and design for "${userInput}".`,
    `Excellent. I'll craft a responsive, modern website around "${userInput}". Let me work my magic.`,
    `Perfect! Building a website for "${userInput}". This will be amazing.`
  ];
  return responses[Math.floor(Math.random() * responses.length)];
};

export const useChat = () => {
  const [chatState, setChatState] = useState<ChatState>({
    messages: [],
    input: '',
    isLoading: false,
    isAiTyping: false,
  });

  const typingTimeoutRef = useRef<NodeJS.Timeout>();

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

    // Mark user message as sent
    setTimeout(() => {
      setChatState(prev => ({
        ...prev,
        messages: prev.messages.map(msg => 
          msg.id === userMessage.id ? { ...msg, status: 'sent' } : msg
        ),
      }));
    }, 200);

    // AI typing indicator
    setTimeout(() => {
      setChatState(prev => ({ ...prev, isAiTyping: true }));
    }, 500);

    // Simulate AI thinking and response
    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: simulateAIResponse(userMessage.content),
        sender: 'ai',
        timestamp: new Date(),
      };

      setChatState(prev => ({
        ...prev,
        messages: [...prev.messages.filter(msg => msg.id !== 'typing-indicator'), aiMessage],
        isLoading: false,
        isAiTyping: false,
      }));
    }, 2000 + Math.random() * 1000);
  }, [chatState.input, chatState.isLoading]);

  const updateInput = useCallback((value: string) => {
    setChatState(prev => ({ ...prev, input: value }));
  }, []);

  return {
    chatState,
    sendMessage,
    updateInput,
  };
};