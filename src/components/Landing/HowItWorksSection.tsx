// src/components/Landing/HowItWorksSection.tsx
import { MessageSquare, Cpu, Eye, Cloud, ChevronRight } from 'lucide-react';

const steps = [
  {
    number: "01",
    icon: <MessageSquare className="w-8 h-8" />,
    title: "Describe Your Vision",
    description: "Simply tell us what you want to build. Use natural language - our AI understands.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    number: "02",
    icon: <Cpu className="w-8 h-8" />,
    title: "AI Generates Design",
    description: "Our AI creates a complete design with layout, colors, and components.",
    color: "from-purple-500 to-pink-500",
  },
  {
    number: "03",
    icon: <Eye className="w-8 h-8" />,
    title: "Preview & Refine",
    description: "See your website in real-time. Make adjustments with simple commands.",
    color: "from-emerald-500 to-teal-500",
  },
  {
    number: "04",
    icon: <Cloud className="w-8 h-8" />,
    title: "Deploy & Share",
    description: "One-click deployment with automatic hosting. Share your creation instantly.",
    color: "from-amber-500 to-orange-500",
  },
];

export const HowItWorksSection = () => {
  return (
    <section className="relative py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-4">
            How It
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> Works</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Build professional websites in 4 simple steps. No design skills or coding required.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-emerald-500/20 -translate-y-1/2" />
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 text-center group hover:border-gray-700 hover:bg-gray-900/70 transition-all duration-300">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 flex items-center justify-center">
                    <span className="text-lg font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                      {step.number}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className={`mb-6 p-4 rounded-2xl bg-gradient-to-br ${step.color} w-fit mx-auto`}>
                    <div className="text-white">
                      {step.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-semibold text-gray-100 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 mb-6">
                    {step.description}
                  </p>

                  {/* Arrow for Desktop */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-2 -translate-y-1/2 z-10">
                      <div className="p-2 rounded-full bg-gray-900 border border-gray-800">
                        <ChevronRight className="w-5 h-5 text-gray-400" />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
            Start Your First Project
          </button>
          <p className="text-gray-500 mt-4 text-sm">
            No credit card required • Free plan includes 5 projects
          </p>
        </div>
      </div>
    </section>
  );
};