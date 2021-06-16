import React, { useState, createContext } from "react";

export const UserContext = createContext();

export const AdminProvider = (props) => {
  const currentUser = JSON.parse(localStorage.getItem("admin"));
  const iniateUser = currentUser ? currentUser : null;
  const [admin, setAdmin] = useState(iniateUser);

  return <AdminProvider.Provider value={[admin, setAdmin]}>{props.children}</AdminProvider.Provider>;
};
