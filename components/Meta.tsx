import React from "react";
import Head from "next/head";

export default () => (
  <Head>
    <title>Configames</title>
    <link rel="shortcut icon" href="/favicon.png" />
    <meta property="og:title" content="Configames" />
    <meta
      property="og:description"
      content="Une liste de jeux en ligne entre amis pour le confinement"
    />
    <meta
      property="og:image"
      content="https://configames.vercel.app/og-image.png"
    />
    <meta property="og:url" content="https://configames.vercel.app" />
    <meta name="twitter:title" content="Configames" />
    <meta
      name="twitter:description"
      content="Une liste de jeux en ligne entre amis pour le confinement"
    />
    <meta
      name="twitter:image"
      content="https://configames.vercel.app/og-image.png"
    />
    <meta name="twitter:card" content="summary_large_image"></meta>
  </Head>
);
