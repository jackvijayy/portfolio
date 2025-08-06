import React from "react";

import { TextGenerateEffect } from "./ui/Text-generate-effect";
import Button from "./ui/Button";
import LightRays from "./Backgrounds/LightRays/LightRays";

const Hero = () => {
  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 h-full w-full bg-black  bg-grid-white/[0.06]">
      <div className="w-full">
        <LightRays
    raysOrigin="top-center"
    raysColor="#ffffff"
    raysSpeed={1.5}
    lightSpread={0.8}
    rayLength={1.2}
    followMouse={true}
    mouseInfluence={0.1}
    noiseAmount={0.1}
    distortion={0.05}
    className="custom-rays "
  />

      </div>
      
        
     
      </div>

      {/* Mask Overlay to Control Visibility
      <div className="absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]"></div> */}

      {/* Main Content */}
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

