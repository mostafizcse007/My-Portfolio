import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import profileImage from "@/assets/profile.jpg";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
    "Python",
    "C++",
    "TensorFlow",
    "PyTorch",
    "Scikit-learn",
    "Pandas",
    "NumPy",
    "OpenCV",
    "Git",
    "Docker",
  ];

  return (
    <section id="about" className="py-24 lg:py-32" ref={ref}>
      <div className="container mx-auto px-6 lg:px-24">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="section-heading"
        >
          <span className="numbered-heading">01.</span>
          About Me
        </motion.h2>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-3 space-y-4"
          >
            <p className="text-muted-foreground leading-relaxed">
              Hello! I'm Antu, a passionate developer with a deep interest in Machine Learning 
              and Artificial Intelligence. My journey in tech started with competitive programming, 
              which honed my problem-solving skills and algorithmic thinking.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I specialize in building intelligent systems that can learn and adapt, combining 
              theoretical knowledge with practical implementation skills. I've solved 1000+ 
              problems on platforms like Codeforces and LeetCode.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Currently, I'm focused on developing AI-powered solutions and contributing to 
              open-source projects that make a real-world impact.
            </p>

            <p className="text-muted-foreground leading-relaxed pt-4">
              Here are a few technologies I've been working with recently:
            </p>

            <ul className="grid grid-cols-2 gap-2 pt-2">
              {skills.map((skill) => (
                <li key={skill} className="flex items-center gap-2 font-mono text-sm text-muted-foreground">
                  <span className="text-primary">▹</span>
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2 flex justify-center lg:justify-end lg:pl-8"
          >
            <div className="relative group">
              <div className="relative w-64 h-64 md:w-72 md:h-72">
                <img
                  src={profileImage}
                  alt="Profile"
                  className="rounded w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                />
                <div className="absolute inset-0 border-2 border-primary rounded translate-x-4 translate-y-4 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;