import { useState } from 'react';
import { Header } from './components/Layout/Header';
import { MessageList } from './components/Chat/MessageList';
import { InputArea } from './components/Chat/InputArea';
import { HeroSection } from './components/Landing/HeroSection';
import { FeaturesSection } from './components/Landing/FeaturesSection';
import { HowItWorksSection } from './components/Landing/HowItWorksSection';
import { Footer } from './components/Landing/Footer';
import { StarryBackground } from './components/Landing/StarryBackground';
import { useChat } from './hooks/useChat';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { chatState, sendMessage, updateInput } = useChat();

  // Handle login/logout
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  if (isLoggedIn) {
    // LOGGED IN STATE: Show Chat Interface
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
        {/* Premium background texture */}
        <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900/20 via-gray-950 to-gray-950" />
        
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

        <Header isLoggedIn={isLoggedIn} onLogout={handleLogout} />
        
        <main className="relative z-10 min-h-screen flex flex-col pt-16">
          {chatState.messages.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center p-4">
              {/* Empty state for logged in users */}
              <div className="text-center max-w-xl">
                <h2 className="text-2xl font-bold text-gray-200 mb-4">Welcome back!</h2>
                <p className="text-gray-400 mb-8">Start a new conversation or continue from where you left off.</p>
                <InputArea
                  value={chatState.input}
                  onChange={updateInput}
                  onSend={sendMessage}
                  isLoading={chatState.isLoading}
                />
              </div>
            </div>
          ) : (
            // Chat with messages
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

  // LOGGED OUT STATE: Show Full Landing Page
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 overflow-x-hidden">
      {/* Starry Background */}
      <StarryBackground />
      
      {/* Premium background texture */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900/20 via-gray-950 to-gray-950" />
      
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

      <Header isLoggedIn={isLoggedIn} onLogin={handleLogin} />

      {/* Scrollable Landing Page Content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <HeroSection onTryNow={handleLogin} />
        
        {/* Features Section */}
        <FeaturesSection />
        
        {/* How It Works Section */}
        <HowItWorksSection />
        
        {/* Footer */}
        <Footer />
      </main>
    </div>
  );
}

export default App;