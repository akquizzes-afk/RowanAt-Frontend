// src/components/Landing/HeroSection.tsx
import { AnimatedText } from '../UI/AnimatedText';
import { InputArea } from '../Chat/InputArea';
import { useChat } from '../../hooks/useChat';
import { ArrowRight, Sparkles } from 'lucide-react';

interface HeroSectionProps {
  onTryNow: () => void;
}

export const HeroSection = ({ onTryNow }: HeroSectionProps) => {
  const { chatState, sendMessage, updateInput } = useChat();

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-20 pb-10">
      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Tagline */}
        <div className="mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium">
            <Sparkles className="w-4 h-4" />
            AI-Powered Web Design Assistant
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Just Say Your Idea!!
          </span>
        </h1>

        {/* Animated Subtitle */}
        <div className="mb-10">
          <AnimatedText />
        </div>

        {/* Demo Input Area */}
        <div className="mb-12 max-w-2xl mx-auto">
          <InputArea
            value={chatState.input}
            onChange={updateInput}
            onSend={onTryNow} // This will trigger login for demo
            isLoading={false}
          />
          <p className="text-sm text-gray-500 mt-3">
            Try it now! No login required for demo.
          </p>
        </div>

        {/* CTA Button */}
        <button
          onClick={onTryNow}
          className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
        >
          Start Building for Free
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {['No Code Required', 'AI-Powered', 'Real-Time Preview', 'Export to Code'].map((feature) => (
            <div key={feature} className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-xl bg-gray-800/50 border border-gray-700/50 flex items-center justify-center mb-3">
                <Sparkles className="w-6 h-6 text-blue-400" />
              </div>
              <span className="text-gray-300 text-sm font-medium">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};