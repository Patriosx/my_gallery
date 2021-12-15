import React, { useEffect } from "react";
import useStorage from "../hooks/useStorage";
import { motion } from "framer-motion";

const ProgressBar = ({ file, setFile }) => {
  const { url, progress } = useStorage(file);
  //limpiamos el estado del fichero cuando tengamos la url
  useEffect(() => {
    if (url) {
      setFile(null);
    }
    //tambien le tenemos que pasar setFile ya que lo usamos dentro
  }, [url, setFile]);
  return (
    <motion.div
      className="progress-bar"
      style={{ width: progress + "%" }}
      initial={{ width: 0 }}
      animate={{ width: progress + "%" }}
    ></motion.div>
  );
};

export default ProgressBar;
