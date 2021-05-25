import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyB2Y-pIyj6ieJcsc1c0s7JIzdDnfJqpg0g",
    authDomain: "i502-project.firebaseapp.com",
    projectId: "i502-project",
    storageBucket: "i502-project.appspot.com",
    messagingSenderId: "476171551119",
    appId: "1:476171551119:web:d1e691e06e1094edc58bfa",
    measurementId: "G-KLQST0EBBM"
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;