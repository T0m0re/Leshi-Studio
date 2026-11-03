const Credit = () => {
  return (
    <main className="h-dvh w-full px-5 md:px-10">
        <div className="w-full h-full flex flex-col items-center justify-center gap-20">
            <div className="flex flex-col items-center justify-center gap-2">
                <p className="font-light">Design & Developed by</p>
                <a href="https://www.linkedin.com/in/hassan-abdulwahab-31ab0a219/" target="blank" className="font-heading inline-block text-4xl underline">Hassan Abdulwahab</a>
            </div>

            <div className="flex flex-col items-center justify-center gap-2">
                <p className="font-light">Source</p>
                <p  className="font-heading inline-block text-4xl">Cosmos</p>
            </div>

           <a href="https://www.linkedin.com/in/hassan-abdulwahab-31ab0a219/" target="blank" className="font-heading inline-block text-4xl underline">Request for removal</a>
        </div>
    </main>
  )
}
export default Credit