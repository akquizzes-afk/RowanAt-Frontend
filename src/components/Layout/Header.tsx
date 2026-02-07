// src/components/Layout/Header.tsx
import { useState } from 'react';
import { Menu, Bell, LogIn, UserPlus, User } from 'lucide-react';
import { DropdownMenu } from '../UI/DropdownMenu';
import { NotificationsDropdown } from '../UI/NotificationsDropdown';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Default to not logged in

  // Mock login/logout functions
  const handleLogin = () => {
    setIsLoggedIn(true);
    console.log('User logged in');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsMenuOpen(false);
    console.log('User logged out');
  };

  const handleSignUp = () => {
    setIsLoggedIn(true);
    console.log('User signed up');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-3 sm:px-6 sm:py-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          {/* Left side - Hamburger (only when logged in) */}
          {isLoggedIn ? (
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
              
              {/* Dropdown Menu - Only when logged in */}
              <DropdownMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
            </div>
          ) : (
            // App Logo/Brand when not logged in
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 flex items-center justify-center">
                <span className="text-sm font-bold text-blue-400">AI</span>
              </div>
              <span className="text-sm font-medium text-gray-300 hidden sm:block">Chat Assistant</span>
            </div>
          )}

          {/* Right side - Conditional rendering based on login state */}
          <div className="flex items-center gap-2 sm:gap-3">
            {isLoggedIn ? (
              // Logged in state: Notification bell and Profile
              <>
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
                    {/* Optional: Red dot for new notifications */}
                    {/* <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span> */}
                  </button>
                  
                  {/* Notifications Dropdown */}
                  <NotificationsDropdown 
                    isOpen={isNotificationsOpen} 
                    onClose={() => setIsNotificationsOpen(false)} 
                  />
                </div>

                {/* Profile Icon with dropdown toggle */}
                <div className="relative">
                  <button
                    onClick={handleLogout}
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 flex items-center justify-center hover:border-gray-600 transition-colors group"
                    title="Logout"
                  >
                    <User className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-gray-300" />
                  </button>
                </div>
              </>
            ) : (
              // Not logged in state: Login and Sign Up buttons
              <>
                {/* Login Button (replaces bell icon position) */}
                <button
                  onClick={handleLogin}
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gray-800/50 border border-gray-700/50 flex items-center justify-center hover:bg-gray-800 transition-colors group"
                  title="Log In"
                >
                  <LogIn className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 group-hover:text-blue-300 transition-colors" />
                </button>

                {/* Sign Up Button (replaces profile icon position) */}
                <button
                  onClick={handleSignUp}
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 flex items-center justify-center hover:border-blue-400/50 transition-colors group"
                  title="Sign Up"
                >
                  <UserPlus className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 group-hover:text-blue-300 transition-colors" />
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};