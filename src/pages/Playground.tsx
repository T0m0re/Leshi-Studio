import * as motion from "motion/react-client"
import { Button } from "../../components/ui/button";
import { Link } from "react-router";
import { useState } from "react";

import ArtStage from "../../components/playground/ArtStage"



export default function Playground() {
  const [isOpen, setIsOpen] = useState(true);

  const sidebarVariants = {
    open: {
      width: "280px",
      border: "1px solid #000",
      alignSelf: "stretch",
      transition: { duration: 0.3, ease: "easeInOut" as const },
    },
    closed: {
      alignSelf: "start",
      width: "fit-content",
      border: "none",
      transition: { duration: 0.3, ease: "easeInOut" as const },

    },
  };
  return (
    <main className="grid h-dvh w-full min-h-0 grid-rows-[60px_minmax(0,1fr)] gap-2 overflow-hidden bg-gray-200/80 p-2 text-black">
      
      <header className="flex items-center justify-between w-full rounded border border-black p-2 py-4">
        <div className="flex items-center gap-2">
          <Link to="/">H</Link>
          <h2 className="font-heading text-xl">Art Playground</h2>
        </div>
        <Button type="button">Export</Button>
      </header>

      <div className="flex min-h-0 min-w-0 gap-2">
        <motion.div 
          animate={isOpen ? "open" : "closed"}
          variants={sidebarVariants}
          className="rounded p-2 flex flex-col items-start gap-4">
        <div className="w-full flex items-center justify-end">
          <button onClick={()=>setIsOpen(!isOpen)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 48 48">
                <path d="M0 0h48v48H0z" fill="none" />
                <path fill="currentColor" d="M43 10a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v28a3 3 0 0 0 3 3h32a3 3 0 0 0 3-3zm2 28a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V10a5 5 0 0 1 5-5h32a5 5 0 0 1 5 5z" />
                <path fill="currentColor" d="M17 6v36h-2V6z" />
              </svg>
          </button>
          

        </div>
        <div></div>
      </motion.div>
    <section className="min-h-0 min-w-0 flex-1 overflow-hidden rounded border border-black">

      <ArtStage/>

    </section>
      
      </div>
      
    
    </main>
  );
}