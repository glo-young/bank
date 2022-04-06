import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBxN_li-PDFA3E2J9lhkbBUVkohf11wnp4",
    authDomain: "capstone-d676a.firebaseapp.com",
    projectId: "capstone-d676a",
    storageBucket: "capstone-d676a.appspot.com",
    messagingSenderId: "111832625124",
    appId: "1:111832625124:web:adefe15c8aa102cf26e1f1"
  };

  //initialize firebase
  const app = initializeApp(firebaseConfig);

  export const auth = getAuth(app)