import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    title: "Getting Started with Machine Learning in Python",
    excerpt: "A beginner's guide to understanding the fundamentals of machine learning and how to implement your first model using Python and scikit-learn.",
    date: "Dec 20, 2024",
    readTime: "5 min read",
    tags: ["Python", "Machine Learning", "Tutorial"],
  },
  {
    title: "Data Structures Every Developer Should Know",
    excerpt: "Exploring essential data structures like arrays, linked lists, trees, and graphs that form the backbone of efficient programming.",
    date: "Dec 15, 2024",
    readTime: "7 min read",
    tags: ["DSA", "C++", "Algorithms"],
  },
  {
    title: "Docker for Beginners: Containerize Your Apps",
    excerpt: "Learn how to use Docker to containerize your applications and streamline your development workflow with practical examples.",
    date: "Dec 10, 2024",
    readTime: "6 min read",
    tags: ["Docker", "DevOps", "Tools"],
  },
];

const Blog = () => {
  return (
    <section id="blog" className="py-20 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="numbered-heading flex items-center gap-2 text-2xl md:text-3xl font-semibold text-foreground mb-12">
          <span className="text-primary font-mono text-lg md:text-xl">05.</span>
          Blog
          <span className="hidden md:block h-px bg-muted-foreground/30 flex-1 ml-4" />
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4 font-mono">
                <span className="flex items-center gap-1">
                  <Calendar size={14} />
                  {post.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={14} />
                  {post.readTime}
                </span>
              </div>

              <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {post.title}
              </h3>

              <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                {post.excerpt}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-primary/10 text-primary text-xs font-mono rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <span className="inline-flex items-center gap-2 text-primary text-sm font-mono group-hover:gap-3 transition-all">
                Read More <ArrowRight size={16} />
              </span>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-10"
        >
          <p className="text-muted-foreground font-mono text-sm">
            More articles coming soon...
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Blog;
