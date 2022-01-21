import React from "react";
import useFirestore from "../hooks/useFirestore";
import { motion } from "framer-motion";

const ImageGrid = ({ setSelectedImg }) => {
  const { docs } = useFirestore("images");
  // console.log("useFirestore", useFirestore("images"));
  // console.log(docs);

  return (
    <div className="img-grid">
      {docs &&
        docs.map((doc) => {
          return (
            <motion.div
              layout
              whileHover={{ scale: 1.2, opacity: 1 }}
              whileTap={{ scale: 0.8 }}
              className="img-wrap"
              key={doc.id}
              onClick={() => setSelectedImg(doc)}
            >
              <motion.img
                src={doc.url}
                alt="uploaded pic"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              />
            </motion.div>
          );
        })}
    </div>
  );
};

export default ImageGrid;
