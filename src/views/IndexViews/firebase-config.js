import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDJ4EEUYdKMptlzDQrdlVWiReKaGHhc6jc",
  authDomain: "arda-form-data.firebaseapp.com",
  projectId: "arda-form-data",
  storageBucket: "arda-form-data.appspot.com",
  messagingSenderId: "219060607425",
  appId: "1:219060607425:web:20a243d3794e5e6d197740"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore();