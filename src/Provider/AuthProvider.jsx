/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";


export const AuthContext = createContext(null);


const AuthProvider = ({ children }) => {
  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  console.log(user);
  const createUser = async (userData) => {
    setLoading(true);
    const response = await fetch("http://localhost:5000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      return response.json();
  };

  const signInUser = () => {
    setLoading(true);
  };

  const logOut = () => {
    setLoading(true);
  };


  useEffect(() => {
    if (user) {
      setLoading(false);
    }
  }, [user]);

  const authInfo = {
    user,
    loading,
    createUser,
    signInUser,
    setUser,
    logOut,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
