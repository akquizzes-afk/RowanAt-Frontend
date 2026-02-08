export const HorizonEffect = () => {
  // Generate stars with better performance
  const stars = Array.from({ length: 80 }).map((_, i) => ({
    id: i,
    size: Math.random() * 2 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    opacity: Math.random() * 0.5 + 0.2,
    delay: Math.random() * 5,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            animation: `twinkle ${2 + Math.random() * 3}s infinite ${star.delay}s`,
          }}
        />
      ))}

      {/* Horizon Line with Flash */}
      <div className="absolute top-1/3 left-0 right-0">
        {/* Horizon line */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        
        {/* Flash star */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="relative">
            <div className="absolute w-16 h-16 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-xl animate-pulse" />
            <div className="relative w-4 h-4 bg-white rounded-full shadow-lg shadow-blue-400/50" />
            <div className="absolute -inset-4 animate-ping bg-blue-400/10 rounded-full" />
          </div>
        </div>

        {/* Subtle glow along horizon */}
        <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent blur-sm" />
      </div>
    </div>
  );
};