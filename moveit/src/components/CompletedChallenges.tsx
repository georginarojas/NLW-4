import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import styles from "../styles/components/CompletedChallenges.module.css";

export function CompletedChallenges() {
  const {chanllengesCompleted} = useContext(ChallengesContext);
  return (
    <div className={styles.completedChallengesContainer}>
      <span>Desafios completos</span>
      <span>{chanllengesCompleted}</span>
    </div>
  );
}
