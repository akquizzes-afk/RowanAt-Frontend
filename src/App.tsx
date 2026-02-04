import { Header } from './components/Layout/Header';
import { MessageList } from './components/Chat/MessageList';
import { InputArea } from './components/Chat/InputArea';
import { AnimatedText } from './components/UI/AnimatedText';
import { useChat } from './hooks/useChat';

function App() {
  const { chatState, sendMessage, updateInput } = useChat();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
      {/* Premium background texture */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900/20 via-gray-950 to-gray-950"></div>
      
      {/* Subtle grid overlay */}
      <div className="fixed inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px),
                           linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />
      
      {/* Floating gradient orbs */}
      <div className="fixed top-1/4 left-1/4 w-[300px] h-[300px] bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-full blur-3xl animate-pulse-slow" />
      <div className="fixed bottom-1/4 right-1/4 w-[300px] h-[300px] bg-gradient-to-r from-emerald-500/5 to-teal-500/5 rounded-full blur-3xl animate-pulse-slow delay-1000" />

      <Header />

      <main className="relative z-10 min-h-screen flex flex-col">
        {/* Desktop: Content is centered and input is below text */}
        <div className="flex-1 flex flex-col justify-center">
          {chatState.messages.length === 0 ? (
            <div className="flex-1 flex flex-col justify-between md:justify-center">
              <div className="flex-1 flex items-center justify-center">
                <AnimatedText />
              </div>
              
              {/* Input area positioned higher on desktop */}
              <div className="md:flex md:items-center md:justify-center md:pb-20">
                <InputArea
                  value={chatState.input}
                  onChange={updateInput}
                  onSend={sendMessage}
                  isLoading={chatState.isLoading}
                />
              </div>
            </div>
          ) : (
            <>
              <MessageList messages={chatState.messages} />
              <InputArea
                value={chatState.input}
                onChange={updateInput}
                onSend={sendMessage}
                isLoading={chatState.isLoading}
              />
            </>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;