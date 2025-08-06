"use client";
import React, { Suspense, useState } from "react";

import Button from "./ui/Button";
import { Globe } from "./ui/Globe";

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(" jackvijay1108@gmail.com");
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };
  return (
    <section className="my-20">
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
    xl:grid-rows-6 gap-5 h-full"
      >
        {/* first grid */}

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="images/grid1.png"
              alt="grid-1"
              className="w-full sm:h-[276px] h-fit object-contain"
            />

            <div>
              <p className="grid-headtext">Hi, I’m Vijay Anand</p>
              <p className="grid-subtext">
                SoftwareDeveloper, I have honed my skills in both frontend and
                backend dev, creating dynamic and responsive websites
              </p>
            </div>
          </div>
        </div>

        {/* second grid */}

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="images/grid2.png"
              alt="grid-2"
              className="w-full sm:h-[276px] h-fit object-contain"
            />

            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I specialize in a variety of languages, frameworks, and tools
                that allow me to build robust and scalable applications
              </p>
            </div>
          </div>
        </div>

        {/* third grid */}

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl relative w-full sm:h-[326px] h-[300px] flex justify-center items-center">
              <Suspense fallback={<p>Loading...</p>}>
              <Globe />
              </Suspense>
              
            </div>
            <div>
              <p className="grid-headtext">
                I’m very flexible with time zone communications & locations
              </p>
              <p className="grid-subtext">
                I&apos;m based in India, Trichy and open to remote work
                worldwide.
              </p>
              <Button text="Contact Me" beam={true} className="w-full mt-10" />
            </div>
          </div>
        </div>

        {/* fourth grid */}
        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img
              src="images/grid3.png"
              alt="grid-3"
              className="w-full sm:h-[266px] h-fit object-contain"
            />

            <div>
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext">
                I love solving problems and building things through code.
                Programming isn&apos;t just my profession—it&apos;s my passion.
                I enjoy exploring new technologies, and enhancing my skills.
              </p>
            </div>
          </div>
        </div>

        {/* fifth grade */}
        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="images/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img
                  src={hasCopied ? "/images/tick.svg" : "/images/copy.svg"}
                  alt=""
                />
                {/* <img src={hasCopied ? 'images/tick.svg' : 'images/copy.svg'} alt="copy" /> */}
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">
                  jackvijay1108@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
