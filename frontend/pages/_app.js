import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>FishMe</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
