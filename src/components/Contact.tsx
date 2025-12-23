import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { personalInfo } from "@/constants";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 lg:py-32" ref={ref}>
      <div className="container mx-auto px-6 lg:px-24">
        <div className="max-w-2xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="font-mono text-primary text-sm mb-4"
          >
            <span className="numbered-heading">04.</span> What's Next?
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-foreground mb-6"
          >
            Get In Touch
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground leading-relaxed mb-12"
          >
            I'm currently looking for new opportunities and my inbox is always open. 
            Whether you have a question, want to collaborate on a project, or just want 
            to say hi, I'll try my best to get back to you!
          </motion.p>

          <motion.a
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            href={`mailto:${personalInfo.email}`}
            className="inline-block px-8 py-4 border border-primary text-primary rounded font-mono text-sm hover:bg-primary/10 transition-colors"
          >
            Say Hello
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Contact;