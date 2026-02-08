// src/components/Landing/FeaturesSection.tsx
import { Zap, Cpu, Shield, Code, Eye, Cloud, Palette, GitBranch } from 'lucide-react';

const features = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Lightning Fast",
    description: "Generate fully functional websites in seconds with AI-powered code generation.",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: <Cpu className="w-6 h-6" />,
    title: "AI-Powered",
    description: "Advanced AI understands your vision and creates pixel-perfect designs automatically.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Secure & Reliable",
    description: "Enterprise-grade security with automatic backups and version control.",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: <Code className="w-6 h-6" />,
    title: "Clean Code",
    description: "Export production-ready HTML, CSS, JavaScript, and React components.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: <Eye className="w-6 h-6" />,
    title: "Real-Time Preview",
    description: "See changes instantly with live preview as you describe your vision.",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: <Cloud className="w-6 h-6" />,
    title: "Cloud Hosting",
    description: "One-click deployment to our global CDN with SSL certificates included.",
    color: "from-indigo-500 to-purple-500",
  },
  {
    icon: <Palette className="w-6 h-6" />,
    title: "Customizable",
    description: "Full control over colors, fonts, layouts, and design systems.",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: <GitBranch className="w-6 h-6" />,
    title: "Team Collaboration",
    description: "Work together with your team in real-time with version history.",
    color: "from-orange-500 to-amber-500",
  },
];

export const FeaturesSection = () => {
  return (
    <section className="relative py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-4">
            Everything You Need to
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> Build Amazing Websites</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            From concept to deployment, we provide all the tools you need to create stunning websites.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-gray-700 hover:bg-gray-900/70 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Gradient Corner */}
              <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-br ${feature.color} opacity-10 rounded-tr-2xl rounded-bl-2xl`} />
              
              {/* Icon */}
              <div className={`mb-4 p-3 rounded-xl bg-gradient-to-br ${feature.color} w-fit`}>
                <div className="text-white">
                  {feature.icon}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-gray-100 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400">
                {feature.description}
              </p>

              {/* Hover Line */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};