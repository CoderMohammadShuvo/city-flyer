import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDK23_wbl34jBDkMkwspKZRoGI6bDR2iGI",
  authDomain: "city-flyers.firebaseapp.com",
  projectId: "city-flyers",
  storageBucket: "city-flyers.appspot.com",
  messagingSenderId: "568847859115",
  appId: "1:568847859115:web:0fb684936ac02108e226ee",
  measurementId: "G-V9D71750X8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
