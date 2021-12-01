import Head from 'next/head'
import Link from "next/link";
import Layout, { siteTitle } from '../../components/layout';

export default function PrimerPost(){
    return (
        <Layout post>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section>
                <h1>Primer Artículo</h1>
            </section>
        </Layout>
    )
}