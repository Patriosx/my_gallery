import { useState, useEffect } from "react";
import {
  projectStorage,
  projectFirestore,
  timestamp,
} from "../firebase/config";

const useStorage = (file) => {
  const [progress, setProgress] = useState(0); //progreso de la subida
  const [error, setError] = useState(null); //errores de la subida
  const [url, setUrl] = useState(null);

  useEffect(() => {
    //Reference: In order to upload or download files, delete files, or get or update metadata, you must create a reference to the file you want to operate on
    const storageRef = projectStorage.ref(file.name);
    const collectionRef = projectFirestore.collection("images");

    storageRef.put(file).on(
      "state_changed",
      (snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
      },
      (err) => {
        setError(err);
      },
      async () => {
        const url = await storageRef.getDownloadURL();
        const createdAt = timestamp;
        collectionRef.add({ url, createdAt });
        setUrl(url); //guardamos la url en el estado despues de haberla guardado en la BD
      }
    );
  }, [file]);

  return { progress, error, url };
};
export default useStorage;
