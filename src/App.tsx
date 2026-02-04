import React from 'react';
import { Header } from './components/Layout/Header';
import { MessageList } from './components/Chat/MessageList';
import { InputArea } from './components/Chat/InputArea';
import { AnimatedText } from './components/UI/AnimatedText';
import { useChat } from './hooks/useChat';

function App() {
  const { chatState, sendMessage, updateInput, toggleAssistantMode } = useChat();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Background stars effect */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-[1px] h-[1px] bg-white rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: Math.random() * 0.5 + 0.2,
            }}
          />
        ))}
      </div>

      <Header />

      <main className="pt-16 pb-32 min-h-screen">
        {chatState.messages.length === 0 ? (
          <AnimatedText />
        ) : (
          <MessageList messages={chatState.messages} />
        )}
      </main>

      <InputArea
        value={chatState.input}
        onChange={updateInput}
        onSend={sendMessage}
        isLoading={chatState.isLoading}
        isAssistantMode={chatState.isAssistantMode}
        onToggleAssistantMode={toggleAssistantMode}
      />
    </div>
  );
}

export default App;