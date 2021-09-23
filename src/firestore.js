import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyB6P0fUisqBqTKJWDzlzlGnif4RgRZf1cc",
    authDomain: "linkedin-clone-27e84.firebaseapp.com",
    projectId: "linkedin-clone-27e84",
    storageBucket: "linkedin-clone-27e84.appspot.com",
    messagingSenderId: "664181352390",
    appId: "1:664181352390:web:21753f7e8ea3d3dcaab4c7"
}; 

const firebaseApp=firebase.initializeApp(firebaseConfig); 
const db = firebaseApp.firestore();
const auth=firebaseApp.auth();

export { db, auth };