import React from "react";

import { TextGenerateEffect } from "./ui/Text-generate-effect";
import Button from "./ui/Button";
// import LightRays from "./Backgrounds/LightRays/LightRays";
import Prism from "./Backgrounds/Prism";

const Hero = () => {
  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 h-full w-full bg-black  bg-grid-white/[0.02]">
        <Prism
          animationType="hover"
          timeScale={0.2}
          height={3.3}
          baseWidth={2.5}
          scale={2.5}
          hueShift={0}
          colorFrequency={1}
          noise={0}
          glow={1}
          transparent={true}
          className="absolute inset-0 h-full w-full opacity-30 z-999"
        />
   
      </div>
      <div className="relative z-10 max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] text-center flex flex-col gap-4 items-center justify-center px-4">
        <h2 className="uppercase text-[#E4ECFF] text-xs">
          Dynamic Web Magic With Me
        </h2>
        <TextGenerateEffect
          words="Transforming Concepts into Seamless User Experiences"
          className="text-center font-extrabold text-white"
        />
        <Button text="Let's Work Together" className="mt-10" beam={true} />
      </div>
    </div>
  );
};

export default Hero;
