import { initializeApp } from "firebase/app";

import React from 'react'

function FirebaseConfig() {
    const firebaseConfig = {
        apiKey: "AIzaSyAeFXUoLdau7MbNwtDmymkuZnCqP-zdRkI",
        authDomain: "where-s-waldo-8942c.firebaseapp.com",
        projectId: "where-s-waldo-8942c",
        storageBucket: "where-s-waldo-8942c.appspot.com",
        messagingSenderId: "279284232633",
        appId: "1:279284232633:web:174022b89d1a30b3454668"
      };
    
    
    const app = initializeApp(firebaseConfig);

    const db = getFirestore(app);
    
  return db
}

export default FirebaseConfig
