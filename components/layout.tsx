import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import MyPhoto from "./image";


const name = "Jacob Dunn";
export const siteTitle = "dunnjacoba";

export default function Layout({
  children,
  home
}: {
  children: React.ReactNode
  home?: boolean
}) {
  return (
    <>
      <div className={styles.container}>
        <Head>
          {/* <Link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Learning to build a personal site"
          />
          <meta
            property="og:image"
            content={`https://og-image.vercel.app/${encodeURI(
              siteTitle
            )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
          />
          <meta name="og:title" content={siteTitle} />
          <meta name="twitter:card" content="summary_large_image" /> */}
        </Head>
        <header className={styles.header}>
          {home ? (
            <>
              <Image
                priority
                src="/images/pfp2.jpg"
                className={utilStyles.borderCircle}
                height={144}
                width={144}
                alt={name}
              />
              <h1 className={utilStyles.heading2xl}>{name}</h1>
            </>
          ) : (
            <>
                <Link href="/">
                  <Image
                    priority
                    src="/images/pfp2.jpg"
                    className={utilStyles.borderCircle}
                    height={108}
                    width={108}
                    alt={name}
                  />
                </Link>
              <h2 className={utilStyles.headingLg}>              
                  <Link href="/" className={utilStyles.colorInherit}>{name}</Link>
                
              </h2>
            </>
          )}
        </header>
        <main>{children}</main>
        {!home && (
          <div className={styles.backToHome}>
              <Link href="/">??? Back to home</Link>
          </div>
        )}
      </div>
      <div className={utilStyles.footer}>     
        <Link href="/faqs">
          FAQs
        </Link>  
        <Image
          src="/images/dark.jpg"
          height={50}
          width={50}
          alt="Jacob Dunn Dark Logo"
        />

        <Link href="/about">
          About
        </Link>
          <MyPhoto />
        <Link href="http://linkfree.eddiehub.io/dunnjacoba" target="_blank">
          Contact
        </Link>        
      </div>
    </>
  );
}
