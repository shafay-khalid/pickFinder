import React, { useState } from "react";
import basketballImg from "../assets/basketball.png";
import footballImg from "../assets/football.png";
import baseballImg from "../assets/baseball.png";
import soccerImg from "../assets/soccer.png";
import hockeyImg from "../assets/hockey.png";
import esportsImg from "../assets/esport.png";
import tennisImg from "../assets/esport.png";

const SportsShowcaseSection = () => {
  const [activeSport, setActiveSport] = useState("esports");

  const sports = [
    { id: "basketball", label: "Basketball", image: basketballImg, icon: "🏀", description: "NBA stats and advanced analytics available" },
    { id: "football", label: "Football", image: footballImg, icon: "🏈", description: "NFL data with comprehensive player stats" },
    { id: "baseball", label: "Baseball", image: baseballImg, icon: "⚾", description: "MLB insights and performance metrics" },
    { id: "soccer", label: "Soccer", image: soccerImg, icon: "⚽", description: "Every soccer league coverage available" },
    { id: "hockey", label: "Hockey", image: hockeyImg, icon: "🏒", description: "NHL statistics and team analysis" },
    { id: "esports", label: "E-Sports", image: esportsImg, icon: "🎮", description: "We recently added COD, and our members have been hitting a lot!" },
    { id: "tennis", label: "Tennis", image: tennisImg, icon: "🎾", description: "Advanced tennis stats and H2H data" },
  ];

  const activeSportData = sports.find((s) => s.id === activeSport);

  return (
    <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-24 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-3xl  mb-4 text-center text-white">
          Support for your favorite sports
        </h2>
        <p className="text-gray-400 text-base md:text-xs mb-8 leading-relaxed text-center max-w-3xl mx-auto">
          Not only is PickFinder the most affordable tool on the market, but it
          also has the most sports and e-sports, with 14 total. That's almost
          $1 per sport. Some sites charge $20+ for only 1-5 sports.
        </p>

        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-16 ">
          {sports.map((sport) => (
            <button
              key={sport.id}
              onClick={() => setActiveSport(sport.id)}
              className={`flex items-center gap-2 px-2 md:px-2 py-1 md:py-2 rounded-full font-small transition-all duration-300 border-2 text-sm md:text-base ${
                activeSport === sport.id
                  ? "bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-500/40"
                  : "border-slate-700 text-slate-400 hover:border-slate-600 hover:text-slate-300 bg-slate-900/50"
              }`}
            >
              <span>{sport.icon}</span>
              {sport.label}
            </button>
          ))}
        </div>

        <p className="text-center text-slate-300 text-sm md:text-base mb-12">
          {activeSportData?.description}
        </p>

        <div className="flex justify-center items-center min-h-96 bg-gradient-to-b from-blue-900/20 to-slate-900/40  overflow-hidden">
          <img
            key={activeSport}
            src={activeSportData?.image}
            alt={activeSport}
            className="max-w-full max-h-96 object-contain animate-fade-in"
          />
        </div>
      </div>
    </section>
  );
};

export default SportsShowcaseSection;