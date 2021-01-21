import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBRFPn2Bz6Vo3UHY7M4VgxGmRcWq4NTKJk",
  authDomain: "photo-gallery-9646.firebaseapp.com",
  projectId: "photo-gallery-9646",
  storageBucket: "photo-gallery-9646.appspot.com",
  messagingSenderId: "711463825759",
  appId: "1:711463825759:web:02be09096876a7cd0c46ea",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timeStamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectStorage, timeStamp };
