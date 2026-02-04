import { useEffect, useState } from 'react';

export const AnimatedText = () => {
  const [displayText, setDisplayText] = useState('');
  const [charIndex, setCharIndex] = useState(0);
  const fullText = "Describe your vision. I'll build it.";

  useEffect(() => {
    if (charIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText.charAt(charIndex));
        setCharIndex(prev => prev + 1);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, fullText]);

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-6 relative">
      {/* Subtle gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-full blur-3xl" />
      
      <div className="relative z-10 text-center">
        {/* Logo/Icon */}
        <div className="mb-8 flex justify-center">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 flex items-center justify-center shadow-2xl">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-lg rotate-45"></div>
          </div>
        </div>

        {/* Main text */}
        <h1 className="text-4xl md:text-5xl font-light tracking-tight text-gray-100 mb-6">
          <span className="font-medium">AI Website Builder</span>
        </h1>
        
        <div className="h-12 mb-8">
          <p className="text-xl md:text-2xl text-gray-300 font-light">
            {displayText}
            <span className="inline-block w-[2px] h-6 bg-gradient-to-b from-blue-400 to-cyan-400 animate-pulse ml-1"></span>
          </p>
        </div>

        {/* Subtitle */}
        <p className="text-gray-400 max-w-md mx-auto text-sm md:text-base leading-relaxed">
          Simply describe what you need. I'll handle the design, code, and deployment automatically.
        </p>

        {/* Scroll indicator */}
        <div className="mt-16 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gradient-to-b from-gray-400 to-transparent rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};