import React, { useEffect } from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import * as gtag from "../lib/analytics";

import Layout from "../components/Layout";

const CookieConsent = dynamic(() => import("../components/CookieConsent"), {
  ssr: false,
});

import "../styles/main.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <Layout>
      <Component {...pageProps} />
      <CookieConsent />
    </Layout>
  );
}

export default MyApp;
