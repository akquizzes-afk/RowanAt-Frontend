import { useState } from 'react';
import { Header } from './components/Layout/Header';
import { HeroSection } from './components/Landing/HeroSection';
import { FeaturesSection } from './components/Landing/FeaturesSection';
import { HowItWorksSection } from './components/Landing/HowItWorksSection';
import { Footer } from './components/Landing/Footer';
import { useChat } from './hooks/useChat';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { chatState, sendMessage, updateInput } = useChat();

  // For demo purposes
  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  if (isLoggedIn) {
    // Simplified logged-in state
    return (
      <div className="min-h-screen bg-gray-950">
        <Header isLoggedIn={isLoggedIn} onLogout={handleLogout} />
        <main className="pt-16 min-h-screen flex items-center justify-center">
          <div className="text-center p-8 max-w-md">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 flex items-center justify-center">
              <span className="text-2xl font-bold text-blue-400">✓</span>
            </div>
            <h1 className="text-3xl font-bold text-white mb-4">Welcome back!</h1>
            <p className="text-gray-400 mb-8">
              Chat interface coming soon. Start building amazing websites with AI.
            </p>
            <button
              onClick={handleLogout}
              className="px-6 py-3 rounded-xl bg-gray-800 hover:bg-gray-700 text-gray-300 transition-colors"
            >
              Back to Home
            </button>
          </div>
        </main>
      </div>
    );
  }

  // Landing Page State
  return (
    <div className="min-h-screen bg-gray-950 text-white overflow-x-hidden">
      <Header isLoggedIn={isLoggedIn} onLogin={handleLogin} />
      
      {/* Main content that should scroll */}
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow pt-16"> {/* flex-grow makes this take available space */}
          <HeroSection onTryNow={handleLogin} inputValue={chatState.input} onInputChange={updateInput} onInputSend={sendMessage} />
          <FeaturesSection />
          <HowItWorksSection />
        </main>
        <Footer /> {/* Footer stays at bottom */}
      </div>
    </div>
  );
}

export default App;