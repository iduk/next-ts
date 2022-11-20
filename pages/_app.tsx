import Head from "next/head";
import type { AppProps } from "next/app";
import { Silkscreen } from "@next/font/google";
import Layout from "../components/Layout";
import { useRouter } from "next/router";
import "styles/globals.scss";

const font = Silkscreen({
  variable: "--body-font",
  weight: "400",
});

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <Layout>
      <Head>
        <title>어수선해</title>
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
