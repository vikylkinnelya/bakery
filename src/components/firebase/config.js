import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/analytics';
import 'firebase/app-check';
import 'firebase/storage';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyC5lbLmUY6ZRE66CAOP8Vs2GAzKk1DZIco",
    authDomain: "bakery-23677.firebaseapp.com",
    databaseURL: "https://bakery-23677-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "bakery-23677",
    storageBucket: "bakery-23677.appspot.com",
    messagingSenderId: "564913606518",
    appId: "1:564913606518:web:84b6d26ad01aa935737457",
    measurementId: "G-6KVBZBSKXS"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
firebase.analytics()

const appCheck = firebaseApp.appCheck();
// Pass your reCAPTCHA v3 site key (public key) to activate(). Make sure this
// key is the counterpart to the secret key you set in the Firebase console.
appCheck.activate('6LduvnYbAAAAAGcgOBsop6v2qZ4XNCU8IN9lU2EW');


const db = firebaseApp.firestore();

const storage = firebaseApp.storage().ref();

const auth= firebase.auth().signInAnonymously()








export { db, storage, auth };