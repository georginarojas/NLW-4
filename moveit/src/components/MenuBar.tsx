import React, { ReactNode, useContext, useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

import styles from "../styles/components/MenuBar.module.css";
import { ModeDarkContext } from "../contexts/ModeDarkContext";

interface MenuBarProps {
  // children: ReactNode;
  isHomePage: boolean;
  isRankingPage: boolean;
}

export function MenuBar({ ...rest }: MenuBarProps) {
  const { isModeDark } = useContext(ModeDarkContext);

  const [isHomePage, setHomePage] = useState(rest.isHomePage ?? false);
  const [isRankingPage, setRankingPage] = useState(rest.isRankingPage ?? false);

  const [colorSignOut, setSignOut] = useState("Darkgray");
  const [colorImg, setImg] = useState(isModeDark ? "modeDark" : "modeInitial");

  useEffect(() => {
    if (isModeDark) {
      setImg("modeDark");
    } else {
      setImg("modeInitial");
    }
  }, [isModeDark]);

  function handleRankingSubmit(e) {
    e.preventDefault();
    setHomePage(false);
    setRankingPage(true);
  }

  function handleHomeSubmit(e) {
    e.preventDefault();
    setRankingPage(false);
    setHomePage(true);
  }

  function handleSingOutSubmit(e) {
    e.preventDefault();
    if (isModeDark) {
        setSignOut("midnightblue");
    } else {
      setSignOut("royalblue");
    }
  }

  return (
    <div
      id={styles.containerMenu}
      className={isModeDark ? `${styles.containerDark}` : `${styles.container}`}
    >
      <div>
        <img src={`../icons/${colorImg}/logo.svg`} alt="simbol" />
      </div>
      <div
        id={styles.menuButton}
        className={
          isModeDark ? `${styles.menuButtonDark}` : `${styles.menuButtonNormal}`
        }
      >
        <ul>
          <li>
            {isHomePage ? (
              <button disabled>
                <div></div>
                <img src={`../icons/${colorImg}/home-active.svg`} alt="home" />
              </button>
            ) : (
              <button className={styles.homeBtn} onClick={handleHomeSubmit}>
                <img src={`../icons/${colorImg}/home.svg`} alt="home" />
              </button>
            )}
          </li>
          <li>
            {isRankingPage ? (
              <button disabled>
                <div></div>
                <img
                  src={`../icons/${colorImg}/award-active.svg`}
                  alt="award"
                />
              </button>
            ) : (
              <button
                className={styles.rankingBtn}
                onClick={handleRankingSubmit}
              >
                <img src={`../icons/${colorImg}/award.svg`} alt="award" />
              </button>
            )}
          </li>
        </ul>
      </div>
      <footer>
        <button onClick={handleSingOutSubmit}>
          <FontAwesomeIcon
            icon={faSignOutAlt}
            color={colorSignOut}
            size={"2x"}
          />
        </button>
      </footer>
    </div>
  );
}
