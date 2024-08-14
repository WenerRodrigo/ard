import { useEffect } from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import splashAnimation from "../lottie/loading.json"; 



type SplashScreenProps = {
  onFinish: () => void;
};

const SplashScreen = ({ onFinish }: SplashScreenProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 2000);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <Lottie animationData={splashAnimation} loop={true} />
      </motion.div>
    </div>
  );
};

export default SplashScreen;
