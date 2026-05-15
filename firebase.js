import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyBKaxhWjB_8DFpVSXwDkz2SOa-fOCVDLaU",
  authDomain: "gv-sweet-house.firebaseapp.com",
  projectId: "gv-sweet-house",
  storageBucket: "gv-sweet-house.firebasestorage.app",
  messagingSenderId: "693251459124",
  appId: "1:693251459124:web:1732e0138d5167b41d6261"
};
const app = initializeApp(firebaseConfig);

console.log("Firebase conectado");