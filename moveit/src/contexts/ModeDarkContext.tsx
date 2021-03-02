import React, { createContext, ReactNode, useState } from "react";
import Switch from "react-switch";

import "../styles/components/ChallengeBox.module.css";

interface ModeDarkContextData {
  isModeDark: boolean;
}

interface ModeDarkProviderProps {
  children: ReactNode;
}

export const ModeDarkContext = createContext({} as ModeDarkContextData);

export function ModeDarkProvider({ children }: ModeDarkProviderProps) {
  const [isModeDark, setDarkMode] = useState(false);
  const [checked, setChecked] = useState(false);

  function handleChange() {
    setChecked(!checked);
    setDarkMode(!isModeDark);
    toggleBodyClasses();
  }

  function toggleBodyClasses() {
    document.body.classList.toggle("dark-mode");
  }

  return (
    <ModeDarkContext.Provider value={{ isModeDark }}>
      {children}
      <Switch onChange={handleChange} checked={checked} />
    </ModeDarkContext.Provider>
  );
}
