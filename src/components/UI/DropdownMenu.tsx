// src/components/UI/DropdownMenu.tsx
import { useRef, useEffect } from 'react';
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
    { icon: <LayoutDashboard className="w-4 h-4 sm:w-5 sm:h-5" />, label: 'Dashboard', color: 'text-blue-400' },
    { icon: <Settings className="w-4 h-4 sm:w-5 sm:h-5" />, label: 'Settings', color: 'text-gray-400' },
    { icon: <HelpCircle className="w-4 h-4 sm:w-5 sm:h-5" />, label: 'Help', color: 'text-cyan-400' },
    { icon: <Gift className="w-4 h-4 sm:w-5 sm:h-5" />, label: 'Share & Get Credits', color: 'text-emerald-400' },
    { icon: <Crown className="w-4 h-4 sm:w-5 sm:h-5" />, label: 'Upgrade to Pro', color: 'text-amber-400' },
    { icon: <LogOut className="w-4 h-4 sm:w-5 sm:h-5" />, label: 'Logout', color: 'text-rose-400' },
  ];

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 z-40" onClick={onClose} />
      
      <div
        ref={menuRef}
        className="fixed top-14 left-1/2 -translate-x-1/2 w-[calc(100vw-2rem)] max-w-xs z-50 animate-in slide-in-from-top-5 duration-200 md:absolute md:top-12 md:left-4 md:translate-x-0 md:w-64"
      >
        <div className="bg-gray-900/95 backdrop-blur-xl border border-gray-800 rounded-xl md:rounded-2xl shadow-2xl overflow-hidden">
          <div className="p-3 border-b border-gray-800 flex items-center justify-between">
            <h3 className="font-medium text-gray-200 text-sm">Quick Menu</h3>
            <button
              onClick={onClose}
              className="p-1 rounded-lg hover:bg-gray-800 transition-colors"
            >
              <X className="w-3 h-3 text-gray-500" />
            </button>
          </div>

          <div className="p-1.5 space-y-0.5">
            {menuItems.map((item, index) => (
              <button
                key={index}
                className="w-full flex items-center justify-between p-2.5 rounded-lg hover:bg-gray-800/50 transition-all duration-200 group active:scale-[0.98]"
              >
                <div className="flex items-center gap-2.5">
                  <div className={`p-1.5 rounded-md bg-gray-800/50 ${item.color}`}>
                    {item.icon}
                  </div>
                  <span className="text-gray-300 font-medium text-xs text-left group-hover:text-white transition-colors">
                    {item.label}
                  </span>
                </div>
                <ChevronRight className="w-3 h-3 text-gray-600 group-hover:text-gray-400 transition-colors" />
              </button>
            ))}
          </div>

          <div className="p-3 border-t border-gray-800">
            <div className="text-xs text-gray-500 text-center">
               Early Access • v1.0
            </div>
          </div>
        </div>
      </div>
    </>
  );
};