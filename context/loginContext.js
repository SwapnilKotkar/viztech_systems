import React, { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import toast from "react-hot-toast";

const Context = createContext();

export const LoginContext = ({ children }) => {
  const router = useRouter();
  const [loginStatus, setLoginStatus] = useState(false);
  const [tokenValue, setTokenValue] = useState();

  useEffect(() => {
    const tokenData = localStorage.getItem("signin_token");
    if (tokenData) {
      setLoginStatus(true);
      setTokenValue(tokenData);
    }
  }, [router.query]);

  const handleLogout = () => {
    localStorage.removeItem("signin_token");
    setLoginStatus(false);
    toast.success('logout success');
  };

  return (
    <Context.Provider value={{ loginStatus, tokenValue, handleLogout }}>
      {children}
    </Context.Provider>
  );
};
export const useLoginContext = () => useContext(Context);
