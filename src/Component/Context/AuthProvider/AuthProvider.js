import React from "react";
import { createContext } from "react";
import useFirebase from "../../Hooks/useFirebase";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const AllContext = useFirebase();
  console.log(AllContext, "this it ");
  return <AuthContext.Provider value={AllContext}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
