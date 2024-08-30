import Image from "next/image"
import { Timeline } from "./Ui/Timeline"
import { Github, Instagram, Linkedin } from "lucide-react"


const data = [
    {
      title: "Its me",
      content: (
        <div className="border border-gray-900 h-96 w-50 p-2 flex flex-col rounded-lg">
            <div className="flex justify-center items-center">
                <div className="border border-gray-800 mt-5 rounded-full">
                  <Image src="/stacks/java.svg" alt="my profile" width='100' height='100' className="rounded-full"/>
                </div>
            </div>
            <h1 className="text-center text-3xl mt-8 mb-3">Vijay Anand</h1>
            <h3 className="text-center mt-3">Developer</h3>
            <h2 className="text-xl mt-3 text-center">Follow On</h2>
            <div className="flex justify-center items-center gap-3 mt-3">
                <Github color="white"/>
                <Instagram color="red"/>
                <Linkedin color="blue"/>

            </div>

          
          </div>
      )
      },
      {
        title: "Education",
        content: (
          <div className="">
            <p>2021-2025</p>
            <p>B.E computer science and Engineering</p>
            <p>Vetri Vinayaha College Of Engineering And Technology</p>
            <p>Thottiyam,Trichy</p>
          
            </div>
        )
        },
        {
            title: "Passion",
            content: (
              <div>
                <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                  Built and launched Aceternity UI and Aceternity UI Pro from scratch
                </p>
                </div>
            )
            },

    ]


const Aboutme = () => {
  return (
    <div className="w-full p-2 overflow-hidden">
        <Timeline data={data}/>

    </div>
  )
}

export default Aboutme