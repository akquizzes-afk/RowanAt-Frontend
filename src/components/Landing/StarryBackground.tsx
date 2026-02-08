// src/components/Landing/StarryBackground.tsx
export const StarryBackground = () => {
  // Create an array of 150 stars with random properties
  const stars = Array.from({ length: 150 }).map((_, i) => ({
    id: i,
    size: Math.random() * 3 + 1, // 1-4px
    x: Math.random() * 100, // 0-100%
    y: Math.random() * 100, // 0-100%
    opacity: Math.random() * 0.7 + 0.3, // 0.3-1
    delay: Math.random() * 5, // 0-5s delay
    duration: Math.random() * 3 + 2, // 2-5s duration
  }));

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white animate-twinkle"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            animationDelay: `${star.delay}s`,
            animationDuration: `${star.duration}s`,
          }}
        />
      ))}
      
      {/* Horizon Line */}
      <div className="absolute top-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      
      {/* Horizon Flash Star */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="relative">
          {/* Main flash */}
          <div className="absolute w-4 h-4 animate-pulse-slow bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur-sm" />
          {/* Core */}
          <div className="relative w-2 h-2 bg-white rounded-full" />
          {/* Glow effect */}
          <div className="absolute -inset-4 animate-ping bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full" />
        </div>
      </div>
    </div>
  );
};