import Head from "next/head";
import styles from "../styles/home.module.css";
import NavBar from "@/components/main/NavBar";
import HomePageComponent from "@/components/main/HomePageComponent";

export default function Home({ flag }) {
  return (
    <>
      <Head>
        <title>the developer is back</title>
        <meta name="description" content="Home page of portfolio" />
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
