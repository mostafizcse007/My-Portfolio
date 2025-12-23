import { motion } from "framer-motion";

const Loader = ({ onComplete }: { onComplete: () => void }) => {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 2 }}
      onAnimationComplete={onComplete}
    >
      <motion.div
        className="relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {/* Logo Animation */}
        <svg
          width="100"
          height="100"
          viewBox="0 0 100 100"
          className="text-primary"
        >
          {/* Hexagon outline */}
          <motion.polygon
            points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
          
          {/* Name */}
          <motion.text
            x="50"
            y="58"
            textAnchor="middle"
            fill="currentColor"
            fontSize="24"
            fontFamily="monospace"
            fontWeight="bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            Antu
          </motion.text>
        </svg>

        {/* Loading dots */}
        <motion.div
          className="flex gap-1 justify-center mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 rounded-full bg-primary"
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                delay: i * 0.15,
              }}
            />
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Loader;