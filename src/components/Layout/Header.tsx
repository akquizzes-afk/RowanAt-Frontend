// src/components/Layout/Header.tsx
import { useState } from 'react';
import { Menu, Bell, User } from 'lucide-react';
import { DropdownMenu } from '../UI/DropdownMenu';
import { NotificationsDropdown } from '../UI/NotificationsDropdown';

interface HeaderProps {
  isLoggedIn: boolean;
  onLogin?: () => void;
  onLogout?: () => void;
}

export const Header = ({ isLoggedIn, onLogin, onLogout }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-3 sm:px-6 sm:py-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          {/* Left side - Brand/Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 flex items-center justify-center">
              <span className="text-sm font-bold text-blue-400">AI</span>
            </div>
            <span className="text-sm font-medium text-gray-300 hidden sm:block">Chat Assistant</span>
          </div>

          {/* Right side - Conditional rendering based on login state */}
          <div className="flex items-center gap-2 sm:gap-3">
            {isLoggedIn ? (
              // Logged in state: Hamburger, Notification bell, and Profile
              <>
                {/* Hamburger Menu */}
                <div className="relative">
                  <button
                    onClick={() => {
                      setIsMenuOpen(!isMenuOpen);
                      if (isNotificationsOpen) setIsNotificationsOpen(false);
                    }}
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gray-800/50 border border-gray-700/50 flex items-center justify-center hover:bg-gray-800 transition-colors group"
                  >
                    <Menu className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-gray-300 transition-colors" />
                  </button>
                  
                  {/* Dropdown Menu */}
                  <DropdownMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
                </div>

                {/* Notification Bell */}
                <div className="relative">
                  <button
                    onClick={() => {
                      setIsNotificationsOpen(!isNotificationsOpen);
                      if (isMenuOpen) setIsMenuOpen(false);
                    }}
                    className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gray-800/50 border border-gray-700/50 flex items-center justify-center hover:bg-gray-800 transition-colors group"
                  >
                    <Bell className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-gray-300 transition-colors" />
                  </button>
                  
                  {/* Notifications Dropdown */}
                  <NotificationsDropdown 
                    isOpen={isNotificationsOpen} 
                    onClose={() => setIsNotificationsOpen(false)} 
                  />
                </div>

                {/* Profile Icon with logout functionality */}
                <button
                  onClick={onLogout}
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 flex items-center justify-center hover:border-gray-600 transition-colors group"
                  title="Logout"
                >
                  <User className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-gray-300" />
                </button>
              </>
            ) : (
              // Not logged in state: Login and Sign Up text buttons
              <>
                {/* Login Button */}
                <button
                  onClick={onLogin}
                  className="px-3 py-2 rounded-xl bg-gray-800/50 border border-gray-700/50 text-sm font-medium text-gray-300 hover:bg-gray-800 hover:text-white transition-colors whitespace-nowrap"
                >
                  Login
                </button>

                {/* Sign Up Button */}
                <button
                  onClick={onLogin} // For demo, both login and sign up do the same
                  className="px-3 py-2 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 text-sm font-medium text-blue-400 hover:from-blue-500/30 hover:to-cyan-500/30 hover:text-blue-300 hover:border-blue-400/50 transition-colors whitespace-nowrap"
                >
                  Sign Up
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};