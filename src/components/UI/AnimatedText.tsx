import { useEffect, useState } from 'react';

const rotatingTexts = [
  "I'll turn your vision into reality.",
  "Describe it, I'll build it.",
  "Let's create something amazing.",
  "Your idea, my execution.",
  "Together we'll build the future.",
  "Just describe, I'll do the rest.",
  "From concept to creation."
];

export const AnimatedText = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentText = rotatingTexts[currentTextIndex];
    
    let timeout: NodeJS.Timeout;

    if (!isDeleting && charIndex < currentText.length) {
      // Typing effect
      timeout = setTimeout(() => {
        setDisplayText(prev => prev + currentText.charAt(charIndex));
        setCharIndex(prev => prev + 1);
      }, 50);
    } else if (isDeleting && charIndex > 0) {
      // Deleting effect
      timeout = setTimeout(() => {
        setDisplayText(prev => prev.slice(0, -1));
        setCharIndex(prev => prev - 1);
      }, 30);
    } else if (!isDeleting && charIndex === currentText.length) {
      // Pause at full text for 2 seconds
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 2000);
    } else if (isDeleting && charIndex === 0) {
      // Move to next text
      setIsDeleting(false);
      setCurrentTextIndex(prev => (prev + 1) % rotatingTexts.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, currentTextIndex, isDeleting]);

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-6 relative">
      {/* Subtle gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-full blur-3xl" />
      
      <div className="relative z-10 text-center">
        {/* Static main text */}
        <div className="mb-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-100">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Just Say Your Idea!!
            </span>
          </h1>
        </div>

        {/* Animated rotating text */}
        <div className="h-16 flex items-center justify-center">
          <h2 className="text-xl md:text-2xl font-light text-gray-300 min-h-[2.5rem]">
            {displayText}
            <span className="inline-block w-[2px] h-6 bg-gradient-to-b from-blue-400 to-cyan-400 animate-pulse ml-1"></span>
          </h2>
        </div>

        {/* Current text indicator */}
        <div className="flex justify-center gap-1 mt-8">
          {rotatingTexts.map((_, index) => (
            <div
              key={index}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                index === currentTextIndex 
                  ? 'w-6 bg-gradient-to-r from-blue-400 to-cyan-400' 
                  : 'bg-gray-700'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};