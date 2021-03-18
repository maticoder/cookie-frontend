import React, { useState, createContext } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    id: -1,
    name: null,
    authenticated: false,
  });

  const loginUser = (token) => {
    localStorage.setItem("token", token);

    setUser({
      id: 1,
      name: "john",
      authenticated: true,
    });
  };

  const logoutUser = () => {
    localStorage.removeItem("token");

    setUser({
      ...user,
      authenticated: false,
    });
  };

  return (
    <UserContext.Provider
      value={{
        user,
        loginUser,
        logoutUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
