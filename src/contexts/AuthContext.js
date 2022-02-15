
import React, { useContext, useState, useEffect } from "react"
import { authentication } from "../firebase"
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import {docs_users} from "../firebase";
import { addDoc } from "firebase/firestore"

const provider = new GoogleAuthProvider()

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)


    function login() {
        return signInWithPopup(authentication, provider)

    }

    function logout() {
        return signOut(authentication)
    }

    useEffect(() => {
        const unsubscribe = authentication.onAuthStateChanged(user => {
            setCurrentUser(user)
            async function addUser(){
                if(user && user.email){
                    const payload = {email: user.email}
                    await addDoc(docs_users, payload);
                }
            }
            addUser();
            setLoading(false)
        })

        return unsubscribe
    }, [])

    const value = {
        currentUser,
        login,
        logout,
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}