
import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
   apiKey: "AIzaSyDDmjU3NSNi9dTxMJgFxZGTIHkoV8uMX3s",
   authDomain: "sem5-project.firebaseapp.com",
   projectId: "sem5-project",
   storageBucket: "sem5-project.appspot.com",
   messagingSenderId: "533394610185",
   appId: "1:533394610185:web:a486a9d1aa79bddecd00d8",
   measurementId: "G-4BLNXEGXR3"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth } 