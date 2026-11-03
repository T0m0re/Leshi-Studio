import SplitText from "./SplitText"


const Footer = () => {
  return (
    <footer className="sticky top-0 py-10 min-h-[50dvh] w-full px-5 md:px-10 bg-white flex items-center justify-between">
        <div className="w-full flex flex-col md:flex-row items-start justify-between gap-4">
            <div>
                <p>Location</p>
                <div className="pt-3 md:pt-5 flex flex-col items-start gap-2 md:gap-3">
                    <a href="/" className="font-heading text-2xl md:text-3xl">321 Agungi, Lekki Lagos, Nigeria</a>
                </div>
            </div>
            <div className="">
                <SplitText text="Let’s make something together." className="font-heading text-4xl md:text-7xl lg:w-2/3"/>
                <a href="/" className="inline-flex items-center mt-5">
                    <span className="underline text-xl md:text-3xl capitalize">bonjour@leshistudio.com</span>
                    <span className="text-xs md:text-base font-heading text-black/60">send a mail</span>
                </a>
            </div>
        </div>
    </footer>
  )
}
export default Footer