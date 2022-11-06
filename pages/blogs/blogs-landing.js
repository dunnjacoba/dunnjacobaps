import Head from "next/head";
import Layout from "../../components/layout";
import Date from "../../components/date";
import Link from "next/link";
import utilStyles from "../../styles/utils.module.css";
import { getSortedPostsData } from "../../lib/posts";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function BlogsLanding({ allPostsData }) {
  return (
    <Layout>
      <Head>
        <title>Blogs</title>
        <Link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <a href={`/posts/${id}`}>{title}</a>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
