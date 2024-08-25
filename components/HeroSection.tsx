
import { ArrowDownRight } from "lucide-react"
import Meteors from "./magicui/Meteors"
import SparklesText from "./magicui/SparklesText"
import ShimmerButton from "./Ui/ShimmerButton"

const HeroSection = () => {
  return (
    <section className="w-full h-screen relative flex justify-center items-center flex-col" id="home">
      <h1 className="lg:text-[4rem] text-[3rem] text-center flex-wrap mx-auto font-black">
        Crafting website for Business<br/>
        <SparklesText text="FreeLancer" className="text-blue-700 lg:text-center uppercase text-[2rem] lg:text-[3rem] font-extrabold"/>
        </h1>
        <p className="text-gray-500 text-center text-md mt-5">
            I'm vijay, a Passionate creating dynamic,user-Friendly apllications,with strong Foundation of Frontend
            </p>
            <a href="#Project">
            <ShimmerButton title="My works" icon={<ArrowDownRight/>} className="mt-6"/>    
            </a>
                   
        <Meteors/>

        
        
    </section>
  )
}

export default HeroSection


      