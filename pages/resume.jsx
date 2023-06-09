import NavBar from "@/components/main/NavBar";
import ResumePageComponent from "@/components/main/ResumePageComponent";
import Head from "next/head";
import styles from "../styles/resume.module.css";

export default function Resume({ flag }) {
  return (
    <>
      <Head>
        <title>DhirajB7 - Resume</title>
        <meta
          name="description"
          content="Resume can be seen & downloaded in this page"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className={styles.resumePage}>
          <NavBar flag={flag} />
          <ResumePageComponent />
        </div>
      </main>
    </>
  );
}
