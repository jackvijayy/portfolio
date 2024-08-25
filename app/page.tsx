

import { ApprochSection } from "@/components/ApprochSection";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ProjectSection from "@/components/ProjectSection";
import StackSection from "@/components/StackSection";

export default function Home() {
  return (
    <main className=" px-6 lg:px-[4rem] overflow-x-hidden relative bg-black text-white">
      <Navbar/>
      <HeroSection/>
      <ProjectSection/>
      <ApprochSection/>
      <StackSection/>
      
       
    </main>
    
  );
}
