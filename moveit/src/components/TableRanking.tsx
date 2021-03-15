import React, { useContext, useEffect, useState } from "react";

import users from "../../users.json";
import { ModeDarkContext } from "../contexts/ModeDarkContext";
import styles from "../styles/components/TableRanking.module.css";

interface UsersList {
  user: {
    name: string;
    profilePicture: string;
    level: number;
  };
  chanllengesCompleted: number;
  currentExperience: number;
}

export function TableRanking() {
  const columns = [
    { title: "posição", accessor: null },
    { title: "usuário", accessor: "user" },
    { title: "desafios", accessor: "chanllengesCompleted" },
    { title: "experiência", accessor: "currentExperience" },
  ];
  const { isModeDark } = useContext(ModeDarkContext);
  const [userList, setUserList] = useState<UsersList[]>([]);

  useEffect(() => {
    let list = users.sort(compare);
    setUserList(list);
  }, []);

  function compare(a, b) {
    let challengeA = a.chanllengesCompleted;
    let challengeB = b.chanllengesCompleted;

    let experienceA = a.currentExperience;
    let experienceB = b.currentExperience;

    return challengeB - challengeA || experienceB - experienceA;
  }

  return (
    <>
      <div className={isModeDark ? `${styles.titleDark}` : `${styles.title}`}>
        <h1>Leaderboard</h1>
      </div>

      <table
        id={styles.containerTable}
        className={
          isModeDark
            ? `${styles.containerTableDark}`
            : `${styles.containerTable}`
        }
      >
        <thead>
          <tr>
            {columns.map((col, i) => (
              <td key={i}>{col.title.toUpperCase()}</td>
            ))}
          </tr>
        </thead>
        <tbody>
          {userList.map((user, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
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
              <td>
                {" "}
                <div>
                  {user.chanllengesCompleted} <p>completados</p>
                </div>{" "}
              </td>
              <td>
                <div>
                  {user.currentExperience} <p>xp</p>
                </div>{" "}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
