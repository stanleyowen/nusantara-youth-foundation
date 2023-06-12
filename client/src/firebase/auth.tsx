import React, { useEffect } from "react";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import firebaseApp from "./config";

const auth = getAuth(firebaseApp);

const AuthContext = React.createContext({});
const useAuthContext = () => React.useContext(AuthContext);
const AuthContextProvider = ({ children }: any) => {
  const [user, setUser] = React.useState<any>(null);
  const [loading, setLoading] = React.useState<boolean>(true);

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
