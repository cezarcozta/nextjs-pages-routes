import type { AppProps } from "next/app";
import "@/styles/globals.css";
import Layout from "@/components/layout/layout";
//GLOBAL CLIENT SIDE WRAPPER (states / styles)
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />;
    </Layout>
  );
}
