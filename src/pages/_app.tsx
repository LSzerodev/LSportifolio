import "@/styles/globals.css";
import { Header } from "@/components/header/header";
import type { AppProps } from "next/app";
import { Poppins } from "next/font/google";
import { CursorSeguir } from "@/components/cursor-seguir/cursor";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-poppins",
  display: "swap",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={poppins.variable}>
      <CursorSeguir/>
      <Header />
      <Component {...pageProps} />
    </div>
  );
}
