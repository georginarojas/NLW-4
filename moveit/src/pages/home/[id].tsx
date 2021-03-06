import React, { useEffect } from "react";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { CompletedChallenges } from "../../components/CompletedChallenges";
import { Countdown } from "../../components/Countdown";
import { ExperienceBar } from "../../components/ExperienceBar";
import { Profile } from "../../components/Profile";
import { ChallengeBox } from "../../components/ChallengeBox";

import styles from "../../styles/pages/Home.module.css";
import { CountdownProvider } from "../../contexts/CountdownContext";
import { ChallengesProvider } from "../../contexts/ChallengesContext";
import { ModeDarkProvider } from "../../contexts/ModeDarkContext";
import { MenuBar } from "../../components/MenuBar";

interface HomeProps {
  level: number;
  currentExperience: number;
  chanllengesCompleted: number;
  isModeDark: boolean;
}

export default function Home(props: HomeProps) {
  useEffect(() => {
    document.body.classList.remove("loginBody");
  }, []);

  return (
    <ModeDarkProvider isModeDark={props.isModeDark}>
      <ChallengesProvider
        level={props.level}
        currentExperience={props.currentExperience}
        chanllengesCompleted={props.chanllengesCompleted}
      >
        <section id={styles.containerPage}>
          <div className={styles.containerMenu}>
            <MenuBar isHomePage={true} isRankingPage={false}/>
          </div>
          <div className={styles.container}>
            <Head>
              <title>Inicio | move.it</title>
            </Head>
            <ExperienceBar />
            <CountdownProvider>
              <section>
                <div>
                  <Profile />
                  <CompletedChallenges />
                  <Countdown />
                </div>
                <div>
                  <ChallengeBox />
                </div>
              </section>
            </CountdownProvider>
          </div>
        </section>
      </ChallengesProvider>
    </ModeDarkProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const {
    level,
    currentExperience,
    chanllengesCompleted,
    isModeDark,
  } = ctx.req.cookies;
  const data = { level, currentExperience, chanllengesCompleted, isModeDark };

  const modeDarkValue = isModeDark ? isModeDark : "false";

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      chanllengesCompleted: Number(chanllengesCompleted),
      isModeDark: JSON.parse(modeDarkValue),
    },
  };
};
