import React from "react";
import Hero from "../Components/Hero";
import StatsSection from "../Components/StatsSection";
import AnalysisSection from "../Components/AnalysisSection";
import FeaturesSection from "../Components/FeaturesSection";
import CapabilitiesSection from "../Components/CapabilitiesSection";
import SportsShowcaseSection from "../Components/SportsShowcaseSection";
import ComparisonSection from "../Components/ComparisonSection";

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <StatsSection />
      <AnalysisSection />
      <FeaturesSection />
      <CapabilitiesSection />
      <SportsShowcaseSection />
      <ComparisonSection />
    </div>
  );
};

export default Home;
