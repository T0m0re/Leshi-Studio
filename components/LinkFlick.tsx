import * as motion from "motion/react-client"
import { cn } from "../lib/utils"

const DURATION = 0.15;
const STAGGER = 0.15;
const LinkFlick = ({children, handleNav, className} : {children : string, handleNav?: () => void, className?: string}) => {
  return (
    <motion.div
    initial = "initial"
    whileHover="hovered"
    className={cn("relative block overflow-hidden whitespace-nowrap text-black uppercase cursor-pointer", className)}
    onClick={handleNav}>
        <div>{children.split("").map((l, i) => {
            return <motion.span
            variants={{
                initial: {
                    y : 0
                },
                hovered: {
                    y : "-100%"
                }
            }}
            transition={{
                duration: DURATION,
                ease: "easeInOut",
                delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}>{l}</motion.span>
        })}</div>
        <div className="absolute inset-0">{children.split("").map((l, i) => {
            return <motion.span
            variants={{
                initial: {
                    y : "100%"
                },
                hovered: {
                    y : 0
                }
            }}
           transition={{
                duration: DURATION,
                ease: "easeInOut",
                delay: STAGGER * i,
            }}
            className="inline-block"

            key={i}>{l}</motion.span>
        })}</div>
    </motion.div>
  )
}
export default LinkFlick