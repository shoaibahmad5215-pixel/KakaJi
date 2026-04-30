import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-analytics.js";
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-storage.js";
const firebaseConfig = {
    apiKey: "AIzaSyC4T3aCNIKbkHHHJfn2d8sDoJaRbjV4x-g",
    authDomain: "kakaji-e403a.firebaseapp.com",
    projectId: "kakaji-e403a",
    storageBucket: "kakaji-e403a.firebasestorage.app",
    messagingSenderId: "407947211427",
    appId: "1:407947211427:web:cbbee00accdb97ae4fc516",
    measurementId: "G-FK5L49YEQH"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);
//یہاں سے اوپر خطرہ ہے اوپر والے کوڈ کو نہیں چھیڑنا
// یہاں سے نیچے لیگوئج باکس کا کوڈ شروع ہو رہا ہے
