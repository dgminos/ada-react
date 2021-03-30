import { AuthContext } from "../contexts/AuthProvider";
import { useState, useContext } from "react";
import { firebaseAuth } from "../utils/firebase-config";

const useAuth = () => {
  const [authMsgError, setAuthMsgError] = useState("");
  const { setIsAuthenticated, user, setUser } = useContext(AuthContext);

  const login = (email: string, password: string) => {
    firebaseAuth
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((response: firebaseAuth.auth.UserCredential) => {
        console.log(response);
        setUser(response.user);
        setIsAuthenticated(true);
        if (user) {
          localStorage.setItem("userToken", user.refreshToken);
        }
      })
      .catch((e) => {
        switch (e.code) {
          case "auth/invalid-email":
            setAuthMsgError("Formato de email incorrecto");
            break;
          case "auth/weak-password":
            setAuthMsgError("La contraseña debe tener 6 caracteres o más");
            break;
          case "auth/wrong-password":
            setAuthMsgError(
              "La contraseña es incorrecta o el usuario no está registrado"
            );
            break;
          default:
            setAuthMsgError("La web tiene un incoveniente, intente más tarde");
        }
      });
  };

  const register = (
    email: string,
    password: string,
    nombreCompleto: string
  ) => {
    firebaseAuth
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((response: firebaseAuth.auth.UserCredential) => {
        setUser(response.user);
        response?.user?.updateProfile({ displayName: nombreCompleto });
      })
      .catch((e) => {
        switch (e.code) {
          case "auth/invalid-email":
            setAuthMsgError("Formato de email incorrecto");
            break;
          case "auth/weak-password":
            setAuthMsgError("La contraseña debe tener 6 caracteres o más");
            break;
          default:
            setAuthMsgError("La web tiene un incoveniente, intente más tarde");
        }
      });
  };

  const logout = () => {
    firebaseAuth
      .auth()
      .signOut()
      .then(() => {
        localStorage.removeItem("userToken");
        setIsAuthenticated(false);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return { login, register, logout, authMsgError };
};

export { useAuth };
