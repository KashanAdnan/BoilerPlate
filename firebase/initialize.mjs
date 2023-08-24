import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-storage.js";

const firebaseConfig = {
    apiKey: "AIzaSyCKmO_P2Mx3ZFqSMlQis1CooGO9vucRQeE",
    authDomain: "boilerplate-e18b1.firebaseapp.com",
    projectId: "boilerplate-e18b1",
    storageBucket: "boilerplate-e18b1.appspot.com",
    messagingSenderId: "34727198824",
    appId: "1:34727198824:web:d08d5d2d63aa6f1b243bdd",
    measurementId: "G-JGT7Q0RNZG"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, analytics, auth, db, storage }