/**
 * API Config for Provider
 */
import firebase from "firebase/app";
import "firebase/database";
// Saving bundle size
// import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBjO163hCIn-3zJYQCCmF9aO40IHxABMcs",
  authDomain: "fightbackplatform.firebaseapp.com",
  databaseURL: "https://fightbackplatform.firebaseio.com",
  projectId: "fightbackplatform",
  storageBucket: "fightbackplatform.appspot.com",
  messagingSenderId: "139643040486",
};

firebase.initializeApp(config);

export default firebase;
