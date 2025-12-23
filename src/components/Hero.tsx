import { motion } from "framer-motion";
import { personalInfo } from "@/constants";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen min-h-[100dvh] flex items-center justify-center relative pt-16 sm:pt-20 px-4 sm:px-6">
      <div className="container mx-auto lg:px-24">
        <div className="max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-mono text-primary mb-3 sm:mb-5 text-xs sm:text-sm md:text-base"
          >
            Hi, my name is
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-2 sm:mb-4 leading-tight"
          >
            Mostafizur Rahman
            <br />
            <span className="text-primary">Antu</span>.
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-muted-foreground mb-4 sm:mb-6 leading-tight"
          >
            I build intelligent solutions.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-muted-foreground max-w-xl text-sm sm:text-base md:text-lg leading-relaxed mb-8 sm:mb-12"
          >
            I'm an {personalInfo.title} specializing in machine learning, algorithms, 
            and building exceptional digital experiences. Currently focused on developing 
            AI-powered solutions and solving complex problems through code.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col xs:flex-row flex-wrap gap-3 sm:gap-4"
          >
            <a
              href="#projects"
              className="px-5 sm:px-7 py-3 sm:py-4 border border-primary text-primary rounded font-mono text-xs sm:text-sm hover:bg-primary/10 transition-colors text-center"
            >
              Check out my work!
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 sm:px-7 py-3 sm:py-4 border border-primary text-primary rounded font-mono text-xs sm:text-sm hover:bg-primary/10 transition-colors text-center"
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