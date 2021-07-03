import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC5_vnSVu76hhhnf1Ypyimo_YwOY0XXsH4",
  authDomain: "olx-clone-590b4.firebaseapp.com",
  projectId: "olx-clone-590b4",
  storageBucket: "olx-clone-590b4.appspot.com",
  messagingSenderId: "880395343722",
  appId: "1:880395343722:web:5b3e2ff6f61166685a3713",
  measurementId: "G-8RFBEQXNXV",
};

export default firebase.initializeApp(firebaseConfig);
