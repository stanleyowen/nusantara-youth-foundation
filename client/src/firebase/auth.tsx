import React, { useEffect, useState, useContext, createContext } from "react";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import firebaseApp from "./config";

const auth = getAuth(firebaseApp);

const AuthContext = createContext({});
const useAuthContext = () => useContext(AuthContext);
const AuthContextProvider = ({ children }: any) => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};

export { AuthContext, useAuthContext, AuthContextProvider };
