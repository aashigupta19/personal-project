import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";

/**
 * ValentineScreen Component
 * The playful Valentine's Day interaction page
 * Features:
 * - Cute bear illustration at top
 * - "Will you be my Valentine?" question
 * - YES button that grows with each NO click
 * - NO button that cycles through playful messages
 * - Confetti animation when YES is clicked
 *
 * @param {function} onYes - Callback when user finally clicks YES
 */
const ValentineScreen = ({ onYes }) => {
  // Track YES button scale (grows with each NO click)
  const [yesScale, setYesScale] = useState(1);

  // Track which NO message to show
  const [noMessageIndex, setNoMessageIndex] = useState(0);

  // Track if YES was clicked (for animations)
  const [isYesClicked, setIsYesClicked] = useState(false);

  // Array of playful NO button messages
  const noMessages = [
    "No",
    "Are you sure?",
    "Really sure?",
    "Think again!",
    "Pretty please?",
    "I'll be sad 🥺",
    "You're breaking my heart 💔",
    "I'm gonna cry...",
    "You're so mean!",
    "Fine, just click Yes",
    "Please? 🥹",
    "Last chance!",
  ];

  /**
   * Handle NO button click
   * - Cycle to next NO message
   * - Increase YES button scale
   */
  const handleNoClick = () => {
    // Move to next message (loop back to start if at end)
    setNoMessageIndex((prev) => (prev + 1) % noMessages.length);

    // Increase YES button scale (cap at 2.5x to keep NO button visible longer)
    setYesScale((prev) => Math.min(prev + 0.15, 2.5));
  };

  /**
   * Handle YES button click
   * - Trigger confetti celebration
   * - Set clicked state for animations
   * - After animation, transition to final screen
   */
  const handleYesClick = () => {
    setIsYesClicked(true);

    // Trigger confetti celebration
    triggerConfetti();

    // Wait for celebration, then transition
    setTimeout(() => {
      onYes();
    }, 2000);
  };

  /**
   * Trigger confetti animation using canvas-confetti
   * Creates a heart-shaped burst of colorful confetti
   */
  const triggerConfetti = () => {
    // First burst - center
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#f472b6", "#ec4899", "#f9a8d4", "#ff69b4", "#ff1493"],
    });

    // Second burst - left
    setTimeout(() => {
      confetti({
        particleCount: 50,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ["#f472b6", "#ec4899", "#f9a8d4", "#ffc0cb"],
      });
    }, 250);

    // Third burst - right
    setTimeout(() => {
      confetti({
        particleCount: 50,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ["#f472b6", "#ec4899", "#f9a8d4", "#ffc0cb"],
      });
    }, 400);

    // Heart-shaped confetti
    const heart = confetti.shapeFromPath({
      path: "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z",
    });

    // Multiple heart bursts
    setTimeout(() => {
      confetti({
        shapes: [heart],
        particleCount: 30,
        spread: 180,
        origin: { y: 0.5 },
        colors: ["#ff69b4", "#ff1493", "#ff6b9d"],
        scalar: 2,
      });
    }, 600);
  };

  return (
    <motion.div
      className="min-h-screen w-full bg-gradient-pastel flex flex-col items-center justify-center p-6 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Background floating hearts */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-pastel-pink-300 opacity-30"
            style={{
              left: `${5 + i * 8}%`,
              bottom: "-20px",
              fontSize: `${18 + (i % 4) * 6}px`,
            }}
            animate={{
              y: [0, -800],
              rotate: [0, 360],
              opacity: [0.3, 0],
            }}
            transition={{
              duration: 8 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "linear",
            }}
          >
            ♥
          </motion.div>
        ))}
      </div>

      {/* Main content container */}
      <motion.div
        className="relative z-10 flex flex-col items-center max-w-md w-full"
        animate={isYesClicked ? { scale: 0.9, opacity: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        {/* Cute bear illustration */}
        <motion.div
          className="mb-8"
          initial={{ scale: 0, rotate: -10 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
        >
          <div className="relative">
            {/* Bear body */}
            <div className="w-32 h-32 sm:w-40 sm:h-40 bg-amber-200 rounded-full relative shadow-soft">
              {/* Bear ears */}
              <div className="absolute -top-3 -left-1 w-10 h-10 bg-amber-200 rounded-full shadow-sm" />
              <div className="absolute -top-3 -right-1 w-10 h-10 bg-amber-200 rounded-full shadow-sm" />
              <div className="absolute -top-1 left-1 w-6 h-6 bg-amber-300 rounded-full" />
              <div className="absolute -top-1 right-1 w-6 h-6 bg-amber-300 rounded-full" />

              {/* Bear face */}
              <div className="absolute inset-0 flex flex-col items-center justify-center pt-2">
                {/* Eyes */}
                <div className="flex gap-6 sm:gap-8 mb-2">
                  <motion.div
                    className="w-3 h-4 bg-gray-800 rounded-full"
                    animate={{ scaleY: [1, 0.2, 1] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatDelay: 2,
                    }}
                  />
                  <motion.div
                    className="w-3 h-4 bg-gray-800 rounded-full"
                    animate={{ scaleY: [1, 0.2, 1] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatDelay: 2,
                    }}
                  />
                </div>

                {/* Blush */}
                <div className="flex gap-10 sm:gap-14 mb-1">
                  <div className="w-4 h-2 bg-pastel-pink-300 rounded-full opacity-70" />
                  <div className="w-4 h-2 bg-pastel-pink-300 rounded-full opacity-70" />
                </div>

                {/* Snout */}
                <div className="w-10 h-8 bg-amber-100 rounded-full flex items-center justify-center">
                  <div className="w-3 h-2 bg-amber-400 rounded-full" />
                </div>

                {/* Mouth */}
                <div className="w-4 h-2 border-b-2 border-amber-400 rounded-b-full mt-1" />
              </div>
            </div>

            {/* Bear holding heart */}
            <motion.div
              className="absolute -bottom-2 left-1/2 -translate-x-1/2"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <div className="text-3xl">💕</div>
            </motion.div>
          </div>
        </motion.div>

        {/* Question text */}
        <motion.h1
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10 text-pastel-pink-500 dark:text-pastel-pink-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Will you be my Valentine?
        </motion.h1>

        {/* Buttons container - vertical layout to prevent overlap */}
        <div className="flex flex-col items-center justify-center gap-6 w-full">
          {/* YES button - grows with each NO click */}
          <motion.button
            onClick={handleYesClick}
            className="px-8 py-3 bg-gradient-to-r from-pastel-pink-400 to-pastel-pink-500 
                       text-white font-bold rounded-full shadow-soft hover:shadow-glow-pink 
                       transition-shadow duration-300 btn-press cursor-pointer"
            style={{
              fontSize: `${16 + (yesScale - 1) * 6}px`,
              padding: `${12 + (yesScale - 1) * 8}px ${32 + (yesScale - 1) * 16}px`,
            }}
            initial={{ scale: 0 }}
            animate={{ scale: yesScale }}
            whileHover={{ scale: yesScale * 1.05 }}
            whileTap={{ scale: yesScale * 0.95 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            Yes! 💕
          </motion.button>

          {/* NO button - cycles through messages, disappears only at last message */}
          <AnimatePresence mode="wait">
            {noMessageIndex < noMessages.length - 1 && (
              <motion.button
                key={noMessageIndex}
                onClick={handleNoClick}
                className="px-6 py-2 bg-pastel-blue-200 dark:bg-pastel-blue-600 text-pastel-blue-600 dark:text-white font-semibold 
                           rounded-full shadow-soft hover:bg-pastel-blue-300 dark:hover:bg-pastel-blue-500
                           transition-colors duration-200 btn-press cursor-pointer"
                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.5, y: -10 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                {noMessages[noMessageIndex]}
              </motion.button>
            )}
          </AnimatePresence>
        </div>

        {/* Hint text after a few NO clicks */}
        <AnimatePresence>
          {noMessageIndex >= 3 && (
            <motion.p
              className="mt-8 text-sm text-pastel-blue-400 dark:text-pastel-blue-300 text-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 0.7, y: 0 }}
              exit={{ opacity: 0 }}
            >
              Psst... the Yes button is looking pretty good right now 😉
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>

      {/* YES clicked celebration overlay */}
      <AnimatePresence>
        {isYesClicked && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center z-50 bg-white/80 dark:bg-gray-900/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="text-center"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <motion.div
                className="text-6xl sm:text-8xl mb-4"
                animate={{
                  scale: [1, 1.3, 1],
                  rotate: [0, 10, -10, 0],
                }}
                transition={{ duration: 0.5, repeat: 3 }}
              >
                💕
              </motion.div>
              <motion.h2
                className="text-3xl sm:text-4xl font-bold text-pastel-pink-500 dark:text-pastel-pink-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Yay!!!
              </motion.h2>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer credit */}
      <a
        href="https://github.com/aashigupta19"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-3 right-3 text-pastel-blue-600 dark:text-pastel-blue-200 text-xs hover:text-pastel-blue-700 dark:hover:text-white transition-colors duration-200 z-30"
      >
        made with 💕 by @aashigupta19
      </a>
    </motion.div>
  );
};

export default ValentineScreen;
