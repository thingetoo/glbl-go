import firebase from 'firebase/app'; // need firebase keyword
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDT2JLMcFCm7vuxpQfEwaHZcVkTAiejpBM",
    authDomain: "glbl-go.firebaseapp.com",
    databaseURL: "https://glbl-go.firebaseio.com",
    projectId: "glbl-go",
    storageBucket: "glbl-go.appspot.com",
    messagingSenderId: "288321308846",
    appId: "1:288321308846:web:850b5de15bf8bc7aa3c53f",
    measurementId: "G-2VDS9X3LNR"
  }

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

