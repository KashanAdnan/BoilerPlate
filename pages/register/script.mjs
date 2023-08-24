import { auth, db } from "../../firebase/initialize.mjs";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
import { addDoc, collection } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";

async function createAccount() {
    const name = document.querySelector("#nameForm").value;
    const email = document.querySelector("#emailForm").value;
    const password = document.querySelector("#passwordForm").value;
    createUserWithEmailAndPassword(auth, email, password)
        .then(async (data) => {
            try {
                await addDoc(collection(db, "users"), {
                    name,
                    email,
                    password
                });
                alert("Hello World")
            } catch (error) {
                console.log(error);
            }
        })

}


window.createAccount = createAccount