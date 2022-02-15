// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection } from "firebase/firestore";

// Your web app's Firebase configuration
// Api Keys Removed for privacy purposes
const firebaseConfig = {
    apiKey: "dummy",
    authDomain: "dummy",
    projectId: "dummy",
    storageBucket: "dummy",
    messagingSenderId: "dummy",
    appId: "dummy"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();

export const docs = collection(db, "antler-task-db");
export const docs_users = collection(db, "antler-task-users");

export const authentication = getAuth(app);