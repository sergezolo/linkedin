import firebase from 'firebase/app';
import 'firebase/firestore';
import '@firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBbnH0SxQ4ByURNQdrgLFLmuYMkBtotbU0",
  authDomain: "linkedin-9fd83.firebaseapp.com",
  projectId: "linkedin-9fd83",
  storageBucket: "linkedin-9fd83.appspot.com",
  messagingSenderId: "442910018453",
  appId: "1:442910018453:web:951045786449f17796449c",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth, };