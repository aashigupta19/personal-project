import { motion } from "framer-motion";

/**
 * ChoiceScreen Component
 * Displays two card-style buttons for navigation
 * Card 1: "Different Shades of Blue" - leads to color palette
 * Card 2: "Will You Be My Valentine?" - leads to Valentine interaction
 *
 * @param {function} onShadesClick - Callback when Shades of Blue card is clicked
 * @param {function} onValentineClick - Callback when Valentine card is clicked
 */
const ChoiceScreen = ({ onShadesClick, onValentineClick }) => {
  // Animation variants for staggered card entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.3 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <motion.div
      className="min-h-screen w-full bg-gradient-pastel-soft flex flex-col items-center justify-center p-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {/* Decorative header */}
      <motion.div
        className="mb-12 text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <h1 className="text-3xl sm:text-4xl font-bold text-pastel-blue-500 mb-2">
          Choose Your Path
        </h1>
        <p className="text-pastel-blue-400 text-sm sm:text-base">
          Where would you like to go?
        </p>
      </motion.div>

      {/* Cards container */}
      <div className="flex flex-col gap-6 w-full max-w-sm">
        {/* Card 1: Different Shades of Blue */}
        <motion.button
          onClick={onShadesClick}
          className="group relative w-full p-6 sm:p-8 rounded-3xl bg-white shadow-soft 
                     hover:shadow-soft-lg transition-all duration-300 
                     border-2 border-transparent hover:border-pastel-blue-200
                     btn-press cursor-pointer overflow-hidden"
          variants={cardVariants}
          whileHover={{ scale: 1.02, y: -5 }}
          whileTap={{ scale: 0.98 }}
        >
          {/* Background gradient on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-pastel-blue-50 to-pastel-blue-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Card content */}
          <div className="relative z-10 flex items-center gap-4">
            {/* Icon */}
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-pastel-blue-200 to-pastel-blue-300 flex items-center justify-center shadow-md group-hover:shadow-glow-blue transition-shadow duration-300">
              {/* Color palette icon */}
              <div className="grid grid-cols-2 gap-1">
                <div className="w-3 h-3 rounded-sm bg-pastel-blue-400" />
                <div className="w-3 h-3 rounded-sm bg-pastel-blue-500" />
                <div className="w-3 h-3 rounded-sm bg-pastel-blue-300" />
                <div className="w-3 h-3 rounded-sm bg-pastel-blue-600" />
              </div>
            </div>

            {/* Text */}
            <div className="text-left flex-1">
              <h2 className="text-lg sm:text-xl font-bold text-pastel-blue-600 group-hover:text-pastel-blue-700 transition-colors">
                Different Shades of Blue
              </h2>
              {/* <p className="text-xs sm:text-sm text-pastel-blue-400 mt-1">
                Explore beautiful blue colors 💙
              </p> */}
            </div>

            {/* Arrow */}
            <motion.div
              className="text-pastel-blue-300 group-hover:text-pastel-blue-500 transition-colors"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </motion.div>
          </div>
        </motion.button>

        {/* Decorative divider */}
        <div className="flex items-center gap-3 px-4">
          <div className="flex-1 h-px bg-pastel-blue-200" />
          <span className="text-pastel-blue-300 text-sm">or</span>
          <div className="flex-1 h-px bg-pastel-blue-200" />
        </div>

        {/* Card 2: Will You Be My Valentine? */}
        <motion.button
          onClick={onValentineClick}
          className="group relative w-full p-6 sm:p-8 rounded-3xl bg-white shadow-soft 
                     hover:shadow-soft-lg transition-all duration-300 
                     border-2 border-transparent hover:border-pastel-pink-300
                     btn-press cursor-pointer overflow-hidden"
          variants={cardVariants}
          whileHover={{ scale: 1.02, y: -5 }}
          whileTap={{ scale: 0.98 }}
        >
          {/* Background gradient on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-pink-50 to-pastel-pink-300/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Card content */}
          <div className="relative z-10 flex items-center gap-4">
            {/* Icon */}
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-pastel-pink-300 to-pastel-pink-400 flex items-center justify-center shadow-md group-hover:shadow-glow-pink transition-shadow duration-300">
              {/* Heart icon */}
              <motion.span
                className="text-2xl text-white"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                💝
              </motion.span>
            </div>

            {/* Text */}
            <div className="text-left flex-1">
              <h2 className="text-lg sm:text-xl font-bold text-pastel-pink-500 group-hover:text-pastel-pink-600 transition-colors">
                Will You Be My Valentine?
              </h2>
              {/* <p className="text-xs sm:text-sm text-pastel-pink-400 mt-1">
                A special question for you 💕
              </p> */}
            </div>

            {/* Arrow */}
            <motion.div
              className="text-pastel-pink-300 group-hover:text-pastel-pink-500 transition-colors"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </motion.div>
          </div>
        </motion.button>
      </div>

      {/* Floating decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute opacity-20"
            style={{
              left: `${10 + i * 12}%`,
              top: `${10 + (i % 4) * 20}%`,
              fontSize: `${14 + i * 3}px`,
            }}
            animate={{
              y: [-5, 5, -5],
              rotate: [-10, 10, -10],
            }}
            transition={{
              duration: 4 + i * 0.3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2,
            }}
          >
            {i % 2 === 0 ? "💙" : "✨"}
          </motion.div>
        ))}
      </div>
      {/* Footer credit */}
      <a
        href="https://github.com/aashigupta19"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-8 right-3 text-pastel-blue-500 text-sm font-medium"
      >
        made with 💕 by @aashigupta19
      </a>
    </motion.div>
  );
};

export default ChoiceScreen;
