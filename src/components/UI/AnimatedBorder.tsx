// src/components/UI/AnimatedBorder.tsx
const AnimatedBorder = () => {
  return (
    <>
      {/* Desktop: Full animated border */}
      <div className="hidden md:block absolute -inset-0.5 rounded-2xl overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-move-horizontal" />
        <div className="absolute top-0 right-0 h-full w-[1px] bg-gradient-to-b from-transparent via-cyan-500 to-transparent animate-move-vertical-delayed" />
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent animate-move-horizontal-reverse" />
        <div className="absolute top-0 left-0 h-full w-[1px] bg-gradient-to-b from-transparent via-blue-400 to-transparent animate-move-vertical-reverse-delayed" />
      </div>
      
      {/* Mobile: Simpler animation */}
      <div className="md:hidden absolute -inset-0.5 rounded-2xl overflow-hidden">
        <div className="absolute inset-0 border border-transparent border-gradient animate-border-pulse" />
      </div>
    </>
  );
};