// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {

  apiKey: "AIzaSyB6uH64O2QzBHr-gPfGjqJ9t6-zRsAOTEo",

  authDomain: "clone-76202.firebaseapp.com",

  projectId: "clone-76202",

  storageBucket: "clone-76202.appspot.com",

  messagingSenderId: "740227991549",

  appId: "1:740227991549:web:5bfa794aec22ad45bc7b94",

  measurementId: "G-C013KXE0SN"

};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };