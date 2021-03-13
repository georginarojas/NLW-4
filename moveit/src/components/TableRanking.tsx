import React from "react";

import users from "../../users.json";
import styles from "../styles/components/TableRanking.module.css";

export function TableRanking() {
  const columns = [
    { title: "posição", accessor: null },
    { title: "usuário", accessor: "user" },
    { title: "desafios", accessor: "chanllengesCompleted" },
    { title: "experiência", accessor: "currentExperience" },
  ];
  return (
    <table className={styles.containerTable}>
      <thead>
        <tr>
          {columns.map((col, i) => (
            <td key={i}>{col.title.toUpperCase()}</td>
          ))}
        </tr>
      </thead>
      <tbody>
        {users.map((user, i) => (
          <tr key={i}>
            <td>{i+1}</td>
            <td>
              <section>
                <div>
                  <img src={user.user.profilePicture} alt="avatar-github" />
                </div>
                <div>
                  <p>{user.user.name}</p>
                  <p>
                    <img src="/icons/level.svg" alt="Level" />
                    Level {user.user.level}
                  </p>
                </div>
              </section>
            </td>
            <td> <div>{user.chanllengesCompleted} <p>completados</p></div> </td>
            <td><div>{user.currentExperience} <p>xp</p></div> </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
