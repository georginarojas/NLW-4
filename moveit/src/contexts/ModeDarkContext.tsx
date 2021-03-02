import Cookies from "js-cookie";
import React, { createContext, ReactNode, useEffect, useState } from "react";
import Switch from "react-switch";

import "../styles/components/ChallengeBox.module.css";

interface ModeDarkContextData {
  isModeDark: boolean;
}

interface ModeDarkProviderProps {
  children: ReactNode;
  isModeDark: boolean;
}

export const ModeDarkContext = createContext({} as ModeDarkContextData);

export function ModeDarkProvider({ children, ...rest }: ModeDarkProviderProps) {
  const [isModeDark, setDarkMode] = useState(rest.isModeDark ?? false);

  function handleChange() {
    setDarkMode(!isModeDark);
  }

  function toggleBodyClasses() {
    if (isModeDark) {
      document.body.classList.add("dark-mode");
      document.body.classList.remove("body");
    } else {
      document.body.classList.add("body");
      document.body.classList.remove("dark-mode");
    }
  }

  useEffect(() => {
    Cookies.set("isModeDark", String(isModeDark));
    toggleBodyClasses();
  }, [isModeDark]);

  return (
    <ModeDarkContext.Provider value={{ isModeDark }}>
      {children}
      <Switch onChange={handleChange} checked={isModeDark} />
    </ModeDarkContext.Provider>
  );
}
