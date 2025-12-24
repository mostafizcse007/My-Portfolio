import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/constants";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = navLinks.filter(link => 
    ["About", "Services", "Projects", "Contact"].includes(link.name)
  );

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass py-4 shadow-lg" : "py-6 bg-background"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">
        <motion.a
          href="#home"
          className="text-primary font-mono text-xl font-bold"
          whileHover={{ scale: 1.05 }}
        >
          Hello World!
        </motion.a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              className="px-4 py-2 text-muted-foreground hover:text-primary transition-colors font-mono text-sm"
              whileHover={{ y: -2 }}
            >
              <span className="text-primary">0{index + 1}. </span>
              {link.name}
            </motion.a>
          ))}
          <ThemeToggle />
          <motion.a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 px-4 py-2 border border-primary text-primary rounded font-mono text-sm hover:bg-primary/10 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download CV
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-primary"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 w-1/2 max-w-[200px] h-screen bg-card shadow-2xl md:hidden z-50"
          >
            <div className="flex flex-col items-center justify-center h-full gap-4 p-6">
              <button
                className="absolute top-6 right-6 text-foreground"
                onClick={() => setIsOpen(false)}
              >
                <X size={24} />
              </button>
              
              {navItems.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="text-foreground hover:text-primary transition-colors font-mono text-lg"
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + index * 0.1, duration: 0.3 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-primary block text-center text-sm mb-1">0{index + 1}.</span>
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;