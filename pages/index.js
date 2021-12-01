import Head from 'next/head'
import Link from "next/link"

import Layout, { siteTitle } from '../components/layout'
import Date from '../components/date'
import utilStyles from "../styles/utils.module.css"

import { getSortedPostsData } from '../lib/post'

export async function getStaticProps(){
  const allPostData = getSortedPostsData()
  return {
    props:{ allPostData}
  }
}


export default function Home( { allPostData } ) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Pagina de pruebas basica en NextJs Framework y React</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
        <Link href="/posts/primer-post"><a>Primer articulo</a></Link>
      </section>

      {/* sección donde se carga las publicaciones */}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Entradas</h2>
        <ul className={utilStyles.list}>
        {console.log(allPostData)}
          {allPostData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br></br>
              <small className={utilStyles.lightText}>
                <Date dateString={date}></Date>
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}
