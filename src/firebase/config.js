import firebase from "firebase/app";
import 'firebase/storage';
import 'firebase/firestore'

var firebaseConfig = {
  apiKey: "AIzaSyAcOkJv-jY0Y0TYM9tS5yFwUhQnSD-hMEc",
  authDomain: "dew-firegallry.firebaseapp.com",
  projectId: "dew-firegallry",
  storageBucket: "dew-firegallry.appspot.com",
  messagingSenderId: "650316873168",
  appId: "1:650316873168:web:7eb134ebd58b4b97edcdd5",
};
//Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timeStamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timeStamp };
