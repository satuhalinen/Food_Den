import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';

// Food Den's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAmWVwbvRu6lna8aAQKtpahwUFQmW9quz4",
    authDomain: "food-den.firebaseapp.com",
    projectId: "food-den",
    storageBucket: "food-den.appspot.com",
    messagingSenderId: "775188914294",
    appId: "1:775188914294:web:378061acfdbcec98efbf57"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app);