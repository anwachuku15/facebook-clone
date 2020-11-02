import firebase from "firebase";

const config = {
  apiKey: "AIzaSyAmsjt4pAm_enKXmHbUWqF1c_w154sey6o",
  authDomain: "facebookclone-mern-c56cd.firebaseapp.com",
  databaseURL: "https://facebookclone-mern-c56cd.firebaseio.com",
  projectId: "facebookclone-mern-c56cd",
  storageBucket: "facebookclone-mern-c56cd.appspot.com",
  messagingSenderId: "189235497330",
  appId: "1:189235497330:web:e00b790223e7cad2c335eb",
  measurementId: "G-21DP5RRQMK",
};

const firebaseApp = firebase.initializeApp(config);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const db = firebase.firestore();

export { auth, provider };
export default db;
