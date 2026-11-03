import SplitText from "../../components/SplitText"
import SplitTextLine from "../../components/SplitTextLine"

const awards = [
    "Best Commercial Photography Studio",
    "Creative Studio of the Year *2",
    "Excellence in Product Photography",
    "Outstanding Visual Storytelling",
    "Emerging Creative Brand Award"
]

const clients = [
    "Orange Culture",
    "Zaron Cosmetics",
    "L'Oréal Paris",
    "Dyson",
    "Nike"
]
const Info = () => {
  return (
    <main className="h-dvh w-full px-5 md:px-10">
        <div className="pt-[25%] md:pt-[10%] pb-[2%] flex flex-col items-stretch justify-between h-full gap-4">
            <SplitTextLine 
            text="A creative photography studio based in Lekki, specializing in product photography, portraits, lifestyle shoots, fashion photography, and creative visual content. We work with brands, businesses, and individuals to create high-quality images that tell stories, showcase products, and capture unique moments. Whether you need professional product shots for your online store, creative campaign visuals, or stunning portraits, our studio provides a space where ideas come to life through creativity, attention to detail, and exceptional photography."
            className="font-heading text-justify text-2xl md:text-4xl max-sm:leading-6"
            stagger={0.2}/>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                <div>
                    <img src="/cosmos_1.webp" width={400} height={500} className="self-start w-full md:w-55"/>
                </div>

                <div>
                    <p className="">Clients</p>
                    <div className="flex flex-col items-start  gap-1 md:gap-2 font-heading text-lg md:text-2xl mt-2 md:mt-3">
                        {clients.map ((client) => {
                            return(
                                <SplitText text={client} />
                            )
                        })}
                    </div>
                </div>
                <div>
                    <p>Awards & Recognitions</p>

                    <div className="flex flex-col items-start  gap-1 md:gap-2 font-heading text-lg md:text-2xl mt-2 md:mt-3">
                        {awards.map((award) => {
                            return(
                                <SplitText text={award} />
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    </main>
  )
}
export default Info