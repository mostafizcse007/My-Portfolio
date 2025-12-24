import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Github, ExternalLink, Folder } from "lucide-react";
import { projects } from "@/constants";

// Import project images
import studentManagement from "@/assets/projects/student-management.jpg";
import krishiseba from "@/assets/projects/krishiseba.jpg";
import machineLearning from "@/assets/projects/machine-learning.jpg";
import dsaCpp from "@/assets/projects/dsa-cpp.jpg";
import pythonMl from "@/assets/projects/python-ml.jpg";
import basicC from "@/assets/projects/basic-c.jpg";

const projectImages: Record<number, string> = {
  1: studentManagement,
  2: krishiseba,
  3: machineLearning,
  4: dsaCpp,
  5: pythonMl,
  6: basicC,
};

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
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="project-card group flex flex-col overflow-hidden border-2 border-primary/20 cursor-pointer hover:border-primary/50 hover:shadow-glow transition-all duration-300"
            >
              {/* Project Thumbnail */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={projectImages[project.id]}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-card/40 to-transparent" />
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className="font-mono text-primary text-xs bg-primary/20 backdrop-blur-sm px-2 py-1 rounded">Featured</span>
                </div>
                <div className="absolute top-3 right-3 flex gap-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-background/80 backdrop-blur-sm rounded-full text-muted-foreground hover:text-primary hover:bg-background transition-colors"
                  >
                    <Github size={18} />
                  </a>
                </div>
              </div>

              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    {project.title}
                  </a>
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2 flex-grow">
                  {project.description}
                </p>

                <ul className="flex flex-wrap gap-2 tech-tag mt-auto">
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {otherProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="project-card group flex flex-col overflow-hidden cursor-pointer hover:border-primary/30 hover:shadow-glow transition-all duration-300"
            >
              {/* Project Thumbnail */}
              <div className="relative h-36 overflow-hidden">
                <img
                  src={projectImages[project.id]}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-card/40 to-transparent" />
                <div className="absolute top-3 right-3 flex gap-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-background/80 backdrop-blur-sm rounded-full text-muted-foreground hover:text-primary hover:bg-background transition-colors"
                  >
                    <Github size={16} />
                  </a>
                </div>
              </div>

              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-base font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    {project.title}
                  </a>
                </h3>

                <p className="text-muted-foreground text-xs leading-relaxed mb-4 line-clamp-2 flex-grow">
                  {project.description}
                </p>

                <ul className="flex flex-wrap gap-1.5 tech-tag mt-auto text-xs">
                  {project.tags.slice(0, 3).map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
