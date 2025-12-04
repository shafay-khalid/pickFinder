import React from "react";
import dashboardImg from "../assets/image.png"; // client/src/assets/image.png

const AnalysisSection = () => {
  return (
    <section className="relative w-full bg-[#050916] py-20 flex justify-center overflow-hidden">
      <div className="w-full px-6 max-w-5xl text-center">
        <h2 className="text-white text-3xl md:text-3xl lg:text-4xl mb-4">
          In-depth player analysis
        </h2>

        <p className="text-slate-300 text-base md:text-lg lg:text-lg max-w-2xl mx-auto mb-6">
          Analysis of individual player performance, key metrics, trends, and
          statistics to help identify valuable opportunities
        </p>

        <div className="relative rounded-2xl mb-16">
          <div className="rounded-2xl shadow-xl overflow-hidden">
            <img
              src={dashboardImg}
              alt="In-depth player analysis preview"
              className="w-full object-cover block"
            />
          </div>
        </div>

        {/* Blue gradient fade at bottom - transparent */}
        <div className="absolute bottom-10 left-0 right-0 h-64 bg-gradient-to-b from-transparent via-blue-600/20 to-blue-500/40 pointer-events-none" />
      </div>
    </section>
  );
};

export default AnalysisSection;