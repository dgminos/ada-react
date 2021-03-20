import React, { FC, createContext, useState, useEffect, Dispatch, SetStateAction } from 'react'
import { user } from 'firebase'
import { firebaseAuth } from '../../utils';


type ContextType = {
    isAuthenticated?: boolean,
    setIsAuthenticated?: Dispatch<SetStateAction<boolean>>,
    user?: UserType,
    setUser?: (user: UserType) => void
}

type UserType = {
    user: {
        uid: string,
        email: string,
        displayName: string,
        refreshToken: string | null
    }
}

const AuthContext = createContext<ContextType>({})

const AuthProvider: FC = ({ children }) => {

    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState<UserType | null>(null)

    useEffect(() => {
        firebaseAuth.auth().onAuthStateChanged((userFirebase: UserType) => {
            const token = localStorage.getItem('userToken');
            // console.log(token)
            if (token && token === userFirebase.refreshToken) {
                setIsAuthenticated(true)
                setUser(userFirebase)
            }
        })
    }, [setIsAuthenticated, setUser]);

    return (
        //provee datos - comparte el estado con la app
        // value siempre recibe un objeto como dato, generalmente es un useState
        <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, user, setUser }}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthProvider, AuthContext }
