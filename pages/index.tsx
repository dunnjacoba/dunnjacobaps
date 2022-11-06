import Head from "next/head";
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import { GetStaticProps } from 'next'
import Link from "next/link"

export default function Home({
  allPostsData
}: {
  allPostsData: {
    date: string
    title: string
    id: string
  }[]
}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
      </section>
      <div className={utilStyles.grid}>
        <Link href="blogs/blogs-landing" className={utilStyles.card}>         
            <h2>Blogs</h2>          
        </Link>
        <Link href="projects/project-landing" className={utilStyles.card}>         
            <h2>Projects</h2>         
        </Link>
        <Link href="resume/cv" className={utilStyles.card}>         
            <h2>Resume</h2>         
        </Link>
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}