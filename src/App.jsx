import { useState } from "react";
import { AnimatePresence } from "framer-motion";

// Import all screen components
import LandingScreen from "./components/LandingScreen";
import ChoiceScreen from "./components/ChoiceScreen";
import ShadesOfBlueScreen from "./components/ShadesOfBlueScreen";
import ValentineScreen from "./components/ValentineScreen";
import FinalMessageScreen from "./components/FinalMessageScreen";

/**
 * Main App Component
 * Manages the current screen state and handles navigation between screens
 * Uses AnimatePresence from Framer Motion for smooth screen transitions
 */
function App() {
  // Current screen state: 'landing' | 'choice' | 'shades' | 'valentine' | 'final'
  const [currentScreen, setCurrentScreen] = useState("landing");

  /**
   * Navigate to a specific screen
   * @param {string} screen - The screen identifier to navigate to
   */
  const navigateTo = (screen) => {
    setCurrentScreen(screen);
  };

  /**
   * Restart the experience from the beginning
   */
  const restart = () => {
    setCurrentScreen("landing");
  };

  /**
   * Render the appropriate screen based on currentScreen state
   * AnimatePresence enables exit animations when components unmount
   */
  const renderScreen = () => {
    switch (currentScreen) {
      case "landing":
        return (
          <LandingScreen
            key="landing"
            onComplete={() => navigateTo("choice")}
          />
        );
      case "choice":
        return (
          <ChoiceScreen
            key="choice"
            onShadesClick={() => navigateTo("shades")}
            onValentineClick={() => navigateTo("valentine")}
          />
        );
      case "shades":
        return (
          <ShadesOfBlueScreen
            key="shades"
            onBack={() => navigateTo("choice")}
          />
        );
      case "valentine":
        return (
          <ValentineScreen key="valentine" onYes={() => navigateTo("final")} />
        );
      case "final":
        return <FinalMessageScreen key="final" onRestart={restart} />;
      default:
        return (
          <LandingScreen
            key="landing"
            onComplete={() => navigateTo("choice")}
          />
        );
    }
  };

  return (
    <div className="min-h-screen w-full overflow-hidden">
      {/* AnimatePresence allows components to animate out when they're removed */}
      <AnimatePresence mode="wait">{renderScreen()}</AnimatePresence>
    </div>
  );
}

export default App;
