import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Dot Grid Background Pattern */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-[0.4] dark:opacity-[0.15]"
        style={{
          backgroundImage: `radial-gradient(circle, hsl(var(--foreground) / 0.15) 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />
      
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Services />
        <Projects />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
