import React, { useState } from "react";

const ComparisonSection = () => {
  const [hoveredRow, setHoveredRow] = useState(null);

  const features = [
    {
      id: 1,
      name: "Sports Coverage",
      pickfinder: "14 Sports",
      competitors: "1-5 Sports",
      icon: "🏆",
    },
    {
      id: 2,
      name: "Monthly Pricing",
      pickfinder: "$14.99/month",
      competitors: "$20-$120/month",
      icon: "💰",
    },
    {
      id: 3,
      name: "Esports Support",
      pickfinder: "Full Esports Coverage",
      competitors: "Limited or None",
      icon: "🎮",
    },
    {
      id: 4,
      name: "Tennis & Soccer",
      pickfinder: "Complete Coverage",
      competitors: "Limited Or None",
      icon: "⚽",
    },
    {
      id: 5,
      name: "Premium Discord",
      pickfinder: "Daily Picks + Community",
      competitors: "Basic or None",
      icon: "💬",
    },
    {
      id: 6,
      name: "24/7 Support",
      pickfinder: "Always Available",
      competitors: "Limited Hours",
      icon: "🕐",
    },
    {
      id: 7,
      name: "Admin Picks",
      pickfinder: "Daily Expert Picks",
      competitors: "Rare or None",
      icon: "👑",
    },
    {
      id: 8,
      name: "Trending Page",
      pickfinder: "View Most Favorited Picks",
      competitors: "Don't Have",
      icon: "📈",
    },
  ];

  return (
    <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-24 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-3xl mb-4 text-center text-white">
          Why PickFinder <span className="text-blue-500">Dominates</span> the Competition
        </h2>
        <p className="text-gray-400 text-base md:text-sm mb-12 leading-relaxed text-center max-w-2xl mx-auto">
          See how we stack up against other sports betting tools. The numbers don't lie - PickFinder delivers
          more value for less.
        </p>

        <div className="border border-slate-800 rounded-lg overflow-hidden bg-slate-900/30">
          {/* Header */}
          <div className="grid grid-cols-3 bg-black border-b border-slate-800">
            <div className="px-6 py-4">
              <h3 className="text-white font-semibold text-sm">Features</h3>
            </div>
            <div className="px-6 py-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <h3 className="text-white font-semibold text-sm">PickFinder</h3>
              </div>
            </div>
            <div className="px-6 py-4">
              <div className="flex items-center gap-2">
                <span className="text-red-500 text-lg">✕</span>
                <h3 className="text-gray-400 font-semibold text-sm">Competitors</h3>
              </div>
            </div>
          </div>

          {/* Rows */}
          {features.map((feature) => (
            <div
              key={feature.id}
              onMouseEnter={() => setHoveredRow(feature.id)}
              onMouseLeave={() => setHoveredRow(null)}
              className={`grid grid-cols-3 border-b border-slate-800 transition-all duration-300 ${
                hoveredRow === feature.id ? "bg-black/60" : "bg-slate-900/10 hover:bg-slate-800/20"
              }`}
            >
              <div className="px-6 py-4 flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-lg">{feature.icon}</span>
                </div>
                <span className="text-gray-300 font-medium text-sm">{feature.name}</span>
              </div>
              <div className="px-6 py-4 flex items-center">
                <span className="text-green-400 font-medium text-sm flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  {feature.pickfinder}
                </span>
              </div>
              <div className="px-6 py-4 flex items-center">
                <span className="text-red-400 font-medium text-sm flex items-center gap-2">
                  <span className="text-red-500">✕</span>
                  {feature.competitors}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;