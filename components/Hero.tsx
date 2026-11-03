import SplitText from "./SplitText"

const Hero = ({ project, handleNav }: 
  { project: { id: string | number, name: string, year: string, pictures: string[] },
    handleNav: (path: string) => void
}) => {
  if (!project) {
    return
  }
  return (
    <section className="sticky top-0 h-dvh w-full flex items-center justify-center">
      
      <img src={project.pictures[0]} className="h-full w-full object-cover mix-blend-difference"/>
      <div onClick={()=>handleNav(`project/${project.id}`)}
        className="absolute top-0 bottom-0 right-0 left-0 z-10 flex flex-col items-start justify-center p-[3%] cursor-pointer">
        <p className="text-[6vw] md:text-[2vw] text-bold">{project.year}</p>
        <SplitText text={project.name} className="font-heading  text-[20vw] md:text-[10vw] text-black uppercase mixed-blend-difference text-start"/>
      </div>
    </section>
  )
}
export default Hero