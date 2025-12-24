import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { personalInfo } from "@/constants";
import FloatingCodeElements from "./FloatingCodeElements";

const taglines = [
  "I build intelligent solutions.",
  "I solve complex problems.",
  "I create ML models.",
  "I love algorithms.",
  "I write clean code.",
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const currentTagline = taglines[currentIndex];
    
    if (isTyping) {
      if (displayedText.length < currentTagline.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(currentTagline.slice(0, displayedText.length + 1));
        }, 80);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      if (displayedText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, 40);
        return () => clearTimeout(timeout);
      } else {
        setCurrentIndex((prev) => (prev + 1) % taglines.length);
        setIsTyping(true);
      }
    }
  }, [displayedText, isTyping, currentIndex]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-28 md:pt-20">
      <FloatingCodeElements />
      <div className="container mx-auto px-6 lg:px-24 relative z-10">
        <div className="max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-mono text-primary mb-5 text-sm md:text-base"
          >
            Hi, my name is
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4"
          >
            Mostafizur Rahman
            <br />
            <span className="text-primary">Antu</span>.
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-muted-foreground mb-6 min-h-[2.5em] sm:min-h-[1.2em]"
          >
            {displayedText}
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="text-primary"
            >
              |
            </motion.span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-muted-foreground max-w-xl text-base md:text-lg leading-relaxed mb-12"
          >
            I'm an {personalInfo.title} specializing in machine learning, algorithms, 
            and building exceptional digital experiences. Currently focused on developing 
            AI-powered solutions and solving complex problems through code.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="px-7 py-4 border border-primary text-primary rounded font-mono text-sm hover:bg-primary/10 transition-colors"
            >
              Check out my work!
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-4 border border-primary text-primary rounded font-mono text-sm hover:bg-primary/10 transition-colors"
            >
              Resume
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;