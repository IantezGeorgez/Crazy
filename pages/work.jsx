import NavBar from "@/components/main/NavBar";
import WorkPageComponent from "@/components/main/WorkPageComponent";
import Head from "next/head";
import styles from "../styles/work.module.css";

export default function Work({ flag }) {
  return (
    <>
      <Head>
        <title>DhirajB7 - Experience</title>
        <meta
          name="description"
          content="Work experience detials can be found in this page"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className={styles.workPage}>
          <NavBar flag={flag} />
          <WorkPageComponent />
        </div>
      </main>
    </>
  );
}
