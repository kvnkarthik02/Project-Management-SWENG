import React, { createContext, useContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, resetPassword } from "firebase/auth";
import { auth } from "../firebase"

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [user, setUser] = useState();
    const [loadingAuthState, setLoadingAuthState] = useState(true);

    async function login(email, password) {
        console.log(`Sending request to Firebase with e-mail \n${email}\n${password}`);
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
        }).catch((e) => {
            console.log(e);
        })
    }

    async function signup(email, password) {
        return await createUserWithEmailAndPassword(email, password)
    }

    async function logout() {
        return await signOut(auth)
    }

    async function resetPassword(email) {
        return await auth.sendPasswordResetEmail(email)
    }
    
    // async function updateEmail(email) {
    //     return await currentUser.updateEmail(email)
    // }

    // async function updatePassword(password) {
    //     return await currentUser.updatePassword(password)
    // }


    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if(user) {
                console.log(`Auth state changed. ${user.uid}`)
                setLoadingAuthState(false);
            }
        });
        return unsubscribe;
    }, []);

    return (
        <AuthContext.Provider
            value={{
                login,
                signup,
                logout
            }}>
            {children}
        </AuthContext.Provider>
    );
}