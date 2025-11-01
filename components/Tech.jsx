import React from 'react'
import LogoLoop from './LogoLoop'
import { TechLogos, TechStack, TechTools } from '@/constants'

const Tech = () => {
  return (
    <div className='lg:h-[400px] h-[300px] w-full flex justify-start flex-col  gap-20 '>
        <p className="text-[#E4ECFF] text-xl lg:text-3xl">Tech and Tools</p>
        <LogoLoop
        logos={TechStack}
        speed={60}
        direction="right"
        logoHeight={48}
        gap={40}
        pauseOnHover
        scaleOnHover
        fadeOutColor="#ffffff"
        ariaLabel="Technology partners"
      />
      

      <LogoLoop
        logos={TechTools}
        speed={60}
        direction="right"
        logoHeight={48}
        gap={40}
        pauseOnHover
        scaleOnHover
        fadeOutColor="#ffffff"
        ariaLabel="Technology partners"
      />

    </div>
  )
}

export default Tech