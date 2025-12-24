import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState(0);

  const experiences = [
    {
      company: "Machine Learning",
      title: "ML Model Training",
      description: [
        "Building and training custom machine learning models tailored to specific needs",
        "Working with TensorFlow, PyTorch, and Scikit-learn for various ML applications",
        "Implementing deep learning architectures for computer vision and NLP tasks",
        "Optimizing model performance through hyperparameter tuning and feature engineering",
      ],
    },
    {
      company: "Problem Solving",
      title: "Competitive Programming",
      description: [
        "Solved 1000+ problems on competitive programming platforms",
        "Expert in algorithms and data structures implementation in C++",
        "Regular participant in Codeforces and LeetCode contests",
        "Strong foundation in dynamic programming, graph algorithms, and optimization",
      ],
    },
    {
      company: "Mentoring",
      title: "Project Guidance",
      description: [
        "Helping students and developers understand complex concepts",
        "Guiding through project architecture and implementation",
        "Code review and best practices mentorship",
        "Career guidance in tech and AI/ML domains",
      ],
    },
  ];

  return (
    <section id="services" className="py-24 lg:py-32" ref={ref}>
      <div className="container mx-auto px-6 lg:px-24">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="section-heading max-w-2xl"
        >
          <span className="numbered-heading">03.</span>
          What I Do
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col md:flex-row gap-8"
        >
          {/* Tabs */}
          <div className="flex md:flex-col overflow-x-auto md:overflow-x-visible border-b md:border-b-0 md:border-l border-muted">
            {experiences.map((exp, index) => (
              <button
                key={exp.company}
                onClick={() => setActiveTab(index)}
                className={`px-5 py-3 font-mono text-sm whitespace-nowrap text-left transition-colors relative ${
                  activeTab === index
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                }`}
              >
                {activeTab === index && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute left-0 top-0 bottom-0 w-0.5 md:w-0.5 bg-primary"
                  />
                )}
                {exp.company}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="min-h-[300px] flex-1">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-semibold text-foreground mb-1">
                {experiences[activeTab].title}
                <span className="text-primary"> @ {experiences[activeTab].company}</span>
              </h3>
              <ul className="mt-6 space-y-4">
                {experiences[activeTab].description.map((item, index) => (
                  <li key={index} className="flex gap-3 text-muted-foreground text-sm leading-relaxed">
                    <span className="text-primary mt-1.5">▹</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;