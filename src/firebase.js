
// import { initializeApp } from "firebase/app";
//  import { getAnalytics } from "firebase/analytics";
// import { getAuth} from "firebase/auth";
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   databaseURL:process.env.REACT_APP__DATABASE_URL,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket:process.env.REACT_APP_STORAGE_BUCKET ,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//   appId:process.env.RAECT_APP_APP_ID ,
//   measurementId: process.env.REACT_APP_MEASUREMENT_ID
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// const auth=getAuth(app);
// export  {auth}; 
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';
const firebaseConfig = {
  apiKey: "AIzaSyCE44dacSKTTzbZLXRsQDOl_oEQVrGhmDA",
  authDomain: "messageapp-5d5a5.firebaseapp.com",
  projectId: "messageapp-5d5a5",
  storageBucket: "messageapp-5d5a5.appspot.com",
  messagingSenderId: "477899909522",
  appId: "1:477899909522:web:dc130b361e558b87f1394b",
  measurementId: "G-GJN7FH1N87"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
export { auth, db, storage }; 
