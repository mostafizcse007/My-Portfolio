import { motion } from "framer-motion";

const codeElements = [
  { symbol: "{}", x: "10%", y: "20%", delay: 0 },
  { symbol: "</>", x: "85%", y: "15%", delay: 0.5 },
  { symbol: "()", x: "75%", y: "70%", delay: 1 },
  { symbol: "[]", x: "15%", y: "75%", delay: 1.5 },
  { symbol: "//", x: "90%", y: "45%", delay: 2 },
  { symbol: "=>", x: "5%", y: "50%", delay: 2.5 },
  { symbol: "&&", x: "80%", y: "85%", delay: 3 },
  { symbol: "++", x: "25%", y: "10%", delay: 3.5 },
  { symbol: "!=", x: "70%", y: "30%", delay: 4 },
  { symbol: "::", x: "20%", y: "90%", delay: 4.5 },
];

const FloatingCodeElements = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {codeElements.map((element, index) => (
        <motion.span
          key={index}
          className="absolute font-mono text-primary/40 text-lg md:text-2xl select-none"
          style={{ left: element.x, top: element.y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0.2, 0.5, 0.2],
            scale: [0.8, 1.2, 0.8],
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 6,
            delay: element.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {element.symbol}
        </motion.span>
      ))}
    </div>
  );
};

export default FloatingCodeElements;
