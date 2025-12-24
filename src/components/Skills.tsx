import { motion } from "framer-motion";
import { Code2, Wrench } from "lucide-react";

const languages = [
  { name: "C", level: 85 },
  { name: "C++", level: 80 },
  { name: "Java", level: 75 },
  { name: "Python", level: 90 },
];

const tools = [
  { name: "VS Code", icon: "💻" },
  { name: "PyCharm", icon: "🐍" },
  { name: "Git & GitHub", icon: "🔀" },
  { name: "Docker", icon: "🐳" },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="numbered-heading flex items-center gap-2 text-2xl md:text-3xl font-semibold text-foreground mb-12">
          <span className="text-primary font-mono text-lg md:text-xl">02.</span>
          Skills & Tools
          <span className="hidden md:block h-px bg-muted-foreground/30 flex-1 ml-4" />
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Programming Languages */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <Code2 className="text-primary" size={24} />
              <h3 className="text-xl font-semibold text-foreground">Programming Languages</h3>
            </div>

            <div className="space-y-5">
              {languages.map((lang, index) => (
                <motion.div
                  key={lang.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  className="space-y-2"
                >
                  <div className="flex justify-between items-center">
                    <span className="font-mono text-muted-foreground">{lang.name}</span>
                    <span className="text-primary font-mono text-sm">{lang.level}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${lang.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
                      className="h-full bg-gradient-to-r from-primary to-primary/60 rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tools */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <Wrench className="text-primary" size={24} />
              <h3 className="text-xl font-semibold text-foreground">Tools & Technologies</h3>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {tools.map((tool, index) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="p-4 bg-card border border-border rounded-lg text-center hover:border-primary/50 transition-colors"
                >
                  <span className="text-3xl mb-2 block">{tool.icon}</span>
                  <span className="font-mono text-sm text-muted-foreground">{tool.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
