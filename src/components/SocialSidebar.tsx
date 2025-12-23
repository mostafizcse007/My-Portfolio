import { motion } from "framer-motion";
import { Github, Linkedin, Code, Trophy, Braces } from "lucide-react";
import { socialLinks, personalInfo } from "@/constants";

const iconMap: Record<string, React.ReactNode> = {
  github: <Github size={20} />,
  linkedin: <Linkedin size={20} />,
  code: <Code size={20} />,
  codeforces: <Trophy size={20} />,
  leetcode: <Braces size={20} />,
};

const SocialSidebar = () => {
  return (
    <>
      {/* Left Side - Social Icons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="fixed left-6 lg:left-10 bottom-0 hidden lg:flex flex-col items-center gap-6 after:content-[''] after:w-px after:h-24 after:bg-muted-foreground/30"
      >
        {socialLinks.map((link) => (
          <motion.a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all"
            whileHover={{ y: -3 }}
          >
            {iconMap[link.icon]}
          </motion.a>
        ))}
      </motion.div>

      {/* Right Side - Email */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="fixed right-6 lg:right-10 bottom-0 hidden lg:flex flex-col items-center gap-6 after:content-[''] after:w-px after:h-24 after:bg-muted-foreground/30"
      >
        <a
          href={`mailto:${personalInfo.email}`}
          className="font-mono text-xs text-muted-foreground hover:text-primary transition-colors tracking-widest"
          style={{ writingMode: "vertical-rl" }}
        >
          {personalInfo.email}
        </a>
      </motion.div>
    </>
  );
};

export default SocialSidebar;