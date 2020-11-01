import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyC3P-PJBFUqvKDk6v_rLjP4CzhSdD4vT_U",
  authDomain: "facebook-messenger-clone-c707b.firebaseapp.com",
  databaseURL: "https://facebook-messenger-clone-c707b.firebaseio.com",
  projectId: "facebook-messenger-clone-c707b",
  storageBucket: "facebook-messenger-clone-c707b.appspot.com",
  messagingSenderId: "167490261379",
  appId: "1:167490261379:web:aeb2d571d5440ad2f926b6",
  measurementId: "G-ZCYLJY2MR8",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db;
