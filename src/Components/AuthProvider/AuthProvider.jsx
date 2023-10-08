// eslint-disable-next-line no-unused-vars
import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from '../../Firebase/firebase.config';

export const AuthContext = createContext(null);


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState('');
    const [loading, setLoading] = useState(true);
    const provider = new GoogleAuthProvider();
    
    // create user
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    
    // sign in user
    const signUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // logging out
    const logoutUser = () =>{
        setLoading(true)
        return signOut(auth);
    }

    // google popup
    const googlePopup = () =>{
        setLoading(true)
        return signInWithPopup(auth,provider);
    }
    
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            // console.log("user exist ",currentUser)
            setUser(currentUser);
            setLoading(false)
        })
        return () =>{
            unSubscribe();
        };
    },[])
    
    const authInfo = {
        user,
        createUser,
        signUser,
        logoutUser,
        loading,
        googlePopup
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;