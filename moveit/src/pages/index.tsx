import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import styles from "../styles/pages/Login.module.css";

export default function Login(props) {
  const router = useRouter();
  const [username, setUsername] = useState(null);

  function handleChange(e) {
    e.preventDefault();
    let value = e.target.value;
    setUsername(value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (username) {
      router.push(`/home/${username}`);
    }
  }

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
          <form className={styles.containerInput} onSubmit={handleSubmit}>
            <input
              className={styles.inputField}
              placeholder="Digite seu username"
              onChange={handleChange}
            />
            <button type="submit" className={styles.inputButton}>
              <img src="icons/vector.svg" alt="arrow-input" />
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
