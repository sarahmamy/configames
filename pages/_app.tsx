import React, { useEffect } from "react";
import Router from "next/router";
import dynamic from "next/dynamic";
import { initGA, logPageView } from "../lib/analytics";

import Layout from "../components/Layout";

const CookieConsent = dynamic(() => import("../components/CookieConsent"), {
  ssr: false
});

import "../styles/main.css";

Router.events.on("routeChangeComplete", () => logPageView());

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    initGA();
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
      <CookieConsent />
    </Layout>
  );
}

export default MyApp;
