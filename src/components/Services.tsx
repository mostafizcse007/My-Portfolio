import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Puzzle, Globe, Users } from "lucide-react";
import { services } from "@/constants";
const iconMap: Record<string, React.ReactNode> = {
  brain: <Brain size={32} />,
  puzzle: <Puzzle size={32} />,
  globe: <Globe size={32} />,
  users: <Users size={32} />
};
const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });
  return <section id="services" className="py-32 relative" ref={ref}>
      {/* Background Accent */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl -translate-y-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div initial={{
        opacity: 0,
        y: 50
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {}} transition={{
        duration: 0.6
      }} className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-secondary border border-border font-mono text-xs text-primary">
            {"// services.config"}
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6">
            Services & <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-body text-lg leading-relaxed">
            Leveraging my skills in machine learning, algorithms, and software development 
            to deliver impactful solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => <motion.div key={service.title} initial={{
          opacity: 0,
          y: 50
        }} animate={isInView ? {
          opacity: 1,
          y: 0
        } : {}} transition={{
          duration: 0.5,
          delay: index * 0.1
        }} whileHover={{
          y: -10,
          transition: {
            duration: 0.2
          }
        }} className="group p-8 rounded-2xl transition-all duration-300 bg-card hover:scale-[1.02] hover:shadow-glow">
              <div className="w-16 h-16 rounded-xl bg-gradient-primary flex items-center justify-center text-primary-foreground mb-6 group-hover:shadow-glow transition-all duration-300">
                {iconMap[service.icon]}
              </div>
              <h3 className="text-xl font-display font-semibold mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>)}
        </div>
      </div>
    </section>;
};
export default Services;