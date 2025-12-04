import React from "react";
import { FaDiscord } from "react-icons/fa";
import ImageSection from "./ImageSection";

const Hero = () => {
  return (
    <>
      <section className="relative bg-[#050916] text-slate-100 pt-32 pb-20 flex justify-center">
        <div className="max-w-4xl text-center px-6 relative z-20">
          <a
            href="#"
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full border-2 border-blue-600/30 text-blue-300 font-semibold mb-6 hover:opacity-90"
          >
            <FaDiscord className="text-blue-200" />
            <span>Join our free Discord server!</span>
            <span className="ml-2 text-blue-170">→</span>
          </a>

          <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold leading-tight text-white">
            Lock in your picks with
            <br />
            confidence
          </h1>

          <div className="w-64 h-3 mx-auto mt-6 mb-6 rounded-full bg-gradient-to-r from-transparent via-blue-500 to-transparent transform -rotate-6" />

          <p className="text-slate-300 max-w-2xl text-base md:text-lg mx-auto leading-6 mb-8">
            PickFinder is a powerful analytical tool that helps you find the best
            player props on your favorite Pick 'Em apps in seconds.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-gradient-to-r from-blue-500 to-blue-400 text-white font-semibold px-3 py-2 rounded-full shadow-lg hover:opacity-90">
              💳 $14.99/month
            </button>

            {/* <button className="bg-[#0b1320] border border-white/10 text-white px-5 py-2 rounded-lg flex items-center gap-2 font-semibold hover:opacity-90">
              🍎 Download on the App Store
            </button> */}
          </div>
        </div>
      </section>

      {/* Image Section Below */}
      <ImageSection />
    </>
  );
};

export default Hero;