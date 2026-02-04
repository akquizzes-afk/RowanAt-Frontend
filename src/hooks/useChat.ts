import { useState, useCallback } from 'react';
import { ChatState } from '../types';

export const useChat = () => {
  const [chatState, setChatState] = useState<ChatState>({
    messages: [],
    input: '',
    isLoading: false,
  });

  const sendMessage = useCallback(async () => {
    if (!chatState.input.trim() || chatState.isLoading) return;

    // Just clear the input, don't send anything
    setChatState(prev => ({
      ...prev,
      input: '',
    }));
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