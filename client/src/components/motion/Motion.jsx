import React from "react";
import { motion } from "framer-motion";
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const Motion = ({ children, className = "" }) => {
  return (
    <div>
      <motion.div
        className={className}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Motion;
