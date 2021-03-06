import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import { ModeDarkContext } from "../contexts/ModeDarkContext";
import styles from "../styles/components/Profile.module.css";

export function Profile() {
  const { level } = useContext(ChallengesContext);
  const { isModeDark } = useContext(ModeDarkContext);
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/georginarojas.png" alt="Georgina Rojas" />
      <div>
        <strong
          className={
            isModeDark?
              `${styles.profileContainerStrongModeDark}`
              : `${styles.profileContainerStrong}`
          }
        >
          Georgina Rojas
        </strong>
        <p>
          <img src="../icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </div>
  );
}
