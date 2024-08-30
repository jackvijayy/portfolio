"use client"

import { ArrowDownRight } from "lucide-react"
import ShimmerButton from "./Ui/ShimmerButton"
import GradualSpacing from "./Ui/GradualSpacing"
import { BackgroundBeams } from "./Ui/Background-beams"
import { useState } from "react"

const HeroSection = () => {
  return ( 
    <section className="w-full h-screen relative flex justify-center items-center flex-col overflow-hidden" id="home">
      <h1 className="lg:text-[4rem] text-[3rem] text-center flex-wrap mx-auto font-black">
        Crafting website for Business<br/>
        <GradualSpacing
         className="font-display mb-[2.5rem] text-center text-5xl lg:text-6xl font-bold tracking-[-0.1em] text-blue-700 "
         text="FREE LANCER"
        />
      </h1>
      <p className="text-gray-500 text-center text-md mt-5">
        I am vijay a Passionate creating dynamic user-Friendly apllications with strong Foundation of Frontend
      </p>
      <a href="#Project">
       <ShimmerButton title="My Work" icon={<ArrowDownRight size={20}/>} className="mt-6"/>  
      </a>
        <BackgroundBeams/>
       
    </section>
  )
}

export default HeroSection


      