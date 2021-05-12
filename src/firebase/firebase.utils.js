import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';


const config = {
  apiKey: "AIzaSyDLpdozUTuKzLMbwz8Ydi9qoFj8e4nDOB0",
  authDomain: "crwn-db-2c90d.firebaseapp.com",
  projectId: "crwn-db-2c90d",
  storageBucket: "crwn-db-2c90d.appspot.com",
  messagingSenderId: "273115922984",
  appId: "1:273115922984:web:4e0e9336d27d7e7d106b1d",
  measurementId: "G-V6Z61SGJKE",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;