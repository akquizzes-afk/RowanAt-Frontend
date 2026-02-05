import { Header } from './components/Layout/Header';
import { MessageList } from './components/Chat/MessageList';
import { InputArea } from './components/Chat/InputArea';
import { AnimatedText } from './components/UI/AnimatedText';
import { useChat } from './hooks/useChat';

function App() {
  const { chatState, sendMessage, updateInput } = useChat();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
      {/* Background elements */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900/20 via-gray-950 to-gray-950" />
      
      <div className="fixed inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px),
                           linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />
      
      <div className="fixed top-1/4 left-1/4 w-[300px] h-[300px] bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-full blur-3xl animate-pulse-slow" />
      <div className="fixed bottom-1/4 right-1/4 w-[300px] h-[300px] bg-gradient-to-r from-emerald-500/5 to-teal-500/5 rounded-full blur-3xl animate-pulse-slow delay-1000" />

      <Header />

      <main className="relative z-10 min-h-screen flex flex-col">
        {chatState.messages.length === 0 ? (
          // When no messages - Desktop: Input below text, Mobile: Input at bottom
          <div className="flex-1 flex flex-col">
            {/* Animated Text Section - Always centered */}
            <div className="flex-1 flex items-center justify-center px-4">
              <AnimatedText />
            </div>
            
            {/* Input Area - Different positioning for mobile/desktop */}
            {/* On desktop: fixed position below text */}
            <div className="hidden md:block pb-20 px-4">
              <InputArea
                value={chatState.input}
                onChange={updateInput}
                onSend={sendMessage}
                isLoading={chatState.isLoading}
              />
            </div>
            
            {/* On mobile: fixed at bottom */}
            <div className="fixed bottom-0 left-0 right-0 z-40 p-4 md:hidden">
              <div className="absolute bottom-full left-0 right-0 h-12 bg-gradient-to-t from-gray-950 to-transparent" />
              <InputArea
                value={chatState.input}
                onChange={updateInput}
                onSend={sendMessage}
                isLoading={chatState.isLoading}
              />
            </div>
          </div>
        ) : (
          // When messages exist - Input always at bottom
          <>
            <MessageList messages={chatState.messages} />
            <div className="fixed bottom-0 left-0 right-0 z-40 p-4">
              <div className="absolute bottom-full left-0 right-0 h-12 bg-gradient-to-t from-gray-950 to-transparent" />
              <InputArea
                value={chatState.input}
                onChange={updateInput}
                onSend={sendMessage}
                isLoading={chatState.isLoading}
              />
            </div>
          </>
        )}
      </main>
    </div>
  );
}

export default App;