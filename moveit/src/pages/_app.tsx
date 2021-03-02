import React from "react";
import { ModeDarkProvider } from "../contexts/ModeDarkContext";
import "../styles/global.css";

function MyApp({ Component, pageProps }) {
  return (
    <ModeDarkProvider>
      <Component {...pageProps} />
    </ModeDarkProvider>
  );
}

export default MyApp;
