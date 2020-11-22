import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBXjma3FYT3O-isA8_qzWDpsiBSmOtZD8M",
    authDomain: "td-app-1fccc.firebaseapp.com",
    databaseURL: "https://td-app-1fccc.firebaseio.com",
    projectId: "td-app-1fccc",
    storageBucket: "td-app-1fccc.appspot.com",
    messagingSenderId: "336043525279",
    appId: "1:336043525279:web:bef8575fc56c26276d4eaa",
    measurementId: "G-E6G9LH7T1B"
});

const db = firebaseApp.firestore();

export default db;