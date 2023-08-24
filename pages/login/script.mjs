import { auth } from "../../firebase/initialize.mjs";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";

const signIn = async () => {
    const email = document.querySelector("#emailForm");
    const password = document.querySelector("#passwordForm");
    const loggedIn = await signInWithEmailAndPassword(auth, email.value, password.value);
    if (loggedIn) {
        alert("User Logged In")
    } else {
        console.error(loggedIn);
    }
}

window.signIn = signIn
