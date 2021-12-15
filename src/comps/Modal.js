import React from "react";
import { motion } from "framer-motion";

const Modal = ({ selectedImg, setSelectedImg, deletePic }) => {
  // console.log("deletePic", deletePic);
  const closeModal = (e) => {
    //   e.target.classList.contains("backdrop")
    if (e.target.className !== "modal-image") setSelectedImg(null);
  };
  const onDelete = (id) => {
    console.log("ondelete", selectedImg);
    deletePic(selectedImg.id);
  };
  return (
    <motion.div
      className="backdrop"
      onClick={closeModal}
      inicial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="modal-container">
        <motion.img
          src={selectedImg.url}
          alt=""
          transition={{ ease: "easeOut", duration: 0.3 }}
          animate={{ y: [-100, 0] }}
          className="modal-image"
        />
        <motion.div
          className="delete-container"
          onClick={() => onDelete(selectedImg.id)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <span>Delete</span>
          <i className="material-icons delete-pic">delete</i>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Modal;
