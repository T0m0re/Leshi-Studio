import * as motion from "motion/react-client"
import LinkFlick from "./LinkFlick"
import { useState } from "react";
import { useMotionValue } from "motion/react";

const DRAGG_BUFFER = 50

const Carousel = ({pictures, setIsCarouselVisible, currentIndex, setCurrentIndex} : {pictures: string[]; setIsCarouselVisible: (visible: boolean) => void; currentIndex : number; setCurrentIndex: (value: number | ((prev: number) => number)) => void}) => {
  const [dragging, setDragging] = useState(false)
  const dragX = useMotionValue(0)

  const onDragStart = () => {
    setDragging(true)
  
  }

  const onDragEnd = () => {
    setDragging(false)

    const x = dragX.get();

    if(x <= -DRAGG_BUFFER && currentIndex < pictures.length - 1) {
        setCurrentIndex((prev : number) => prev + 1);
    } else if (x >= DRAGG_BUFFER && currentIndex > 0){
        setCurrentIndex((prev : number) => prev - 1)
    }
  }
    return (
    <main className="absolute inset-0 z-100">
        <div className="relative w-full h-dvh overflow-hidden bg-neutral-100 flex flex-col justify-between gap-5 py-10">
            <div className="w-full flex items-center justify-between px-4">
                <LinkFlick children="CLOSE" className="" handleNav={() => setIsCarouselVisible(false)}/>
                <p className="text-2xl text-bold flex items-center gap-1">
                    <span>{currentIndex + 1}</span>
                    /
                    <span>{pictures.length}</span>
                </p>
            </div>

            <motion.div 
                drag="x"
                dragConstraints={{
                    left: 0,
                    right: 0
                }}
                style={{
                    x: dragX
                }}
                animate={{
                    translateX: `-${currentIndex * 100}%`,
                }}
                transition={{
                    type: "spring",
                    mass: 3,
                    stiffness: 400,
                    damping: 50
                }}
                onDragStart={onDragStart}
                onDragEnd={onDragEnd}
                className="flex items-center w-full h-full pb-5">
                    <Images pictures ={pictures}/>
            </motion.div>
        </div>
        
    </main>
  )
}

const Images = ({pictures} : {pictures : string[]}) => {
    return (
        <>
            {pictures.map((imgSrc, index) => {
                return (
                    <div className="h-full w-full shrink-0 flex items-center justify-center">
                        <img 
                        key={index} 
                        src={imgSrc} 
                        draggable={false} 
                        className="w-full max-w-fit h-full max-h-fit object-cover"/>
                    </div>
                )
            })}
        </>
    )
}
export default Carousel