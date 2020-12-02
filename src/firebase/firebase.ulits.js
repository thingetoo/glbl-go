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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return  //if userAuth object does not exist

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
              displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message)
        }
    }
    return userRef;
}

firebase.initializeApp(config);
export const auth = firebase.auth(); //export so we can use anywhere we need authentication
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider(); //
provider.setCustomParameters({ prompt: 'select_account' }) // always trigger google popup whenevr we use the google auth provider
export const signInWithGoogle = () => auth.signInWithPopup(provider); 

export default firebase;

