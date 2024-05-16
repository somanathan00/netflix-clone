// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBnwqKUc29Q9FJEcVL3rVBQRKPf5_kLf2c",
    authDomain: "netflix-clone-abc10.firebaseapp.com",
    projectId: "netflix-clone-abc10",
    storageBucket: "netflix-clone-abc10.appspot.com",
    messagingSenderId: "186326945743",
    appId: "1:186326945743:web:50c8c2ac35c88061078cba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signUp = async (name, email, password) => {
    try {
        const response = await createUserWithEmailAndPassword(auth, email, password);
        const user = response.user;
        await addDoc(collection(db, "users"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        });
    } catch (error) {
        if (error.code === 'auth/email-already-in-use') {
            toast.error('This email is already in use. Please try with a different email.');
        } else {
            console.log(error);
            toast.error('An error occurred during sign up.');
        }
    }
};

const login = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.log(error);
        toast.error("Error during login");
    }
};

const logout = async () => {
    try {
        await signOut(auth);
    } catch (error) {
        console.log(error);
        toast.error("Error during logout");
    }
};

export { auth, signUp, login, logout, db };
