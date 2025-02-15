import Footer from "@/components/footer";
import Navbar from "@/components/navbar/navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { Roboto } from "next/font/google";
import Head from "next/head";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Smatrix - Prioritize Your Productivity</title>
        {/* Basic Meta Tags */}
        <meta charSet='UTF-8' />
        <meta name='robots' content='index, follow' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0'
        />
        <meta
          name='description'
          content='Smatrix is a productivity app that uses the Eisenhower Matrix to help you prioritize tasks. Decide what to act on now, delegate, schedule, limit, or review later for better task management.'
        />
        <meta
          name='keywords'
          content='Smatrix, Eisenhower Matrix, task management, productivity, prioritize, to-do list, scheduling, delegation, task organization'
        />
        <meta name='author' content='Yogesh Raj Kabilan' />

        {/* Open Graph Tags */}
        <meta
          property='og:title'
          content='Smatrix - Prioritize Your Productivity'
        />
        <meta
          property='og:description'
          content='Smatrix helps you make smart decisions about your tasks using the Eisenhower Matrix. Focus on what matters most, schedule priorities, and minimize distractions.'
        />
        <meta property='og:image' content='/logo.svg' />
        <meta property='og:url' content='https://smatrix.netlify.app/' />
        <meta property='og:type' content='website'></meta>

        <meta name='twitter:card' content='/logo.svg' />
        <meta name='twitter:title' content='Smatrix - Dashboard' />
        <meta
          name='twitter:description'
          content='Explore Smatrix for advanced dashboard functionalities and insights.'
        />
        <meta name='twitter:image' content='/logo.svg' />

        {/*Twitter Meta Tags */}
        <meta name='twitter:card' content='/logo.svg' />
        <meta
          name='twitter:title'
          content='Smatrix - Prioritize Your Productivity'
        />
        <meta
          name='twitter:description'
          content='Streamline your tasks with Smatrix. Decide what to do now, schedule, delegate, or limit, all with the intuitive Eisenhower Matrix approach.'
        />
        <meta name='twitter:image' content='/logo.svg'></meta>

        {/* Canonical Tag */}
        <link rel='canonical' href='https://smatrix.netlify.app/'></link>
      </Head>
      <main className={roboto.className}>
        <Navbar />
        <Component {...pageProps} />
        {/* <Footer /> */}
      </main>
    </>
  );
}
