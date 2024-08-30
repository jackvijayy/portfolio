

const ShimmerButton = ({ title,icon,handleClick,className }:
  {
    title:string;
    icon?:React.ReactNode;
    className?:string;
    handleClick?:()=>void;
  }) => {
  return (
        <button  onClick={handleClick} className={`inline-flex gap-2  animate-shimmer items-center justify-center rounded-md border border-gray-700 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 text-xs text-slate-400 transition-colors focus:outline-none ${className}`} >
         <span>{title}</span>
         {icon}
        </button>

  )
}

export default ShimmerButton