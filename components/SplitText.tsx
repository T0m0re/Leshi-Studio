import { motion, type Variants } from "motion/react";

export default function SplitText({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  const words = text.split(" ");

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const child: Variants = {
    hidden: {
      y: "100%",
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      className={className}
      aria-label={text}
    >
      {words.map((word: string, index: number) => (
        <span
          key={index}
          className="inline-block overflow-hidden mr-[0.25em]"
          aria-hidden="true"
        >
          <motion.span
            variants={child}
            className="inline-block"
          >
            {word}
          </motion.span>
        </span>
      ))}
    </motion.div>
  );
}
