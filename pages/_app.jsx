import "@/styles/globals.css";
import {Raleway} from 'next/font/google'

const raleway = Raleway({
  weight: "800",
  subsets: ['latin']
});

export default function App({ Component, pageProps }) {
  const showResume = true;
  return (
    <main className={raleway.className}>
      <Component {...pageProps} flag={showResume} />
    </main>
  );
}
