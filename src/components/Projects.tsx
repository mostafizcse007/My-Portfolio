import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Github, ExternalLink, Folder } from "lucide-react";
import { projects } from "@/constants";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Featured projects (first 2)
  const featuredProjects = projects.slice(0, 2);
  // Other projects
  const otherProjects = projects.slice(2);

  return (
    <section id="projects" className="py-24 lg:py-32" ref={ref}>
      <div className="container mx-auto px-6 lg:px-24">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="section-heading"
        >
          <span className="numbered-heading">03.</span>
          Some Things I've Built
        </motion.h2>

        {/* Featured Projects */}
        <div className="space-y-24 mb-24">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative grid lg:grid-cols-12 gap-4 items-center ${
                index % 2 === 1 ? "lg:text-right" : ""
              }`}
            >
              {/* Project Image */}
              <div
                className={`lg:col-span-7 relative rounded overflow-hidden bg-primary/10 aspect-video ${
                  index % 2 === 1 ? "lg:order-2 lg:col-start-6" : "lg:col-start-1"
                }`}
              >
                <div className="absolute inset-0 bg-primary/20 hover:bg-transparent transition-colors duration-300 z-10" />
                <div className="w-full h-full bg-card flex items-center justify-center">
                  <Folder size={80} className="text-primary/30" />
                </div>
              </div>

              {/* Project Content */}
              <div
                className={`lg:col-span-6 lg:absolute lg:top-1/2 lg:-translate-y-1/2 z-20 ${
                  index % 2 === 1 ? "lg:left-0 lg:text-left" : "lg:right-0 lg:text-right"
                }`}
              >
                <p className="font-mono text-primary text-sm mb-2">Featured Project</p>
                <h3 className="text-2xl font-semibold text-foreground mb-4 hover:text-primary transition-colors">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    {project.title}
                  </a>
                </h3>
                <div className="bg-card p-6 rounded shadow-card mb-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <ul className={`flex flex-wrap gap-3 font-mono text-xs text-muted-foreground mb-4 ${
                  index % 2 === 1 ? "lg:justify-start" : "lg:justify-end"
                }`}>
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
                <div className={`flex gap-4 ${index % 2 === 1 ? "lg:justify-start" : "lg:justify-end"}`}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-2xl font-semibold text-center mb-12"
        >
          Other Noteworthy Projects
        </motion.h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {otherProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              className="project-card group flex flex-col h-[280px]"
            >
              <div className="flex items-center justify-between mb-6">
                <Folder size={40} className="text-primary" />
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>

              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  {project.title}
                </a>
              </h3>

              <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
                {project.description}
              </p>

              <ul className="flex flex-wrap gap-2 tech-tag mt-auto">
                {project.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
