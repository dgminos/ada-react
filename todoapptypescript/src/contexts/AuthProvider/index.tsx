import React, {
  FC,
  createContext,
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
} from "react";
import { firebaseAuth } from "../../utils";

type ContextType = {
  isAuthenticated: boolean;
  setIsAuthenticated: Dispatch<SetStateAction<boolean>>;
  user: firebaseAuth.User | null;
  setUser: Dispatch<SetStateAction<firebaseAuth.User | null>>;
};

const AuthContext = createContext<ContextType>({
  isAuthenticated: false,
  setIsAuthenticated: () => false,
  user: null,
  setUser: () => null,
});

const AuthProvider: FC = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<firebaseAuth.User | null>(null);

  useEffect(() => {
    firebaseAuth
      .auth()
      .onAuthStateChanged((userFirebase: firebaseAuth.User | null) => {
        const token = localStorage.getItem("userToken");
        // console.log(token)
        if (token && token === userFirebase!.refreshToken) {
          setIsAuthenticated(true);
          setUser(userFirebase);
        }
      });
  }, [setIsAuthenticated, setUser]);

  return (
    //provee datos - comparte el estado con la app
    // value siempre recibe un objeto como dato, generalmente es un useState
    <AuthContext.Provider
      value={{ isAuthenticated, setIsAuthenticated, user, setUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
