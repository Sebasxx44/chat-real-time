import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB92V83U3AqF-OsUuIO7lHj0U-qJgoCK_8",
    authDomain: "react-chat-4d63b.firebaseapp.com",
    projectId: "react-chat-4d63b",
    storageBucket: "react-chat-4d63b.appspot.com",
    messagingSenderId: "364668194182",
    appId: "1:364668194182:web:0f7a05d13c00d0dfe83007"
  };
  

  const app = initializeApp(firebaseConfig);

  export const auth = getAuth(app)
  export const db = getFirestore(app)