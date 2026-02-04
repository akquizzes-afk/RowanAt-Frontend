export interface Message {
  id: string;
  content: string;
  sender: 'user' | 'gatekeeper' | 'planner' | 'coder' | 'artist';
  timestamp: Date;
  status?: 'sending' | 'sent' | 'error';
}

export interface ChatState {
  messages: Message[];
  input: string;
  isLoading: boolean;
  isAssistantMode: boolean;
}