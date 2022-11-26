import "../styles/globals.css";
import "../styles/index.css";
import "../styles/charityIndex.css";
import "../styles/cardStyles.css";
import Layout from "../components/layout/layout";
import Head from "next/head";
import { SessionProvider } from "next-auth/react";
import useStore from "../components/zustandStates/store";
import { useEffect } from "react";
import { useSession } from "next-auth/react";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <SessionProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SessionProvider>
    </>
  );
}

export default MyApp;
