import Footer from "@/components/Footer";
import Header from "@/components/Header";
import BannerDivider from "@/components/Header/BannerDivider";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <BannerDivider />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
