// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDiy-AllNitgEWH26mlIffPCnudFmQ2xr8",
  authDomain: "propylon-web-app.firebaseapp.com",
  projectId: "propylon-web-app",
  storageBucket: "propylon-web-app.appspot.com",
  messagingSenderId: "315265561029",
  appId: "1:315265561029:web:f0440e57397bcf8a479bac"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

auth.onAuthStateChanged((user) => {
  if (user) {
    console.log(user);
  }
  else {
    console.log(`No user signed in.`)
  }
})
// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);