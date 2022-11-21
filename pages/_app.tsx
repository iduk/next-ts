import type { AppProps } from "next/app";
import { Silkscreen } from "@next/font/google";
import "styles/globals.scss";
import Head from "next/head";
import Layout from "../components/Layout";

const font = Silkscreen({
  variable: "--body-font",
  weight: "400",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <title>어수선해</title>
        <meta
          property="og:image"
          content="https://next-ts-iduk.vercel.app/api/og"
        />
        <meta name="description" content="nextjs 13 typescript" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <div className={font.variable}>
        <Component {...pageProps} />
      </div>
    </Layout>
  );
}
