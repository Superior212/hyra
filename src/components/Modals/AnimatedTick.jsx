import React from "react";
import { motion } from "framer-motion";
import regSuccess from "../../assets/images/regSuccess.png";
import Image from "next/image";

const AnimatedTick = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5,
        type: "spring",
        stiffness: 300,
        damping: 10,
      }}>
      <Image src={regSuccess} width={200} height={200} />
    </motion.div>
  );
};

export default AnimatedTick;
