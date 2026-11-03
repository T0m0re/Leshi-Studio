import { useState } from "react";
import { AnimatePresence, motion, type Variants } from "motion/react";
import LinkFlick from "./LinkFlick"

const links = [
  {link : "/info", text: "Info"},
  {link : "/contact", text: "Contact"},
  {link : "/credit", text: "Credit"}
]

const menuVariants: Variants = {
  closed: {
    opacity: 0,
    y: -12,
    transition: {
      duration: 0.2,
      ease: "easeIn",
      when: "afterChildren",
      staggerChildren: 0.06,
      staggerDirection: -1,
    },
  },
  open: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.25,
      ease: "easeOut",
      when: "beforeChildren",
      delayChildren: 0.05,
      staggerChildren: 0.08,
    },
  },
}

const menuLinkVariants: Variants = {
  closed: { opacity: 0, y: 14 },
  open: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.25, ease: "easeOut" },
  },
}

const Header = ({handleNav}: {handleNav: (path: string) => void}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleLinkClick = (path: string) => {
    setIsMenuOpen(false)
    handleNav(path)
  }

  return (
    <header className="fixed top-5 left-0 right-0 z-20 flex items-center justify-between px-5 md:px-10 max-sm:backdrop-blur-sm">
      <span className="font-heading text-2xl md:text-4xl cursor-pointer" onClick={() => handleLinkClick("/")}>
        leshi Studio
      </span>

      <nav className="items-center gap-5 hidden md:flex">
        {links.map(({link, text}) => {
          return <LinkFlick key={text} handleNav={() => handleNav(link)}>{text}</LinkFlick>
        })}
      </nav>

      <div className="md:hidden ">
        <button
          type="button"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="flex items-center justify-center backdrop-blur-sm hover:scale-105"
        >
          <span className="relative flex flex-col justify-between">
            {!isMenuOpen ? <span>MENU</span> : <span>CLOSE</span>}
         
          </span>
        </button>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              key="mobile-menu"
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="absolute w-screen h-dvh left-0 top-full mt-3 flex flex-col items-start gap-6 border border-black/10 bg-white px-4 pt-15 shadow-lg backdrop-blur-sm"
            >
              {links.map(({link, text}) => (
                <motion.div key={text} variants={menuLinkVariants}>
                  <LinkFlick
                    className="text-2xl font-medium tracking-[0.24em] text-black"
                    handleNav={() => handleLinkClick(link)}
                  >
                    {text}
                  </LinkFlick>
                </motion.div>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
export default Header