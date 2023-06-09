import NavBar from "@/components/main/NavBar";
import NotFoundComponent from "@/components/main/NotFoundComponent";
import Head from "next/head";
import styles from "../styles/404.module.css";

export default function NotFound({ flag }) {
  return (
    <>
      <Head>
        <title>Page Not Found</title>
        <meta
          name="description"
          content="route is not present or url is worng"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main>
        <div className={styles.notFoundPage}>
          <NavBar flag={flag} />
          <NotFoundComponent />
        </div>
      </main>
    </>
  );
}
