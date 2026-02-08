import { Heart, Twitter, Github, Linkedin } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-800 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 mb-6 md:mb-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                <span className="text-sm md:text-lg font-bold text-white">AI</span>
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-bold text-white">VisionCraft</h3>
                <p className="text-xs md:text-sm text-gray-400">AI-Powered Web Design</p>
              </div>
            </div>
            <p className="text-xs md:text-sm text-gray-400">
              Build beautiful websites instantly with AI.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-white font-semibold mb-2 md:mb-4 text-sm md:text-base">Product</h4>
            <ul className="space-y-1 md:space-y-2">
              {['Features', 'Pricing', 'API', 'Templates'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-xs md:text-sm text-gray-400 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-white font-semibold mb-2 md:mb-4 text-sm md:text-base">Company</h4>
            <ul className="space-y-1 md:space-y-2">
              {['About', 'Blog', 'Careers', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-xs md:text-sm text-gray-400 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-white font-semibold mb-2 md:mb-4 text-sm md:text-base">Legal</h4>
            <ul className="space-y-1 md:space-y-2">
              {['Privacy', 'Terms', 'Security', 'Cookies'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-xs md:text-sm text-gray-400 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-4 md:my-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4">
          <div className="text-xs text-gray-500 flex items-center gap-1">
            © {currentYear} VisionCraft. Made with
            <Heart className="w-3 h-3 md:w-4 md:h-4 text-red-500 fill-red-500" />
            for creators.
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3 md:gap-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Twitter">
              <Twitter className="w-4 h-4 md:w-5 md:h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="GitHub">
              <Github className="w-4 h-4 md:w-5 md:h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
              <Linkedin className="w-4 h-4 md:w-5 md:h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};