import Navbar from "@/components/navbar/navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { Roboto } from "next/font/google";
import Head from "next/head";

const inter = Roboto({
  weight: ["100", "300", "400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Smatrix - Dashboard</title>
      </Head>
      <main className={inter.className}>
        <Navbar />
        <Component {...pageProps} />
      </main>
    </>
  );
}
