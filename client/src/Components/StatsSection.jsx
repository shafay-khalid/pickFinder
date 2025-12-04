import React from "react";

const StatsSection = () => {
  const stats = [
    {
      label: "Supporting",
      number: "14",
      description: "Unique sports",
    },
    {
      label: "Trusted by",
      number: "75,000+",
      description: "Sports bettors",
    },
    {
      label: "Supporting",
      number: "15",
      description: "Sportsbooks",
    },
  ];

  return (
    <section className="w-full bg-[#050916] py-10 flex justify-center border-t border-white/5">
      <div className="w-full px-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <p className="text-slate-400 text-sm mb-2">{stat.label}</p>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                {stat.number}
              </h3>
              <p className="text-blue-400 text-base">{stat.description}</p>
            </div>
          ))}
        </div>

        {/* View testimonials button */}
        <div className="flex justify-center mt-12">
          <button className="flex items-center gap-2 px-6 py-2 rounded-full bg-slate-900/50 border border-white/10 text-slate-300 hover:bg-slate-800/50 transition">
            <span>📹</span>
            <span>View testimonials</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;