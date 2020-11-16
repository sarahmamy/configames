import Head from "next/head";

export default ({ children }) => (
  <>
    <Head>
      <link
        href="https://fonts.googleapis.com/css?family=Baloo+Bhai+2:700|Source+Code+Pro:400,700|Source+Sans+Pro:400,700&display=swap"
        rel="stylesheet"
      />
    </Head>
    <div className="w-screen min-h-screen bg-white font-regular">
      {children}
    </div>
  </>
);
