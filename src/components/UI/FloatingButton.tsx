import React from 'react';

interface FloatingButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode;
}

export const FloatingButton: React.FC<FloatingButtonProps> = ({ icon, className = '', ...props }) => {
  return (
    <button
      className={`
        floating-button
        bg-slate-900/80 backdrop-blur-lg
        border border-slate-700/50
        hover:bg-slate-800 hover:border-slate-600
        active:scale-95
        transition-all duration-200
        rounded-full
        w-12 h-12
        flex items-center justify-center
        shadow-lg
        ${className}
      `}
      {...props}
    >
      {icon}
    </button>
  );
};