"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "./Ui/Canvas-reveal-effect";
import {  ArrowDownRight } from "lucide-react";
import GradualSpacing from "./Ui/GradualSpacing";


export function ApprochSection() {
  return (
    <>
         <GradualSpacing
      className="font-display mb-[2.5rem] text-center text-5xl lg:text-6xl font-bold tracking-[-0.1em] text-purple-500 "
      text="My Approach"
    />
      <div className=" grid grid-cols-2 lg:grid-cols-4  w-full gap-8 lg:gap-10 mx-auto px-8">
        <Card title="Problem Solving" icon={<ArrowDownRight  size={50} color="green"/>} des="resolving problem">
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black"
            dotSize={2}
          />
        </Card>
        <Card title="Time management" icon={<ArrowDownRight size={50} color="yellow"/>} des="Proactive Planning">
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black"
            dotSize={2}
            colors={[
              [245, 241, 23]
            ]}
          />
        </Card>
        <Card title="Creative Thinking" icon={<ArrowDownRight size={50} color="purple"/>} des="Turning Imagination into Reality">
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black"
            colors={[
              [236, 72, 153],
              [232, 121, 249],
            ]}
            dotSize={2}
          />
          {/* Radial gradient for the cute fade */}
          <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
        </Card>
        <Card title=" Effective collabrative" icon={<ArrowDownRight size={50} color="blue"/>} des="Bridging ideas and Execution">
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black"
            colors={[
             [136, 249, 121],
             [138, 249, 121]
            ]}
            dotSize={2}
          />
        </Card>
      </div>
    </>
  );
}

const Card = ({
  title,
  des,
  icon,
  children,
}: {
  title: string;
  des:string;
  icon: React.ReactNode;
  children?: React.ReactNode;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-gray-700 group/canvas-card flex items-center justify-center  max-w-[30rem] mx-auto p-4 relative h-[60vh] lg:h-[60vh] "
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 text-gray-100" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-gray-100" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 text-gray-100" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-gray-100" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        <div className="text-center opacity-100 group-hover/canvas-card:hidden">
          Hover
        

        </div>
        <div className="text-center mt-4 group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h2 className="dark:text-white text-xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {title}
        </h2>
        <p className=" text-[11px] text-center opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-gray-white mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200 ">
          {des}
        </p>
      </div>
    </div>
  );
};

// const AceternityIcon = () => {
//   return (
//     <svg
//       width="66"
//       height="65"
//       viewBox="0 0 66 65"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//       className="h-5 w-5  text-white group-hover/canvas-card:text-white mt-5 "
//     >
//       <path
//         d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
//         stroke="currentColor"
//         strokeWidth="5"
//         strokeMiterlimit="3.86874"
//         strokeLinecap="round"
//         style={{ mixBlendMode: "darken" }}
//       />
//     </svg>
//   );
// };

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
