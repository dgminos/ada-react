import React, { FC, createContext, useState, useEffect, Dispatch, SetStateAction } from 'react'
import { firebaseAuth } from '../../utils';


type ContextType = {
    isAuthenticated?: boolean,
    setIsAuthenticated?: Dispatch<SetStateAction<boolean>>
}

// type UserType = {
//     uid: string,
//     email: string,
//     displayName: string,
//     refreshToken: string



// }



const AuthContext = createContext<ContextType>({})

const AuthProvider: FC = ({ children }) => {

    const [isAuthenticated, setIsAuthenticated] = useState(false);
    // const [user, setUser] = useState<{} | null>()

    // useEffect(() => {
    //     firebaseAuth.auth().onAuthStateChanged((user) => {
    //         const token = localStorage.getItem('userToken');
    //         // console.log(token)
    //         if (token && token === user.refreshToken) {
    //             setIsAuthenticated(true)
    //             setUser(user)
    //         }
    //     })
    // }, [setIsAuthenticated, setUser]);

    return (
        //provee datos - comparte el estado con la app
        // value siempre recibe un objeto como dato, generalmente es un useState
        <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthProvider, AuthContext }
