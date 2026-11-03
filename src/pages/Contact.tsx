const Contact = () => {
  return (
    <main className="h-dvh w-full px-5 md:px-10">
        <div className="h-full grid grid-cols-1 md:grid-cols-2 pt-[35%] md:pt-[20%] items-start">
            <div>
                <div>
                    <p>Reach Out</p>
                    <div className="pt-3 md:pt-5 flex flex-col items-start gap-2 md:gap-3">
                        <a href="/" className="font-heading text-2xl md:text-5xl">Loye@leshistudio.com</a>
                        <a href="/" className="font-heading text-2xl md:text-5xl">+234 123 456 789</a>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <p>Social</p>
                    <div className="pt-3 md:pt-5 flex flex-col items-start gap-2 md:gap-3">
                        <a href="/" className="font-heading text-2xl md:text-5xl">Facebook</a>
                        <a href="/" className="font-heading text-2xl md:text-5xl">Instagram</a>
                        <a href="/" className="font-heading text-2xl md:text-5xl">Newsletter</a>
                    </div>
                </div>
                <div className="mt-5 flex flex-col items-start gap-3 md:gap-5">
                    <p>Location</p>
                    <a href="/" className="font-heading text-2xl md:text-5xl">321 Agungi, Lekki Lagos, Nigeria.</a>
                </div>
            </div>
        </div>
    </main>
  )
}
export default Contact