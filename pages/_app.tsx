import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import Layout from "@/components/Layout";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-display",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-body",
  display: "swap",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${cormorant.variable} ${dmSans.variable} font-body bg-[var(--bg-dark)] text-[var(--text-primary)] min-h-screen`}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
