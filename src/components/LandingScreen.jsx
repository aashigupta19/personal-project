import { useState } from "react";
import { motion } from "framer-motion";

/**
 * LandingScreen Component
 * Displays an animated envelope with a button in the center
 * When clicked, the envelope opens and transitions to the next screen
 *
 * @param {function} onComplete - Callback function when envelope animation completes
 */
const LandingScreen = ({ onComplete }) => {
  // Track if envelope has been clicked/opened
  const [isOpening, setIsOpening] = useState(false);

  /**
   * Handle button click - trigger envelope opening animation
   * After animation completes, call onComplete to transition screens
   */
  const handleClick = () => {
    if (isOpening) return; // Prevent multiple clicks
    setIsOpening(true);

    // Wait for animation to complete before transitioning
    setTimeout(() => {
      onComplete();
    }, 1200);
  };

  return (
    <motion.div
      className="min-h-screen w-full bg-gradient-pastel flex items-center justify-center p-4"
      // Screen entry animation
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5 }}
    >
      {/* Decorative floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating hearts in background */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-pastel-pink-300 opacity-40"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
              fontSize: `${20 + i * 5}px`,
            }}
            animate={{
              y: [-10, 10, -10],
              rotate: [-5, 5, -5],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            ♥
          </motion.div>
        ))}
      </div>

      {/* Main envelope container */}
      <motion.div
        className="relative"
        animate={isOpening ? { scale: 1.1, y: -20 } : {}}
        transition={{ duration: 0.3 }}
      >
        {/* Envelope body */}
        <div className="relative w-72 h-48 sm:w-80 sm:h-52 md:w-96 md:h-60">
          {/* Envelope back (cream colored) */}
          <div className="absolute inset-0 bg-gradient-envelope rounded-xl shadow-soft-lg" />

          {/* Envelope bottom flap */}
          <div
            className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-b from-[#fce7d6] to-[#f5d5c0] rounded-b-xl"
            style={{
              clipPath: "polygon(0 30%, 50% 0%, 100% 30%, 100% 100%, 0% 100%)",
            }}
          />

          {/* Envelope top flap (animated) */}
          <motion.div
            className="absolute -top-1 left-0 right-0 h-28 sm:h-32 md:h-36 origin-top"
            style={{
              background: "linear-gradient(180deg, #fef9f3 0%, #fce7d6 100%)",
              clipPath: "polygon(0 0, 50% 100%, 100% 0)",
              transformStyle: "preserve-3d",
            }}
            animate={isOpening ? { rotateX: 180 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />

          {/* Heart seal on flap */}
          <motion.div
            className="absolute top-12 sm:top-14 md:top-16 left-1/2 -translate-x-1/2 z-10"
            animate={isOpening ? { opacity: 0, scale: 0 } : {}}
            transition={{ duration: 0.3 }}
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-pastel-pink-400 rounded-full flex items-center justify-center shadow-md">
              <span className="text-white text-sm sm:text-base">♥</span>
            </div>
          </motion.div>

          {/* Letter peeking out (visible when opening) */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 sm:w-64 md:w-72 h-32 sm:h-36 md:h-40 bg-white rounded-lg shadow-md z-0"
            initial={{ y: 0 }}
            animate={isOpening ? { y: -80, opacity: 1 } : { y: 0, opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {/* Letter lines */}
            <div className="p-4 space-y-2">
              <div className="h-2 bg-pastel-blue-200 rounded w-3/4" />
              <div className="h-2 bg-pastel-blue-100 rounded w-full" />
              <div className="h-2 bg-pastel-blue-100 rounded w-5/6" />
              <div className="h-2 bg-pastel-blue-100 rounded w-2/3" />
            </div>
            {/* Small heart on letter */}
            <div className="absolute bottom-3 right-4 text-pastel-pink-400">
              ♥
            </div>
          </motion.div>

          {/* Center button */}
          <motion.button
            onClick={handleClick}
            disabled={isOpening}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20
                       w-16 h-16 sm:w-20 sm:h-20 rounded-full
                       bg-gradient-to-br from-pastel-blue-300 to-pastel-blue-400
                       shadow-lg hover:shadow-glow-blue
                       flex items-center justify-center
                       transition-all duration-300 ease-out
                       btn-press cursor-pointer
                       disabled:cursor-not-allowed"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            animate={isOpening ? { scale: 1.5, opacity: 0 } : {}}
            transition={{ duration: 0.4 }}
          >
            {/* Button inner circle (like a real button) */}
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-pastel-blue-200 flex items-center justify-center shadow-inner">
              <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-pastel-blue-400 opacity-60" />
            </div>
            {/* Button holes (like a clothing button) */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="grid grid-cols-2 gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-pastel-blue-500 opacity-40" />
                <div className="w-1.5 h-1.5 rounded-full bg-pastel-blue-500 opacity-40" />
                <div className="w-1.5 h-1.5 rounded-full bg-pastel-blue-500 opacity-40" />
                <div className="w-1.5 h-1.5 rounded-full bg-pastel-blue-500 opacity-40" />
              </div>
            </div>
          </motion.button>
        </div>
      </motion.div>

      {/* Subtle instruction text */}
      <motion.p
        className="absolute bottom-8 text-pastel-blue-500 text-sm font-medium"
        initial={{ opacity: 0 }}
        animate={{ opacity: isOpening ? 0 : 0.7 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        Tap the button ✨
      </motion.p>

      {/* Footer credit */}
      <a
        href="https://github.com/aashigupta19"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-8 right-3 text-pastel-blue-500 text-sm font-medium"
        // className="absolute bottom-2 right-3 text-pastel-blue-400 text-xs opacity-50 hover:opacity-80 transition-opacity duration-200"
      >
        made with 💕 by @aashigupta19
      </a>
    </motion.div>
  );
};

export default LandingScreen;
