import React from "react";
import {
  FiArchive,
  FiGlobe,
  FiShuffle,
  FiBell,
  FiTrendingUp,
  FiFilter,
} from "react-icons/fi";

const items = [
  {
    icon: <FiArchive className="w-5 h-5" />,
    title: "Historical Data",
    desc:
      "Analyze historical trends, patterns, and matchups to identify player props that are most likely to hit",
  },
  {
    icon: <FiGlobe className="w-5 h-5" />,
    title: "Multi-Sport Coverage",
    desc:
      "Find picks across 14 sports, including e-sports, offering a broad range of betting options",
  },
  {
    icon: <FiShuffle className="w-5 h-5" />,
    title: "Betting Market Comparisons",
    desc:
      "Compare lines and odds across different sportsbooks to find the best odds and maximize your winnings",
  },
  {
    icon: <FiBell className="w-5 h-5" />,
    title: "Custom Alerts",
    desc:
      "Get notified via Discord when new player prop lines drop and are updated, allowing you to get them before they're bumped",
  },
  {
    icon: <FiTrendingUp className="w-5 h-5" />,
    title: "Line Movement",
    desc:
      "Track how the lines change over time, so you can avoid lines that are heavily inflated and ensure you're getting the best value",
  },
  {
    icon: <FiFilter className="w-5 h-5" />,
    title: "Advanced Filtering",
    desc:
      "Filter demon or goblin lines, defense vs. position, games with or without injured players, hitrate, averages, H2H, and more",
  },
];

const CapabilitiesSection = () => {
  return (
    <section className="w-full bg-[#050916] text-slate-200 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {items.map((it, idx) => {
            const rightBorder = (idx % 3) !== 2 ? "md:border-r md:border-white/6" : "";
            const topBorder = idx >= 3 ? "md:border-t md:border-white/6" : "";
            return (
              <div
                key={idx}
                className={`${rightBorder} ${topBorder} p-8 md:p-10 flex gap-4 items-start`}
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-md bg-slate-900/40 flex items-center justify-center text-blue-400">
                  {it.icon}
                </div>

                <div>
                  <h4 className="text-white  text-md mb-2">
                    {it.title}
                  </h4>
                  <p className="text-slate-300 text-sm max-w-xl">{it.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;