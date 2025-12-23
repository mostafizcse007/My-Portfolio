import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Code, Trophy, Braces } from "lucide-react";
import { personalInfo, socialLinks } from "@/constants";
import { toast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";
import { emailjsConfig } from "@/config/emailjs";

const iconMap: Record<string, React.ReactNode> = {
  github: <Github size={18} />,
  linkedin: <Linkedin size={18} />,
  code: <Code size={18} />,
  codeforces: <Trophy size={18} />,
  leetcode: <Braces size={18} />,
};

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const emailConfigured = emailjsConfig.serviceId !== "YOUR_SERVICE_ID";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({
        title: "Please fill all fields",
        description: "All fields are required to send a message.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    if (!emailConfigured) {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast({
        title: "Demo Mode",
        description: "EmailJS not configured. In production, your message would be sent!",
      });
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
      return;
    }

    try {
      await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: personalInfo.name,
        },
        emailjsConfig.publicKey
      );

      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast({
        title: "Failed to send",
        description: "Something went wrong. Please try again or email me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-24 lg:py-32" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-24">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="font-mono text-primary text-xs sm:text-sm mb-4 text-center"
        >
          <span className="numbered-heading">04.</span> What's Next?
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="section-heading justify-center text-xl sm:text-2xl md:text-3xl"
        >
          Get In Touch
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-muted-foreground leading-relaxed mb-8 sm:mb-12 text-center max-w-2xl mx-auto text-sm sm:text-base"
        >
          I'm currently looking for new opportunities and my inbox is always open.
          Whether you have a question, want to collaborate on a project, or just want
          to say hi, I'll try my best to get back to you!
        </motion.p>

        <div className="grid lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-4 sm:space-y-6"
          >
            <div className="p-4 sm:p-6 rounded-lg bg-card shadow-card space-y-4 sm:space-y-6">
              <h3 className="text-lg sm:text-xl font-semibold text-foreground">
                Contact Information
              </h3>

              <div className="space-y-3 sm:space-y-4">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-3 sm:gap-4 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-secondary flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all shrink-0">
                    <Mail size={16} className="sm:w-[18px] sm:h-[18px]" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] sm:text-xs text-muted-foreground">Email</div>
                    <div className="text-xs sm:text-sm text-foreground truncate">{personalInfo.email}</div>
                  </div>
                </a>

                <div className="flex items-center gap-3 sm:gap-4 text-muted-foreground">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-secondary flex items-center justify-center text-primary shrink-0">
                    <Phone size={16} className="sm:w-[18px] sm:h-[18px]" />
                  </div>
                  <div>
                    <div className="text-[10px] sm:text-xs text-muted-foreground">Phone</div>
                    <div className="text-xs sm:text-sm text-foreground">{personalInfo.phone}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 sm:gap-4 text-muted-foreground">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-secondary flex items-center justify-center text-primary shrink-0">
                    <MapPin size={16} className="sm:w-[18px] sm:h-[18px]" />
                  </div>
                  <div>
                    <div className="text-[10px] sm:text-xs text-muted-foreground">Location</div>
                    <div className="text-xs sm:text-sm text-foreground">{personalInfo.location}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="p-4 sm:p-6 rounded-lg bg-card shadow-card">
              <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Find Me Online</h3>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    title={link.name}
                  >
                    {iconMap[link.icon]}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="p-4 sm:p-6 md:p-8 rounded-lg bg-card shadow-card space-y-4 sm:space-y-6"
            >
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-xs sm:text-sm text-muted-foreground mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-secondary border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-xs sm:text-sm"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm text-muted-foreground mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-secondary border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-xs sm:text-sm"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs sm:text-sm text-muted-foreground mb-2">
                  Your Message
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-secondary border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none text-xs sm:text-sm"
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 sm:px-8 py-3 sm:py-4 bg-primary text-primary-foreground rounded-lg font-medium flex items-center justify-center gap-2 disabled:opacity-50 hover:shadow-glow transition-all text-sm sm:text-base"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <Send size={16} className="sm:w-[18px] sm:h-[18px]" />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;