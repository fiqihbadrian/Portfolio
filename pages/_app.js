import Head from "next/head";
import { useEffect } from "react";
import AOS from "aos";

import "@/styles/globals.css";
import "aos/dist/aos.css";

function MyApp({ Component, pageProps }) {

  //aos
  useEffect(() => {
    AOS.init({
         duration: 800,
         once: false,
       })
 }, [])

  return (
    <>
      <Head>
        <title>Fiqih — Home</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;