import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyA561nM_y77y7HQnufDpxZYl-5P1rwGstI",
  authDomain: "harry-potter-e7f53.firebaseapp.com",
  projectId: "harry-potter-e7f53",
  storageBucket: "harry-potter-e7f53.firebasestorage.app",
  messagingSenderId: "169853777449",
  appId: "1:169853777449:web:ed50ba883f1ab541f40e38"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc, serverTimestamp };
