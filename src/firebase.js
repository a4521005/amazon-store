import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyARLIfJ5bUHCJyUSfjTeJK6Z5tgRPsa1bI",
    authDomain: "clone-54840.firebaseapp.com",
    projectId: "clone-54840",
    storageBucket: "clone-54840.appspot.com",
    messagingSenderId: "642215818735",
    appId: "1:642215818735:web:af4a26567549630472721a"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};