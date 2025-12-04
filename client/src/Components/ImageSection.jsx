import React from "react";
import deviceImage from "../assets/hero.png"; // replace with your actual image filename

const ImageSection = () => {
  return (
    <section className="relative w-full bg-[#050916] py-10 flex justify-center overflow-hidden">
      <div className="w-full px-4 md:px-8 max-w-7xl">
        <img
          src={deviceImage}
          alt="PickFinder Dashboard"
          className="w-full object-contain drop-shadow-2xl -rotate-3"
        />
      </div>
    </section>
  );
};

export default ImageSection;