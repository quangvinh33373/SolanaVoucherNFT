// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApn6WHL7ONYrT_YOozoKWMxkrdpGAYMP4",
  authDomain: "duanthuctap-2c489.firebaseapp.com",
  databaseURL: "https://duanthuctap-2c489-default-rtdb.firebaseio.com",
  projectId: "duanthuctap-2c489",
  storageBucket: "duanthuctap-2c489.appspot.com",
  messagingSenderId: "166672517134",
  appId: "1:166672517134:web:2ab8bbda4eee5fd27d945f",
  measurementId: "G-VC5ZXZGB08"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);