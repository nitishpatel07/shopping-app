import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBJKRvSi3Br9vjMZNm3QMZEwk21TXJraCs",
  authDomain: "clothing-app-5a2b1.firebaseapp.com",
  projectId: "clothing-app-5a2b1",
  storageBucket: "clothing-app-5a2b1.appspot.com",
  messagingSenderId: "552677010661",
  appId: "1:552677010661:web:f9395d0e106e0eaba0b80c",
  measurementId: "G-9XW2SF5ZZK",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  console.log(userAuth.uid);
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
