import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDOsKgtTmINOlaQ3z60wzX7zHTb2azTcPM",
    authDomain: "books-9bc9a.firebaseapp.com",
    databaseURL: "https://books-9bc9a.firebaseio.com",
    projectId: "books-9bc9a",
    storageBucket: "books-9bc9a.appspot.com",
    messagingSenderId: "189708821435",
    appId: "1:189708821435:web:017edb3f0b7929d4205a9e"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore()