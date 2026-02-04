export interface Message {
  id: string;
  content: string;
  sender: 'user' | 'ai';
  timestamp: Date;
  status?: 'sending' | 'sent' | 'error';
  type?: 'text' | 'plan' | 'progress';
}

export interface ChatState {
  messages: Message[];
  input: string;
  isLoading: boolean;
  isAiTyping: boolean;
}