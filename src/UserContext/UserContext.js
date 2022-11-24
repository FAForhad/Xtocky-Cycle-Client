import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import app from '../Firebase/Firebase.config';


export const Authcontext = createContext()
const auth = getAuth(app)

const UserContext = ({ children }) => {

    const [user, setUser] = useState('')

    const googleSingIn = new GoogleAuthProvider()

    const googleLogin = () => {
        return signInWithPopup(auth, googleSingIn)
    }

    const register = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile)
    }

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const info = {
        user,
        register,
        updateUserProfile,
        googleLogin,
        signInUser
    }

    return (
        <Authcontext.Provider value={info}>
            {children}
        </Authcontext.Provider>
    );
};

export default UserContext;