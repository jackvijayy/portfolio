import { projects } from "@/constants"
import { PinContainer } from "./Ui/3d-pin"
import { ArrowUpRight } from "lucide-react"
import GradualSpacing from "./Ui/GradualSpacing"
import Image from "next/image"


const ProjectSection = () => {
  return (
    <div id="Project">
         <GradualSpacing
      className="font-display text-center text-5xl lg:text-6xl font-bold tracking-[-0.1em] text-emerald-500 "
      text="Recent Works"
    />
        <div className="flex justify-center items-center lg:flex-row flex-col p-4 gap-6  ">
            {projects.map(({ id,title,des,img,iconLists,link })=>(
                <div key={id} className="lg:min-h-[32.5rem] h-[25rem]
                 flex items-center justify-center sm:w-50 w-[50vw]"
                >
                    <PinContainer title={title} href={link}>
                    <div className="flex basis-full flex-col p-2  gap-2 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                    <div className=" p-1 w-full h-full overflow-hidden ">
                        <Image src={img} alt="thumbnail" className=" w-full h-full" width='100' height='100'  />

                    </div>
                        <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                           {title}
                         </h3>
                    <div className="text-sm font-normal">
                        <span className="text-slate-500 ">
                         {des}
                        </span>
                    </div>
                    <div className="flex items-center justify-between px-2 mt-2">
                    <div className="flex items-center justify-center">
                        {iconLists.map((icon,index)=>(
                            <div key={index} className="flex items-center rounded-full  border border-gray-800 -translate-x-6">
                                <Image src={icon}  width={24} height={24} alt="tech" className="rounded-full " />
                            </div>
                        ))}
                    </div>
                    <div>
                        <a href={link} className="text-sm flex gap-1">
                            <p>check the live site</p>
                            <ArrowUpRight size={20} color="blue"/>
                            
                        </a>
                    </div>
                    </div>
                  </div>
                    </PinContainer>
                </div>
            ))}
       

        </div>

    </div>
  )
}

export default ProjectSection