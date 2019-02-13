import firebase from 'firebase/app';
import 'firebase/firestore';

// Credenciales
firebase.initializeApp({
    apiKey: "AIzaSyDbnB68clKiG9Zec7f-jEqXrOPU5_5-g20",
    authDomain: "true-home-4dcfb.firebaseapp.com",
    databaseURL: "https://true-home-4dcfb.firebaseio.com",
    projectId: "true-home-4dcfb",
    storageBucket: "true-home-4dcfb.appspot.com",
    messagingSenderId: "115760310833"
});

// Variable de acceso a firestore
let base = firebase.firestore();

export default base;