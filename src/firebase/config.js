import firebase from "firebase/compat/app";
import "firebase/compat/storage"; // para almacenar las imagenes
import "firebase/compat/firestore"; //database

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbQlQE4VwkHNlG2CquuLjQLOwXeMDznKg",
  authDomain: "my-gallery-prt.firebaseapp.com",
  projectId: "my-gallery-prt",
  storageBucket: "my-gallery-prt.appspot.com",
  messagingSenderId: "400098423988",
  appId: "1:400098423988:web:a9cce3794f83d97f8413e1",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//Initialize our services

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp();

//export the services so we can use them out in others files
export { projectFirestore, projectStorage, timestamp };
