import NavBar from "@/components/main/NavBar";
import Head from "next/head";
import styles from "../styles/skills.module.css";
import SkillsPageComponent from "@/components/main/SkillsPageComponent";

export default function Skills({ flag }) {
  return (
    <>
      <Head>
        <title>DhirajB7 - Skills</title>
        <meta
          name="description"
          content="Technical Skills details in this page"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className={styles.skillPage}>
          <NavBar flag={flag} />
          <SkillsPageComponent />
        </div>
      </main>
    </>
  );
}
