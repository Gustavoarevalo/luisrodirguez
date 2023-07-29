import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDQd0YWwNW46oBQGow0_SFQm7mhAfOOals",
  authDomain: "proyecto-26-7.firebaseapp.com",
  projectId: "proyecto-26-7",
  storageBucket: "proyecto-26-7.appspot.com",
  messagingSenderId: "436372023358",
  appId: "1:436372023358:web:b6e68cea7aed084ec1896f",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
