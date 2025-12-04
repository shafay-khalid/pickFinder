import React from "react";
import img1 from "../assets/image1.png";
import img2 from "../assets/image2.png";

const FeatureCard = ({ img, title, desc }) => (
  <div className="flex flex-col items-center text-center mb-8">
    <div className="relative w-full max-w-[500px] mx-auto mb-4 h-[370px] md:h-[430px] flex items-center justify-center overflow-visible">
      <img
        src={img}
        alt={title}
        className="max-h-full w-auto object-contain -rotate-2 drop-shadow-2xl"
      />
      {/* subtle blue glow under image */}
      <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-6 w-11/12 h-14 pointer-events-none">
        <div className="w-full h-full bg-gradient-to-t from-[#041f4f]/60 via-[#08306f]/40 to-transparent rounded-full blur-2xl" />
      </div>
    </div>

    <h3 className="text-white text-3xl md:text-4xl font-semibold mb-3 mt-6">
      {title}
    </h3>
    <p className="max-w-lg text-slate-300 text-sm md:text-base">
      {desc}
    </p>
  </div>
);

const FeaturesSection = () => {
  return (
    <section className="w-full bg-[#050916] py-12 flex justify-center">
      <div className="w-full px-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <FeatureCard
            img={img1}
            title="Daily projections"
            desc="See the top betting opportunities for the day, offering a curated list of high-value bets based on data and analysis"
          />

          <FeatureCard
            img={img2 }
            title="Intuitive pick builder"
            desc="Effortlessly export picks to your Pick 'Em app, streamlining your betting selections for easy tracking and management"
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;