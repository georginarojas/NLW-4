import React, { useEffect } from "react";

import styles from "../styles/pages/Login.module.css";

export default function Login(props) {
  useEffect(() => {
    document.body.classList.add("loginBody");
    document.body.classList.remove("body");
  }, []);
  return (
    <div className={styles.container}>
      <section>
        <div className={styles.simbolo}>
          <img src="icons/simbolo.svg" alt="simbolo-login" />
        </div>
        <div>
          <div className={styles.containerlogo}>
            <img src="logo.svg" alt="logo" />
          </div>
          <div className={styles.containerTitle}>
            <p>Bem-vindo</p>
          </div>
          <div className={styles.containerText}>
            <img src="icons/github.svg" alt="logo-github" />
            <div>
              <p>Faça login com o seu GitHub </p> <p>para começar</p>
            </div>
          </div>
          <div className={styles.containerInput}>
            <input
              className={styles.inputField}
              placeholder="Digite seu username"
            />
            <div className={styles.inputImg}>
              <img src="icons/vector.svg" alt="arrow-input" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
