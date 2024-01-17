import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyD9HVYj4gIAE_iEW7GNNJsjMLkcCwhusX0",
  authDomain: "ptn-pharmacy.firebaseapp.com",
  projectId: "ptn-pharmacy",
  storageBucket: "ptn-pharmacy.appspot.com",
  messagingSenderId: "692431084036",
  appId: "1:692431084036:web:4a0f208ead5118053bf351",
  measurementId: "G-3HEZ05GDF3",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
