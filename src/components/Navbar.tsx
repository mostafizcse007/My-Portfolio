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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const navItems = navLinks.filter(link => 
    ["About", "Services", "Projects", "Contact"].includes(link.name)
  );

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass py-3 sm:py-4 shadow-lg" : "py-4 sm:py-6 bg-background"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between">
        <motion.a
          href="#home"
          className="text-primary font-mono text-lg sm:text-xl font-bold"
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
              className="px-3 lg:px-4 py-2 text-muted-foreground hover:text-primary transition-colors font-mono text-xs lg:text-sm"
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
            className="ml-2 lg:ml-4 px-3 lg:px-4 py-2 border border-primary text-primary rounded font-mono text-xs lg:text-sm hover:bg-primary/10 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download CV
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-primary p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm md:hidden z-40"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Menu */}
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed top-0 right-0 w-4/5 max-w-sm h-[100dvh] bg-card shadow-2xl md:hidden z-50"
            >
              <div className="flex flex-col items-center justify-center h-full gap-6 p-8">
                <button
                  className="absolute top-4 right-4 text-foreground p-2"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
                
                {navItems.map((link, index) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-foreground hover:text-primary transition-colors font-mono text-lg"
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="text-primary block text-center text-sm mb-1">0{index + 1}.</span>
                    {link.name}
                  </a>
                ))}
                
                <div className="flex items-center gap-4 mt-4">
                  <ThemeToggle />
                </div>
                
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 border border-primary text-primary rounded font-mono text-sm mt-4"
                  onClick={() => setIsOpen(false)}
                >
                  Download CV
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;