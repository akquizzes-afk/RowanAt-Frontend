import { HorizonEffect } from './HorizonEffect';
import { AnimatedText } from '../UI/AnimatedText';
import { InputArea } from '../Chat/InputArea';

interface HeroSectionProps {
  onTryNow: () => void;
  inputValue: string;
  onInputChange: (value: string) => void;
  onInputSend: () => void;
}

export const HeroSection = ({ onTryNow, inputValue, onInputChange, onInputSend }: HeroSectionProps) => {
  return (
    <section className="relative py-12 md:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        
        {/* Grid overlay */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px),
                             linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Horizon Effect */}
      <HorizonEffect />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6 md:mb-8">
          <span className="text-xs md:text-sm font-medium text-blue-400">AI-Powered Web Design</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 md:mb-6">
          <span className="block text-white mb-1 md:mb-2">Build Websites</span>
          <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
            With Your Voice
          </span>
        </h1>

        {/* Animated Subtitle */}
        <div className="mb-6 md:mb-10">
          <AnimatedText />
        </div>

        {/* Input Area (Replaces buttons) */}
        <div className="mb-8 md:mb-12 max-w-2xl mx-auto">
          <InputArea
            value={inputValue}
            onChange={onInputChange}
            onSend={onTryNow} // This will trigger login
            isLoading={false}
          />
        </div>

        {/* Stats - Made smaller for mobile */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-2xl mx-auto">
          {[
            { value: '10K+', label: 'Websites Built' },
            { value: '99%', label: 'Satisfaction' },
            { value: '5min', label: 'Avg. Build Time' },
            { value: '24/7', label: 'AI Support' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-1 md:mb-2">{stat.value}</div>
              <div className="text-xs md:text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};