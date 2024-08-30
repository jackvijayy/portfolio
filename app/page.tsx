

import Aboutme from "@/components/Aboutme";
import { ApprochSection } from "@/components/ApprochSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ProjectSection from "@/components/ProjectSection";
import StackSection from "@/components/StackSection";

export default function Home() {
  return (
    <main className=" px-4  md:px-10 lg:px-[4rem] overflow-x-hidden relative bg-black text-white">
      <Navbar/>
      <HeroSection/>
      <Aboutme/>
      <ProjectSection/>
      <ApprochSection/>
      <StackSection/>
      <Footer/>
      
       
    </main>
    
  );
}
