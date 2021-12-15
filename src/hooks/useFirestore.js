import { useEffect, useState } from "react";
import { projectFirestore } from "../firebase/config";

const useFirestore = (collection) => {
  const [docs, setDocs] = useState([]); //guardamos los documentos de la coleccion

  //nos comunicamos con la BD
  //lo hacemos dentro de useEffect asi se ejecutara cada vez que la coleccion cambie
  useEffect(() => {
    const unsub = projectFirestore
      .collection(collection)
      .orderBy("createdAt", "desc")
      .onSnapshot((snap) => {
        let documents = [];
        snap.forEach((doc) => {
          documents.push({ ...doc.data(), id: doc.id });
        });
        setDocs(documents);
      });

    return () => unsub();
  }, [collection]);

  return { docs };
};
export default useFirestore;
