import { motion, type Variants } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  className?: string;
}

const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.05,
      staggerChildren: 0.008,
    },
  },
};

const character: Variants = {
  hidden: { opacity: 0.2 },
  visible: {
    opacity: 1,
    transition: { duration: 0.35, ease: "easeOut" },
  },
};

export default function AnimatedText({ text, className }: AnimatedTextProps) {
  return (
    <motion.p
      className={className}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          variants={character}
          className="inline-block whitespace-pre"
        >
          {char}
        </motion.span>
      ))}
    </motion.p>
  );
}
