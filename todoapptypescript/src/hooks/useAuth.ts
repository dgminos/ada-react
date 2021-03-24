import { AuthContext } from "../contexts/AuthProvider"
import { useState, useContext, Dispatch, SetStateAction } from "react"
import { useHistory } from "react-router-dom"
import { firebaseAuth } from '../utils/firebase-config'
import user from 'firebase'

type ContextType = {
    isAuthenticated?: boolean,
    setIsAuthenticated?: Dispatch<SetStateAction<boolean>>,
    user?: user.User,
    setUser: null | ((user: user.User) => void)
}

const useAuth = () => {

    const [authMsgError, setAuthMsgError] = useState('')
    const { isAuthenticated, setIsAuthenticated, user, setUser } = useContext<ContextType>(AuthContext)

    const history = useHistory()


    const login = (email: string, password: string) => {
        firebaseAuth.auth().signInWithEmailAndPassword(email, password)
            .then(({ user }) => {
                if (user) setUser(user)

                setIsAuthenticated(true)
                localStorage.setItem('userToken', user.refreshToken)
                history.go(0)
            })
            .catch(e => {
                switch (e.code) {
                    case "auth/invalid-email": setAuthMsgError('Formato de email incorrecto')
                        break
                    case "auth/weak-password": setAuthMsgError('La contraseña debe tener 6 caracteres o más')
                        break
                    case "auth/wrong-password": setAuthMsgError('La contraseña es incorrecta o el usuario no está registrado')
                        break
                    default: setAuthMsgError("La web tiene un incoveniente, intente más tarde")
                }
            })
    }

    const register = (email: string, password: string, nombreCompleto: string) => {

        firebaseAuth.auth().createUserWithEmailAndPassword(email, password)
            .then(({ user }) => {
                setUser(user)
                user.updateProfile({ displayName: nombreCompleto })
            })
            .catch(e => {
                switch (e.code) {
                    case "auth/invalid-email": setAuthMsgError('Formato de email incorrecto')
                        break
                    case "auth/weak-password": setAuthMsgError('La contraseña debe tener 6 caracteres o más')
                        break
                    default: setAuthMsgError("La web tiene un incoveniente, intente más tarde")
                }
            })
    }

    const logout = () => {
        firebaseAuth.auth().signOut()
            .then(() => {
                localStorage.removeItem('userToken')
                setIsAuthenticated(false)
                history.go(0)
            }).catch((error) => {
                console.error(error)
            });

    }




    return { login, register, logout, user, isAuthenticated, authMsgError }
}

export { useAuth }