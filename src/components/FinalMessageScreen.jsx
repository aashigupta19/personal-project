import { useEffect, useState } from "react";
import { motion } from "framer-motion";

/**
 * FinalMessageScreen Component
 * Displays the heartfelt final message after user clicks YES
 * Features:
 * - Soft reveal animation
 * - Romantic letter-style message
 * - Floating hearts animation
 * - Restart button
 *
 * @param {function} onRestart - Callback to restart the experience
 */
const FinalMessageScreen = ({ onRestart }) => {
  // Track if message has been revealed (for staggered animations)
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    // Start reveal animation after component mounts
    const timer = setTimeout(() => {
      setIsRevealed(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  // Animation variants for the message paragraphs
  const paragraphVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.8 + i * 0.3,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <motion.div
      className="min-h-screen w-full bg-gradient-pastel flex flex-col items-center justify-center p-6 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Background decorations - floating hearts */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${12 + Math.random() * 16}px`,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 0.4, 0],
              scale: [0, 1, 0.8],
              y: [0, -50, -100],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeOut",
            }}
          >
            {i % 3 === 0 ? "💕" : i % 3 === 1 ? "💗" : "✨"}
          </motion.div>
        ))}
      </div>

      {/* Main content container */}
      <motion.div
        className="relative z-10 max-w-lg w-full"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
      >
        {/* Letter/message card */}
        <motion.div
          className="bg-white/90 rounded-3xl shadow-soft-lg p-8 sm:p-10 relative overflow-hidden"
          initial={{ y: 50, rotateX: 10 }}
          animate={{ y: 0, rotateX: 0 }}
          transition={{ delay: 0.3, duration: 0.6, type: "spring" }}
        >
          {/* Decorative corner flowers */}
          <div className="absolute top-4 left-4 text-2xl opacity-60">🌸</div>
          <div className="absolute top-4 right-4 text-2xl opacity-60">🌸</div>
          <div className="absolute bottom-4 left-4 text-2xl opacity-60">🌸</div>
          <div className="absolute bottom-4 right-4 text-2xl opacity-60">
            🌸
          </div>

          {/* Header */}
          <motion.div
            className="text-center mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <motion.div
              className="text-4xl mb-2"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            ></motion.div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gradient-pink">
              Hiiiiii Ram,
            </h1>
          </motion.div>

          {/* Divider */}
          <motion.div
            className="w-16 h-1 bg-gradient-to-r from-pastel-pink-300 to-pastel-pink-400 rounded-full mx-auto mb-6"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.7, duration: 0.4 }}
          />

          {/* Message content */}
          <div className="space-y-4 text-center text-gray-600 leading-relaxed">
            <motion.p
              className="text-sm sm:text-base"
              custom={0}
              variants={paragraphVariants}
              initial="hidden"
              animate={isRevealed ? "visible" : "hidden"}
            >
              <span className="font-semibold text-pastel-pink-500"></span>
            </motion.p>

            <motion.p
              className="text-sm sm:text-base"
              custom={1}
              variants={paragraphVariants}
              initial="hidden"
              animate={isRevealed ? "visible" : "hidden"}
            >
              Even though it was kind of official already, your engineer
              girlfriend wanted to do something to catch you off guard somehow
              (that's our thing right? 😂). So here it is, my little surprise
              for you!
            </motion.p>

            <motion.p
              className="text-sm sm:text-base"
              custom={2}
              variants={paragraphVariants}
              initial="hidden"
              animate={isRevealed ? "visible" : "hidden"}
            >
              You're sincerely invited to my place on 14th Feb so that you'll
              have the priviledge of cooking a meal and watching a movie with me
              :) (ohkay nevermind that's too cocky even for me, but you get my
              point okay?!) Or, I'm also in to spend a cozy evening with you,
              me, beers and our mirchi bhaji 😂.
            </motion.p>

            {/* <motion.p
              className="text-sm sm:text-base"
              custom={3}
              variants={paragraphVariants}
              initial="hidden"
              animate={isRevealed ? "visible" : "hidden"}
            >
              Even in my wildest imagination, I never thought someone like you
              existed. If there were such a thing as perfection, it would be
              you, my sweet love. I am so incredibly proud of you, and I know
              you will shine so brightly as we walk through the rest of our
              lives together.
            </motion.p> */}

            <motion.p
              className="text-base sm:text-lg font-semibold text-pastel-pink-500 pt-2"
              custom={4}
              variants={paragraphVariants}
              initial="hidden"
              animate={isRevealed ? "visible" : "hidden"}
            >
              Hope you liked it?
            </motion.p>
          </div>

          {/* Signature */}
          <motion.div
            className="mt-8 text-right"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5, duration: 0.5 }}
          >
            <p className="text-pastel-blue-400 italic text-sm">
              ~ Your Saiba/Seth Ji ~
            </p>
          </motion.div>
        </motion.div>

        {/* Restart button */}
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.8, duration: 0.5 }}
        >
          <motion.button
            onClick={onRestart}
            className="px-8 py-3 bg-white/80 text-pastel-blue-500 font-semibold 
                       rounded-full shadow-soft hover:shadow-soft-lg hover:bg-white
                       transition-all duration-300 btn-press cursor-pointer
                       border-2 border-pastel-blue-200 hover:border-pastel-blue-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="flex items-center gap-2">
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
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
              Experience Again
            </span>
          </motion.button>
        </motion.div>

        {/* Share hint */}
      </motion.div>

      {/* Continuous floating hearts at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`bottom-heart-${i}`}
            className="absolute text-pastel-pink-300"
            style={{
              left: `${10 + i * 12}%`,
              bottom: "-20px",
              fontSize: `${16 + i * 2}px`,
            }}
            animate={{
              y: [-20, -200],
              x: [0, i % 2 === 0 ? 20 : -20],
              opacity: [0.6, 0],
              rotate: [0, i % 2 === 0 ? 45 : -45],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              delay: i * 0.7,
              ease: "easeOut",
            }}
          >
            ♥
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

export default FinalMessageScreen;
