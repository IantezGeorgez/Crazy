import Head from "next/head";
import styles from "../styles/home.module.css";
import NavBar from "@/components/main/NavBar";
import HomePageComponent from "@/components/main/HomePageComponent";

export default function Home({ flag }) {
  return (
    <>
      <Head>
        <title>DhirajB7</title>
        <meta name="description" content="DhirajB7 portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className={styles.homePage}>
          <NavBar flag={flag} />
          <HomePageComponent />
        </div>
      </main>
    </>
  );
}
