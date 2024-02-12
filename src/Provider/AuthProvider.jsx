/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import useAxiosSecure from "../Hooks/useAxiosSecure";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const axiosSecure = useAxiosSecure();

  // console.log(user);
  const signInUser = () => {
    setLoading(true);
  };

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn) {
      axiosSecure
        .get("/loggedInUser")
        .then((res) => {
          setLoading(false)
          setUser(res.data);
          // console.log(res.data);
        })
    }
  }, []);

  const authInfo = {
    user,
    loading,
    setLoading,
    signInUser,
    setUser,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
