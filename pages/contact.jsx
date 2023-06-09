import ContactPageComponent from "@/components/main/ContactPageComponent";
import NavBar from "@/components/main/NavBar";
import Head from "next/head";
import styles from "../styles/contact.module.css";

export default function Contact({ flag }) {
  return (
    <>
      <Head>
        <title>DhirajB7 - Contact</title>
        <meta
          name="description"
          content="Contact details can be found in this page"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className={styles.contactPage}>
          <NavBar flag={flag} />
          <ContactPageComponent />
        </div>
      </main>
    </>
  );
}
