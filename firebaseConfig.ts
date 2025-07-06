import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDI5XMsOjMnBaL-SWB4eguR0zh11BZAMcc",
  authDomain: "macro-tracker-48be9.firebaseapp.com",
  projectId: "macro-tracker-48be9",
  storageBucket: "macro-tracker-48be9.firebasestorage.app",
  messagingSenderId: "715802054576",
  appId: "1:715802054576:web:1a7a63c2100bc5fc0e5075"
};

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export {db}