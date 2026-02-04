import { useState, useRef, useEffect } from 'react';
import { 
  LayoutDashboard, 
  Settings, 
  HelpCircle, 
  Gift, 
  Crown, 
  LogOut,
  X,
  ChevronRight
} from 'lucide-react';

interface DropdownMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DropdownMenu = ({ isOpen, onClose }: DropdownMenuProps) => {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  const menuItems = [
    { icon: <LayoutDashboard className="w-5 h-5" />, label: 'Dashboard', color: 'text-blue-400' },
    { icon: <Settings className="w-5 h-5" />, label: 'Settings', color: 'text-gray-400' },
    { icon: <HelpCircle className="w-5 h-5" />, label: 'Help', color: 'text-cyan-400' },
    { icon: <Gift className="w-5 h-5" />, label: 'Share & Get Free Credits', color: 'text-emerald-400' },
    { icon: <Crown className="w-5 h-5" />, label: 'Upgrade to Pro', color: 'text-amber-400' },
    { icon: <LogOut className="w-5 h-5" />, label: 'Logout', color: 'text-rose-400' },
  ];

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 z-40" onClick={onClose} />
      
      {/* Menu Card */}
      <div
        ref={menuRef}
        className="absolute top-14 left-4 z-50 w-64 animate-in slide-in-from-top-5 duration-200"
      >
        <div className="bg-gray-900/95 backdrop-blur-xl border border-gray-800 rounded-2xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="p-4 border-b border-gray-800 flex items-center justify-between">
            <h3 className="font-medium text-gray-200">Menu</h3>
            <button
              onClick={onClose}
              className="p-1 rounded-lg hover:bg-gray-800 transition-colors"
            >
              <X className="w-4 h-4 text-gray-500" />
            </button>
          </div>

          {/* Menu Items */}
          <div className="p-2">
            {menuItems.map((item, index) => (
              <button
                key={index}
                className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-gray-800/50 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg bg-gray-800/50 ${item.color}`}>
                    {item.icon}
                  </div>
                  <span className="text-gray-300 font-medium text-sm group-hover:text-white">
                    {item.label}
                  </span>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-600 group-hover:text-gray-400" />
              </button>
            ))}
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-gray-800">
            <div className="text-xs text-gray-500 text-center">
              Version 1.0 • Beta
            </div>
          </div>
        </div>
      </div>
    </>
  );
};