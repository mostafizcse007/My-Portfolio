import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Github, Folder } from "lucide-react";
import { projects } from "@/constants";
const categories = [{
  id: "all",
  name: "All Projects"
}, {
  id: "ml",
  name: "Machine Learning"
}, {
  id: "web",
  name: "Web Development"
}, {
  id: "dsa",
  name: "DSA"
}];
const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });
  const filteredProjects = activeCategory === "all" ? projects : projects.filter(p => p.category === activeCategory);
  return <section id="projects" className="py-32 relative" ref={ref}>
      {/* Background Accent */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

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
          <span className="text-primary font-body text-sm tracking-widest uppercase">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-body text-lg leading-relaxed">
            A collection of projects showcasing my expertise in machine learning, 
            software development, and algorithmic problem-solving.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {}} transition={{
        duration: 0.5,
        delay: 0.2
      }} className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(category => {})}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => <motion.div key={project.id} initial={{
          opacity: 0,
          y: 50
        }} animate={isInView ? {
          opacity: 1,
          y: 0
        } : {}} transition={{
          duration: 0.5,
          delay: 0.1 + index * 0.1
        }} whileHover={{
          y: -10
        }} className="group glass rounded-2xl overflow-hidden hover:shadow-card-hover transition-all duration-300">
              {/* Project Header with Icon */}
              <div className="h-48 bg-gradient-card relative flex items-center justify-center">
                <div className="w-20 h-20 rounded-2xl bg-secondary flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                  <Folder size={40} />
                </div>
                
                {/* Overlay Links */}
                <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <motion.a href={project.github} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center" whileHover={{
                scale: 1.1
              }} whileTap={{
                scale: 0.95
              }}>
                    <Github size={20} />
                  </motion.a>
                  <motion.a href={project.github} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-secondary text-foreground flex items-center justify-center" whileHover={{
                scale: 1.1
              }} whileTap={{
                scale: 0.95
              }}>
                    <ExternalLink size={20} />
                  </motion.a>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-display font-semibold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => <span key={tag} className="px-3 py-1 bg-secondary text-primary text-xs font-body rounded-full">
                      {tag}
                    </span>)}
                </div>
              </div>
            </motion.div>)}
        </div>
      </div>
    </section>;
};
export default Projects;