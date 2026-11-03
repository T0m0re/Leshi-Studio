import { forwardRef, useImperativeHandle, useRef } from "react"
import { animate } from "motion"

const PageTransition = forwardRef((_, ref) => {
    const containerRef = useRef(null)

    useImperativeHandle(ref, () => ({
        animateIn,
        animateOut
    }))

    const animateIn = () => {
        const container = containerRef.current
        if (!container) {
            return
        }

        return animate(container, { top: "0%" }, {
            duration: 0.6,
            ease: "easeInOut"
        }).finished

        
    }

    const animateOut = () => {
        const container = containerRef.current
     
        return animate(container, { top: "-100%" }, {
            duration: 0.6,
            ease: "easeInOut"
        }).finished
    }
  return (
    <div 
        ref={containerRef}
        className="fixed top-full w-screen h-screen z-50 pointer-events-none bg-black"
    >

    </div>
  )
})
export default PageTransition