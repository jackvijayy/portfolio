
import { stacks, tools } from "@/constants"
import Marquee from "react-fast-marquee"

import GradualSpacing from "./Ui/GradualSpacing"
import Image from "next/image"



const StackSection = () => {
  return (
    <div id="skills" className="py-8">
      <GradualSpacing
      className="font-display text-center mb-[2.5rem] text-5xl lg:text-6xl font-bold tracking-[-0.1em] text-white "
      text="Skills"
    />
      <div className="w-full p-5">
        <Marquee pauseOnHover>
          <div className="flex items-center gap-8">
           {stacks.map((item,index)=>(
            <Image  key={index} src={item.img} alt="stacks" width={50} height={50}/>
           ))}
            
          </div>
        </Marquee>
      </div>
      <div className="w-full p-5 mt-6">
        <Marquee pauseOnHover direction="right">
          <div className="flex items-center gap-[5rem]">
           {tools.map((item)=>(
            <Image  key={item.id} src={item.img} alt="tools" width={50} height={50}/>
           ))}
            
          </div>
        </Marquee>
      </div>
      
     
      
    


        
    </div>
  )
}

export default StackSection