"use client"

import { AnimatePresence, motion } from "framer-motion"
import Navbar from "./Navbar";
import { usePathname } from "next/navigation";

const TransitionProvider = ({ children }: {children:React.ReactNode;}) => {
  const pathname = usePathname();
  
  return (
    <AnimatePresence mode="wait">
      <div key={pathname}>
        <motion.div className="h-screen w-screen fixed bg-black rounded-b-[100px] z-40" animate={{height:"0vh"}} exit={{height:"140vh"}} transition={{duration:0.5, ease:"easeOut"}}/>
        <motion.div className="fixed m-auto top-0 bottom-0 left-0 right-0 text-8xl max-md:text-4xl capitalize z-50 text-white w-fit h-fit" initial={{opacity: 1}} animate={{opacity:0}} exit={{opacity:0}} transition={{duration:0.8, ease:"easeOut"}}>{pathname.substring(1)}</motion.div>
        <motion.div className="h-screen w-screen fixed bottom-0 bg-black rounded-t-[100px] z-30" initial={{height:"140vh"}} animate={{height:"0vh", transition: {delay:0.5}}} transition={{duration:0.5, ease:"easeOut"}}/>
      </div>
      <Navbar />
      { children }
    </AnimatePresence>
  )
}

export default TransitionProvider;
