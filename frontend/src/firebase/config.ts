// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_APP_APIKEY,
//   authDomain: import.meta.env.VITE_APP_AUTHDOMAIN,
//   projectId: import.meta.env.VITE_APP_PROJECTID,
//   storageBucket: import.meta.env.VITE_APP_STORAGEBUCKET,
//   messagingSenderId: import.meta.env.VITE_APP_MESSAGESENDERID,
//   appId: import.meta.env.VITE_APP_APPID,
//   measurementId: import.meta.env.VITE_APP_MEASUREMENTID
// };
const firebaseConfig = {
     apiKey: "AIzaSyBR7zyykS7ahC8fXYS1St9WFv6vxZdAMwo",
     authDomain: "dankmedia-f5e23.firebaseapp.com",
     projectId: "dankmedia-f5e23",
     storageBucket: "dankmedia-f5e23.appspot.com",
     messagingSenderId: "753551543736",
     appId: "1:753551543736:web:24dc0c9827ddd6695bd34d",
     measurementId: "G-G9MZ47V96Y"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app);
export const auth = getAuth(app)
export const AuthProvider = new GoogleAuthProvider();




export default app;