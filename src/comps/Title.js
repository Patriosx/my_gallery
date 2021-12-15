import React from "react";
import { motion } from "framer-motion";

const Title = () => {
  return (
    <motion.div
      className="title"
      transition={{ ease: "easeOut", duration: 0.5 }}
      animate={{ x: [-1000, 0] }}
    >
      <h1>My Gallery</h1>
      <h2>Pictures</h2>
      <p>This is a little example of a gallery with React and Firebase</p>
    </motion.div>
  );
};

export default Title;
