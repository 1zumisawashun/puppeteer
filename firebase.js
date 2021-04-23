import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

if (!firebase.apps.length) {
  const config = {
    apiKey: "AIzaSyDsn2RJvn0-QvFaXRAIMFfbgADRhe0f3G4",
    authDomain: "puppeteer-466fa.firebaseapp.com",
    projectId: "puppeteer-466fa",
    storageBucket: "puppeteer-466fa.appspot.com",
    messagingSenderId: "691021288509",
    appId: "1:691021288509:web:140e5c4dd58d33eee14654",
    measurementId: "G-PKHLZSS5KY"
  };
  firebase.initializeApp(config);
}

const db = firebase.firestore();
export { firebase, db };

// xporet const add = collection().doc
// のようにデータをあらかじめ決めることで省略で書くことができる
