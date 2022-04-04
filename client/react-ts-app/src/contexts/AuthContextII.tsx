import React, { useEffect, useState } from "react";
import { auth } from "../firebase"

type ContextProps = {
    user: any;
    authenticated: boolean;
    setUser: any;
    loadingAuthState: boolean;
}

export const AuthContext = React.createContext<Partial<ContextProps>>({});

export const AuthProvider = ({ children }: any) => {
    const [user, setUser] = useState(null as any);
    const [loadingAuthState, setLoadingAuthState] = useState(true);

    // function login(email: any, password: any) {
    //     console.log(`Sending request to Firebase with e-mail ${email} & pass ${password}`)
    //     return auth.signInWithEmailAndPassword(email, password)
    // }

    useEffect(() => {
        auth.onAuthStateChanged((user: any) => {
            setUser(user);
            setLoadingAuthState(false);
        });
    }, []);

    return (
        <AuthContext.Provider
        value={{
            user,
            authenticated: user !== null,
            setUser,
            loadingAuthState
        }}>

            { children }
        </AuthContext.Provider>
    );
}