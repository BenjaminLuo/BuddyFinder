import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../Firebase/firebase";

export const AuthContext = React.createContext();

const AuthDetails = ({ children }) => {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
      console.log('test')
    });

    return () => {
      listen();
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{
        authUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthDetails;