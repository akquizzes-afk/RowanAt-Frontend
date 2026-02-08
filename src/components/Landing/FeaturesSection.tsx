import { Zap, Code, Palette, Cloud, Shield, Users, Rocket, Globe } from 'lucide-react';

const features = [
  {
    icon: <Zap className="w-5 h-5 md:w-6 md:h-6" />,
    title: "Lightning Fast",
    description: "Generate complete websites in minutes with AI.",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: <Code className="w-5 h-5 md:w-6 md:h-6" />,
    title: "Clean Code",
    description: "Production-ready HTML, CSS, and JavaScript.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: <Palette className="w-5 h-5 md:w-6 md:h-6" />,
    title: "Beautiful Designs",
    description: "AI-curated designs matching modern standards.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: <Cloud className="w-5 h-5 md:w-6 md:h-6" />,
    title: "One-Click Deploy",
    description: "Instant hosting with SSL and CDN.",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: <Shield className="w-5 h-5 md:w-6 md:h-6" />,
    title: "Secure & Reliable",
    description: "Enterprise security with automatic backups.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: <Users className="w-5 h-5 md:w-6 md:h-6" />,
    title: "Team Collaboration",
    description: "Real-time editing and version control.",
    color: "from-indigo-500 to-purple-500",
  },
  {
    icon: <Rocket className="w-5 h-5 md:w-6 md:h-6" />,
    title: "SEO Optimized",
    description: "Built-in SEO tools and optimization.",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: <Globe className="w-5 h-5 md:w-6 md:h-6" />,
    title: "Global CDN",
    description: "Fast loading from 200+ locations.",
    color: "from-orange-500 to-amber-500",
  },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header - Smaller on mobile */}
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
            Everything You Need
            <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              For Amazing Websites
            </span>
          </h2>
          <p className="text-base md:text-xl text-gray-400 max-w-2xl mx-auto">
            Professional tools powered by AI to bring your vision to life.
          </p>
        </div>

        {/* Features Grid - Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl md:rounded-2xl p-4 md:p-6 hover:border-gray-700 transition-all duration-300"
            >
              {/* Gradient Corner */}
              <div className={`absolute top-0 right-0 w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br ${feature.color} opacity-5 rounded-tr-xl rounded-bl-xl md:rounded-tr-2xl md:rounded-bl-2xl`} />
              
              {/* Icon */}
              <div className={`mb-3 md:mb-4 p-2 md:p-3 rounded-lg md:rounded-xl bg-gradient-to-br ${feature.color} w-fit`}>
                <div className="text-white">
                  {feature.icon}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-lg md:text-xl font-semibold text-white mb-2 md:mb-3">
                {feature.title}
              </h3>
              <p className="text-sm md:text-base text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};