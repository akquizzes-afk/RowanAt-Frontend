import { Zap, Code, Palette, Cloud, Shield, Users, Rocket, Globe } from 'lucide-react';

const features = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Lightning Fast",
    description: "Generate complete websites in under 5 minutes with AI assistance.",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: <Code className="w-6 h-6" />,
    title: "Clean Code",
    description: "Production-ready HTML, CSS, and JavaScript with best practices.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: <Palette className="w-6 h-6" />,
    title: "Beautiful Designs",
    description: "AI-curated designs that match modern aesthetic standards.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: <Cloud className="w-6 h-6" />,
    title: "One-Click Deploy",
    description: "Instant hosting with SSL, CDN, and automatic updates.",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Secure & Reliable",
    description: "Enterprise-grade security with automatic backups.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Team Collaboration",
    description: "Real-time editing and version control for teams.",
    color: "from-indigo-500 to-purple-500",
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: "SEO Optimized",
    description: "Built-in SEO tools and performance optimization.",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Global CDN",
    description: "Lightning-fast loading from 200+ locations worldwide.",
    color: "from-orange-500 to-amber-500",
  },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Everything You Need to
            <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Build Amazing Websites
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Professional tools powered by AI to bring your vision to life instantly.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-gray-700 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Gradient Corner */}
              <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-br ${feature.color} opacity-5 rounded-tr-2xl rounded-bl-2xl`} />
              
              {/* Icon */}
              <div className={`mb-4 p-3 rounded-xl bg-gradient-to-br ${feature.color} w-fit`}>
                <div className="text-white">
                  {feature.icon}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-400">
                {feature.description}
              </p>

              {/* Hover Indicator */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};