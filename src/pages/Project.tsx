import * as motion from "motion/react-client"

import { useParams } from "react-router"
import data from "../data/data.json"
import SplitText from "../../components/SplitText"
import { useState } from "react"
import Carousel from "../../components/Carousel"


const Project = () => {
    const {projectId} = useParams()
    const [isCarouselVisible, setIsCarouselVisible] = useState(false)
    const [currentIndex, setCurrentIndex] = useState(0)

    if(!projectId){return}

    const project = data.projects.find(({ id }) => id === Number(projectId))

    if (!project) {
        return <main>Project not found.</main>
    }

    const imageClick = (index: number) =>{
         setCurrentIndex(index + 1)
        setIsCarouselVisible(true)
    }

  return (
    <main className="min-h-dvh w-full p-5 md:px-10">
       
    {!isCarouselVisible && <>
        <div className="flex flex-col items-start md:flex-row md:items-baseline-last justify-between gap-4 md:gap-8 pt-[30%] md:pt-[20%] lg:pt-[10%]">
            <div>
                <SplitText text={project.name} className="font-heading text-5xl"/>

                    
                <p className="text-xl capitalize text-justify">{project.description}</p>
            </div>
        

            <img src={project.pictures[0]} alt={project.name} width={500} height={700} className="md:w-2/5 w-full"/>
            
        </div> 

        <div className="grid grid-cols-6 gap-1 md:gap-4 mt-10 [&>*:is(:nth-child(4n+1),:nth-child(4n+4))]:col-span-4 [&>:is(:nth-child(4n+2),:nth-child(4n+3))]:col-span-2">
            {project.pictures.slice(1).map((picture, i) => {
                return (
                    <div key={i}  className={`h-40 md:h-[70dvh] overflow-hidden cursor-pointer`} 
                    onClick={()=>imageClick(i)}>
                        <motion.img
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ amount: 0.4, once: true }}
                        src={picture} loading="lazy" className="h-full  w-full object-cover transition-all hover:scale-110"/>
                    </div>)
            })}
        </div>
       </>
       }
        

        {isCarouselVisible && 
        <Carousel pictures={project.pictures} 
        setIsCarouselVisible={setIsCarouselVisible} 
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
        />}
    </main>
  )
}
export default Project