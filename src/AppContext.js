import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [variable, setVariable] = useState({userId:"",groupId:""});

  const updateVariable = (newVariable) => {
    setVariable(newVariable);
  };

  return (
    <AppContext.Provider value={{ variable, updateVariable }}>
      {children}
    </AppContext.Provider>
  );
};
