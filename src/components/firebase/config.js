import firebase from 'firebase'

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

const db = firebase.firestore();

export default db;