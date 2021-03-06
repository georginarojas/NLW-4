import { useContext, useEffect, useState } from "react";
import { CountdownContext } from "../contexts/CountdownContext";
import { ModeDarkContext } from "../contexts/ModeDarkContext";

import styles from "../styles/components/Countdown.module.css";

export function Countdown() {
  const {
    minutes,
    seconds,
    hasFinished,
    isActive,
    resetCountdown,
    starCountdown,
  } = useContext(CountdownContext);

  const { isModeDark } = useContext(ModeDarkContext);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");
  const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split("");

  return (
    <div>
      <div
        id={styles.countdownContainer}
        className={
          isModeDark
            ? `${styles.countdownContainerModeDark}`
            : `${styles.countdownContainer}`
        }
      >
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      {hasFinished ? (
        <button
          disabled
          id={styles.countdownButton}
          className={
            isModeDark? 
              `${styles.countdownButtonModeDark}`
              : `${styles.countdownButton}`
          }
        >
          Ciclo encerrado
          <img src="../icons/check.svg" />
        </button>
      ) : (
        <>
          {isActive ? (
            <button
              type="button"
              id={styles.countdownButton}
              // className={`${styles.countdownButton} ${styles.countdownButtonAtive}`}
              className={isModeDark? 
                `${styles.countdownButtonAtiveModeDark}`
                : `${styles.countdownButtonAtive}`}
              onClick={resetCountdown}
            >
              Abandonar ciclo
            </button>
          ) : (
            <button
              type="button"
              id={styles.countdownButton}
              className={styles.countdownButton}
              onClick={starCountdown}
            >
              Iniciar ciclo
            </button>
          )}
        </>
      )}
    </div>
  );
}
