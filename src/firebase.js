// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAh5o4U0Xx-qlg3iF42jR4XZz4E-4dFq6U",
    authDomain: "antler-task.firebaseapp.com",
    projectId: "antler-task",
    storageBucket: "antler-task.appspot.com",
    messagingSenderId: "589035664453",
    appId: "1:589035664453:web:4f3db0a55c873da4d81f2c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();

export const docs = collection(db, "antler-task-db");
export const docs_users = collection(db, "antler-task-users");

export const authentication = getAuth(app);