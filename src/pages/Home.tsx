
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import data from "../data/data.json"

export default function Home({handleNav}: {handleNav: (path: string) => void}) {
  return (
    <>
    <main className='min-h-dvh w-full '>
      {data.projects.map((project) => {
        return <Hero key={project.id} project={project} handleNav={handleNav}/>;
      })}
      <Footer/>
    </main>
    </>
  );
}