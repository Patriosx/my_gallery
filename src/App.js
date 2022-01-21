import React, { useState } from "react";
import ImageGrid from "./comps/ImageGrid";
import Modal from "./comps/Modal";
import Title from "./comps/Title";
import UploadForm from "./comps/UploadForm";
import { projectFirestore } from "./firebase/config";

function App() {
  const [selectedImg, setSelectedImg] = useState(null);

  const deletePic = async (id) => {
    if (window.confirm("Are you sure about this?")) {
      try {
        await projectFirestore.collection("images").doc(id).delete();
        setSelectedImg("");
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("We keep it then");
    }
  };
  return (
    <div className="App">
      <Title />
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg} />
      {selectedImg && (
        <Modal
          selectedImg={selectedImg}
          setSelectedImg={setSelectedImg}
          deletePic={deletePic}
        />
      )}
    </div>
  );
}

export default App;
