import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';



const config = {
    apiKey: "AIzaSyBgQFQrA2YLCSo2GLz3bJdktOZxHb5pgg4",
    authDomain: "crwn-clothing-db-d8ab1.firebaseapp.com",
    databaseURL: "https://crwn-clothing-db-d8ab1.firebaseio.com",
    projectId: "crwn-clothing-db-d8ab1",
    storageBucket: "crwn-clothing-db-d8ab1.appspot.com",
    messagingSenderId: "996902356273",
    appId: "1:996902356273:web:1c6bc0a8abb4996c2d1c10",
    measurementId: "G-S63M1P27X4"
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);


  export default firebase;