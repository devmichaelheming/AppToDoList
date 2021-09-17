import firebase from 'firebase'
import "firebase/storage"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDeCV5hNPyVapxzPlvWqMi9hp9gmFQG2OA",
  authDomain: "apptodolist-61f62.firebaseapp.com",
  projectId: "apptodolist-61f62",
  storageBucket: "apptodolist-61f62.appspot.com",
  messagingSenderId: "1036194114772",
  appId: "1:1036194114772:web:28ee63022dcb8477d61f41"
};
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.firestore();
export default database