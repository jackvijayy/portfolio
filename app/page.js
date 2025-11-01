'use client'

import About from "@/components/About";
import Certification from "@/components/Certification";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Project from "@/components/Project";
import Tech from "@/components/Tech";


export default function Home() {
  return (
    <main className="relative bg-black flex justify-center items-center flex-col overflow-hidden 
   mx-auto">
    {/* sm:p-7 p-4 */}
      <div className="max-w-7xl w-full">
        <Hero />
        <About />
        <Tech/>
        <Project />
        <Certification />
        <Contact />
      </div>

    </main>
  );
}
