import React, { useRef, useState } from "react";
import { useContext } from "react";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [showMenuList, setShowMenuList] = useState(false);
  const menuListRef = useRef(null);
  const menubarRef = useRef(null);
  return (
    <AppContext.Provider
      value={{ menuListRef, menubarRef, showMenuList, setShowMenuList }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
