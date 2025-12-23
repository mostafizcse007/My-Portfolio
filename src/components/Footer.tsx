import { Github, Linkedin, Code, Trophy, Braces } from "lucide-react";
import { socialLinks, personalInfo } from "@/constants";

const iconMap: Record<string, React.ReactNode> = {
  github: <Github size={20} />,
  linkedin: <Linkedin size={20} />,
  code: <Code size={20} />,
  codeforces: <Trophy size={20} />,
  leetcode: <Braces size={20} />,
};

const Footer = () => {
  return (
    <footer className="py-6">
      <div className="container mx-auto px-6">
        {/* Mobile Social Links */}
        <div className="flex justify-center gap-6 mb-6 lg:hidden">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              {iconMap[link.icon]}
            </a>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://github.com/mostafizcse007"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-muted-foreground hover:text-primary transition-colors"
          >
            Designed & Built by {personalInfo.name.split(" ").pop()}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;