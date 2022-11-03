import firebase from "firebase/compat/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTHDOMAIN,
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASEURL,
  projectId: import.meta.env.VITE_FIREBASE_PROJECTID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_PROJECTID,
  appId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
};
const initFire = firebase.initializeApp(firebaseConfig);
export default initFire;
