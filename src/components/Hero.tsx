import { motion } from "framer-motion";
import { Github, Linkedin, Code, Trophy, Braces, Terminal } from "lucide-react";
import { personalInfo, socialLinks } from "@/constants";
import profileImage from "@/assets/profile.jpg";
import TypingAnimation from "./TypingAnimation";
const Hero = () => {
  const iconMap: Record<string, React.ReactNode> = {
    github: <Github size={20} />,
    linkedin: <Linkedin size={20} />,
    code: <Code size={20} />,
    codeforces: <Trophy size={20} />,
    leetcode: <Braces size={20} />
  };
  return <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse-slow" style={{
      animationDelay: "2s"
    }} />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
      backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
      backgroundSize: "60px 60px"
    }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Picture */}
          <motion.div initial={{
          opacity: 0,
          scale: 0.8
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 0.6
        }} className="mb-8">
            <div className="relative inline-block">
              <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl mx-auto">
                <img src={profileImage} alt="Mostafiz - ML Engineer" className="w-full h-full object-cover" />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-transparent pointer-events-none" />
            </div>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.1
        }} className="mb-6">
            <div className="inline-flex items-center gap-3 px-4 py-3 rounded-lg bg-secondary border border-border font-mono text-sm">
              <Terminal size={16} className="text-primary" />
              <span className="text-muted-foreground">guest@portfolio:~$</span>
              <TypingAnimation 
                texts={[
                  "python train_model.py",
                  "npm run dev",
                  "git push origin main",
                  "docker-compose up",
                  "./solve_problem --optimize"
                ]}
                typingSpeed={80}
                deletingSpeed={40}
                pauseDuration={2500}
                className="text-foreground"
              />
            </div>
          </motion.div>

          <motion.h1 initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.1
        }} className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight">
            Hi, I'm{" "}
            <span className="text-gradient">{personalInfo.name.split(" ").pop()}</span>
            <br />
            <span className="text-muted-foreground">{personalInfo.title}</span>
          </motion.h1>

          <motion.p initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.2
        }} className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 font-body leading-relaxed">
            {personalInfo.tagline}. {personalInfo.description}
          </motion.p>

          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.3
        }} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <motion.a href="#projects" className="px-8 py-4 bg-gradient-primary text-primary-foreground rounded-full font-mono text-sm font-medium flex items-center gap-2" whileHover={{
            scale: 1.05,
            boxShadow: "0 0 30px hsl(158 64% 40% / 0.4)"
          }} whileTap={{
            scale: 0.95
          }}>
              <Code size={18} />
              view_projects()
            </motion.a>
            <motion.a href="#contact" className="px-8 py-4 border border-border text-foreground rounded-full font-mono text-sm font-medium hover:bg-secondary transition-colors" whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }}>
              contact()
            </motion.a>
          </motion.div>

          <motion.div initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          duration: 0.6,
          delay: 0.4
        }} className="flex-row flex items-end justify-center gap-[17px] mx-0 px-0">
            {socialLinks.map(link => <motion.a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-all" whileHover={{
            scale: 1.1,
            y: -3
          }} whileTap={{
            scale: 0.95
          }} title={link.name}>
                {iconMap[link.icon]}
              </motion.a>)}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      delay: 1
    }} className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <motion.div animate={{
        y: [0, 10, 0]
      }} transition={{
        repeat: Infinity,
        duration: 2
      }} className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex items-start justify-center p-2">
          <motion.div className="w-1.5 h-1.5 bg-primary rounded-full" />
        </motion.div>
      </motion.div>
    </section>;
};
export default Hero;