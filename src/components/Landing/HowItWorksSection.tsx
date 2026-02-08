import { MessageSquare, Cpu, Eye, Cloud } from 'lucide-react';

const steps = [
  {
    number: "01",
    icon: <MessageSquare className="w-5 h-5 md:w-6 md:h-6" />,
    title: "Describe Your Idea",
    description: "Use simple English to explain what you want.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    number: "02",
    icon: <Cpu className="w-5 h-5 md:w-6 md:h-6" />,
    title: "AI Creates Design",
    description: "AI generates complete design with layout.",
    color: "from-purple-500 to-pink-500",
  },
  {
    number: "03",
    icon: <Eye className="w-5 h-5 md:w-6 md:h-6" />,
    title: "Preview & Refine",
    description: "See preview and make adjustments.",
    color: "from-emerald-500 to-teal-500",
  },
  {
    number: "04",
    icon: <Cloud className="w-5 h-5 md:w-6 md:h-6" />,
    title: "Publish Instantly",
    description: "One-click deployment with hosting.",
    color: "from-amber-500 to-orange-500",
  },
];

export const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
            Simple.
            <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Powerful. Effective.
            </span>
          </h2>
          <p className="text-base md:text-xl text-gray-400 max-w-2xl mx-auto">
            Build websites in 4 steps. No technical skills needed.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Steps grid - vertical on mobile, horizontal on desktop */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 md:gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl md:rounded-2xl p-6 md:p-8 text-center group hover:border-gray-700 transition-all duration-300">
                  {/* Step Number */}
                  <div className="absolute -top-3 md:-top-4 left-1/2 -translate-x-1/2 w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-950 border border-gray-700 flex items-center justify-center">
                    <span className="text-xs md:text-sm font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                      {step.number}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className={`mb-4 md:mb-6 p-3 md:p-4 rounded-xl md:rounded-2xl bg-gradient-to-br ${step.color} w-fit mx-auto`}>
                    <div className="text-white">
                      {step.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-lg md:text-xl font-semibold text-white mb-2 md:mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-400">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-8 md:mt-16">
          <button className="px-6 py-3 md:px-8 md:py-4 rounded-xl md:rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold text-base md:text-lg hover:opacity-90 transition-opacity">
            Start Your First Project
          </button>
          <p className="text-xs md:text-sm text-gray-500 mt-2 md:mt-4">
            Free for basic projects • No credit card required
          </p>
        </div>
      </div>
    </section>
  );
};