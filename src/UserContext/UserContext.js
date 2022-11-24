import React, { createContext, useState } from 'react';
import { getAuth } from "firebase/auth";
import app from '../Firebase/Firebase.config';


export const Authcontext = createContext()
const auth = getAuth(app)

const UserContext = ({ children }) => {

    const [user, setUser] = useState('')





    const info = {
        user
    }

    return (
        <Authcontext.Provider value={info}>
            {children}
        </Authcontext.Provider>
    );
};

export default UserContext;