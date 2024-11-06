import React, { createContext, useEffect, useState } from 'react';
import {auth} from '../../firebase/firebase.config';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut , FacebookAuthProvider } from 'firebase/auth';
import { GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();
const fbprovider = new FacebookAuthProvider();
export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [loading, setLoading] = useState(true);
    const [user , setUser] = useState(null);

    const googlePopup = () => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

    const facebookPopup = () => {
        setLoading(true);
        return signInWithPopup(auth, fbprovider)
    }
    const createUser = (email , password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const logout = () =>{
        setLoading(true)
        setUser(null);
        return signOut(auth);
    }

    const signInUser = (email , password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (crruser) => {
            if (crruser) {
                console.log("This is current user",crruser);
                setUser(crruser);
            } else {
                console.log('no user');
            }
            setLoading(false);
        });
          return ()=>{
            unSubscribe();
          }
    },[])

   

    const authInfo = {
        user,
        loading,
        createUser,
        signInUser,
        logout,
        setLoading,
        googlePopup,
        facebookPopup,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;