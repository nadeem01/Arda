import * as firebase from "firebase/app";

var firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCsN3QgHhbuj-RiEGvOIJpzeSeCzGOZhI4",
  authDomain: "arda-test-53d00.firebaseapp.com",
  projectId: "arda-test-53d00",
  storageBucket: "arda-test-53d00.appspot.com",
  messagingSenderId: "535538323148",
  appId: "1:535538323148:web:5f927c10eef8bd9f48bc69",
});

var db = firebaseApp.firestore();

export { db };
