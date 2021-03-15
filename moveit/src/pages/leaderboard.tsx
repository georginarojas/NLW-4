import { GetServerSideProps } from "next";
import Head from "next/head";
import React from "react";
import { MenuBar } from "../components/MenuBar";
import { TableRanking } from "../components/TableRanking";
import { ModeDarkProvider } from "../contexts/ModeDarkContext";

import styles from "../styles/pages/Leaderboard.module.css";

interface LeaderboardProps {
  isModeDark: boolean;
}

export default function Leaderboard(props: LeaderboardProps) {
  return (
    <ModeDarkProvider isModeDark={props.isModeDark}>
      <section className={styles.container}>
        <div>
          <MenuBar isHomePage={false} isRankingPage={true} />
        </div>
        <div className={styles.containerBoard}>
          <Head>
            <title> Leaderboard | move.it</title>
          </Head>
          <TableRanking />
        </div>
      </section>
    </ModeDarkProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { isModeDark } = ctx.req.cookies;
  const modeDarkValue = isModeDark ?? "false";
  console.log("SERVER modedark ", isModeDark);
  return {
    props: {
      isModeDark: JSON.parse(modeDarkValue),
    },
  };
};
