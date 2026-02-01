import { motion } from "framer-motion";

/**
 * ShadesOfBlueScreen Component
 * Displays a grid of beautiful blue color shades
 * Each card shows the color, its name, and hex code
 * Includes hover animations with scale and glow effects
 *
 * @param {function} onBack - Callback to navigate back to choice screen
 */
const ShadesOfBlueScreen = ({ onBack }) => {
  // Array of blue shades with names and hex codes
  const blueShades = [
    { name: "Baby Blue", hex: "#89CFF0", description: "Soft & gentle" },
    { name: "Sky Blue", hex: "#87CEEB", description: "Like clear skies" },
    { name: "Powder Blue", hex: "#B0E0E6", description: "Delicate & calm" },
    { name: "Cornflower", hex: "#6495ED", description: "Vibrant & fresh" },
    { name: "Steel Blue", hex: "#4682B4", description: "Strong & steady" },
    { name: "Royal Blue", hex: "#4169E1", description: "Majestic & bold" },
    { name: "Dodger Blue", hex: "#1E90FF", description: "Bright & lively" },
    { name: "Deep Sky", hex: "#00BFFF", description: "Electric & fun" },
    { name: "Cyan", hex: "#00CED1", description: "Cool & modern" },
    { name: "Teal", hex: "#008B8B", description: "Elegant & rich" },
    { name: "Navy Blue", hex: "#000080", description: "Classic & deep" },
    { name: "Midnight", hex: "#191970", description: "Mysterious & dark" },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2,
      },
    },
    exit: {
      opacity: 0,
      y: 20,
      transition: { duration: 0.3 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  /**
   * Copy hex code to clipboard
   * @param {string} hex - The hex color code to copy
   */
  const copyToClipboard = (hex) => {
    navigator.clipboard.writeText(hex);
    // Could add toast notification here
  };

  return (
    <motion.div
      className="min-h-screen w-full bg-gradient-pastel-soft py-6 px-4 sm:px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.4 }}
    >
      {/* Header */}
      <motion.div
        className="max-w-4xl mx-auto mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        {/* Back button */}
        <motion.button
          onClick={onBack}
          className="mb-6 flex items-center gap-2 text-pastel-blue-500 hover:text-pastel-blue-600 
                     transition-colors duration-200 group"
          whileHover={{ x: -5 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          <span className="font-medium">Back</span>
        </motion.button>

        {/* Title section */}
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-gradient-blue mb-2">
            Different Shades of Blue
          </h1>
          <p className="text-pastel-blue-400 text-sm sm:text-base">
            Tap any color to copy its hex code 💙
          </p>
        </div>
      </motion.div>

      {/* Color grid */}
      <motion.div
        className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {blueShades.map((shade, index) => (
          <motion.div
            key={shade.hex}
            className="group relative cursor-pointer"
            variants={cardVariants}
            whileHover={{
              scale: 1.05,
              y: -8,
              transition: { type: "spring", stiffness: 300, damping: 20 },
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => copyToClipboard(shade.hex)}
          >
            {/* Color card */}
            <div className="relative bg-white rounded-2xl overflow-hidden shadow-soft group-hover:shadow-soft-lg transition-shadow duration-300">
              {/* Color display area */}
              <div
                className="h-24 sm:h-28 w-full relative overflow-hidden"
                style={{ backgroundColor: shade.hex }}
              >
                {/* Glow effect on hover */}
                <motion.div
                  className="absolute inset-0"
                  style={{
                    backgroundColor: shade.hex,
                    boxShadow: `0 0 40px ${shade.hex}80`,
                  }}
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.5 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Copy icon (appears on hover) */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center bg-black/20"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="bg-white/90 rounded-full p-2 shadow-lg">
                    <svg
                      className="w-5 h-5 text-gray-700"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                </motion.div>
              </div>

              {/* Info section */}
              <div className="p-3 sm:p-4">
                <h3 className="font-bold text-sm sm:text-base text-gray-700 truncate">
                  {shade.name}
                </h3>
                <p className="text-xs text-gray-400 font-mono mt-1">
                  {shade.hex}
                </p>
                <p className="text-xs text-pastel-blue-400 mt-1 hidden sm:block">
                  {shade.description}
                </p>
              </div>

              {/* Subtle border glow on hover */}
              <motion.div
                className="absolute inset-0 rounded-2xl border-2 pointer-events-none"
                style={{ borderColor: shade.hex }}
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.6 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Fun fact at bottom */}
      <motion.div
        className="max-w-4xl mx-auto mt-10 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <div className="inline-block px-6 py-3 bg-white/60 rounded-2xl shadow-soft">
          <p className="text-pastel-blue-500 text-sm">
            Blue is the color of trust, loyalty, endless skies, and the colour
            of our story 😂
          </p>
        </div>
      </motion.div>

      {/* Decorative floating elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-2xl opacity-10"
            style={{
              left: `${20 + i * 15}%`,
              top: `${15 + i * 18}%`,
            }}
            animate={{
              y: [-10, 10, -10],
              rotate: [-5, 5, -5],
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            💙
          </motion.div>
        ))}
      </div>

      {/* Footer credit */}
      <a
        href="https://github.com/aashigupta19"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-8 right-4 text-pastel-blue-500 text-sm font-medium"
      >
        made with 💕 by @aashigupta19
      </a>
    </motion.div>
  );
};

export default ShadesOfBlueScreen;
