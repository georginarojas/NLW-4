import Cookies from "js-cookie";
import React, { createContext, ReactNode, useEffect, useState } from "react";
import Switch from "react-switch";

import "../styles/components/ChallengeBox.module.css";
import styles from "../styles/components/SwitchModeDark.module.css";

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
      <div className={styles.switchModeDark}>
        <Switch
          onChange={handleChange}
          checked={isModeDark}
          height={15}
          width={48}
          handleDiameter={20}
          boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
          activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
        />
      </div>
    </ModeDarkContext.Provider>
  );
}
