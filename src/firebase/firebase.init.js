// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_u_AyFpYcOnh5GB9gwOvNlraVIy6VOXQ",
  authDomain: "roommate-finder-30752.firebaseapp.com",
  projectId: "roommate-finder-30752",
  storageBucket: "roommate-finder-30752.firebasestorage.app",
  messagingSenderId: "881166334921",
  appId: "1:881166334921:web:dbb9e6da8f03f3e2bec618",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
