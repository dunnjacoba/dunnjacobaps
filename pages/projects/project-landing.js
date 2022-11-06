import Head from "next/head";
import Layout, { siteTitle } from "../../components/layout";
import utilStyles from "../../styles/utils.module.css";

export default function ProjectLanding() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
        <a rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Projects</h1>
      <div className={utilStyles.grid}>
        <a href="project-kommu" className={utilStyles.card}>
          <h2>Kommu</h2>
        </a>
      </div>
    </Layout>
  );
}