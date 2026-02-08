// src/components/Landing/Footer.tsx
import { Heart, Twitter, Github, Linkedin, Mail } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-gray-800 bg-gray-900/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 flex items-center justify-center">
                <span className="text-lg font-bold text-blue-400">AI</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-100">AI Assistant</h3>
                <p className="text-sm text-gray-500">Build websites with words</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              The future of web development is here. Describe, create, deploy.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-gray-100 font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              {['Features', 'Pricing', 'API', 'Documentation', 'Changelog'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-gray-100 font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {['About', 'Blog', 'Careers', 'Press', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-gray-100 font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'GDPR', 'Security'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <div className="text-gray-500 text-sm flex items-center gap-1">
            © {currentYear} AI Assistant. Made with
            <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
            for the developer community.
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};