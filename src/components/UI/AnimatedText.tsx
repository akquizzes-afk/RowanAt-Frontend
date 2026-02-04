import { useEffect, useState } from 'react';

const texts = [
  "Say Your Idea",
  "Describe your vision",
  "Share your dream",
  "Tell me what you need",
  "Let's create something",
  "Build your website"
];

export const AnimatedText = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentText = texts[currentTextIndex];
    
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
      // Pause at full text
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 2000); // Show for 2 seconds
    } else if (isDeleting && charIndex === 0) {
      // Move to next text
      setIsDeleting(false);
      setCurrentTextIndex(prev => (prev + 1) % texts.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, currentTextIndex, isDeleting]);

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-6 relative">
      {/* Subtle gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-full blur-3xl" />
      
      <div className="relative z-10 text-center">
        {/* Main text container */}
        <div className="mb-12">
          <h1 className="text-5xl md:text-6xl font-light tracking-tight text-gray-100">
            <span className="font-medium bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              {displayText}
              <span className="inline-block w-[3px] h-12 bg-gradient-to-b from-blue-400 to-cyan-400 animate-pulse ml-1"></span>
            </span>
          </h1>
        </div>

        {/* Current text indicator */}
        <div className="flex justify-center gap-1 mt-8">
          {texts.map((_, index) => (
            <div
              key={index}
              className={`w-1 h-1 rounded-full transition-all duration-300 ${
                index === currentTextIndex 
                  ? 'w-4 bg-gradient-to-r from-blue-400 to-cyan-400' 
                  : 'bg-gray-600'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};