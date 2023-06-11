import "@/styles/globals.css";
import { Raleway } from "next/font/google";
import Head from "next/head";
import Script from "next/script";
const raleway = Raleway({
  weight: "800",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  const showResume = true;
  return (
    <>
      {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-JW6FHR00VP"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-JW6FHR00VP');
        `}
      </Script>
      <main className={raleway.className}>
        <Component {...pageProps} flag={showResume} />
      </main>
    </>
  );
}
