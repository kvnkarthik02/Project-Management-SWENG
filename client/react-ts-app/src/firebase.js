// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDiy-AllNitgEWH26mlIffPCnudFmQ2xr8",
  authDomain: "propylon-web-app.firebaseapp.com",
  projectId: "propylon-web-app",
  storageBucket: "propylon-web-app.appspot.com",
  messagingSenderId: "315265561029",
  appId: "1:315265561029:web:f0440e57397bcf8a479bac"
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();


// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);