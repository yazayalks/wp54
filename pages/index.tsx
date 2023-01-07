import Head from "next/head";
import Header from "../components/Header/Header";
import Layout from "../components/Layout/Layout";
import Hero from "../components/Hero/Hero";


export default function Index() {
    return (
        <>
            <Head>
                <title>wp54 | Main</title>
                <meta charSet="UTF-8"/>
                <meta httpEquiv="X-UA-Compatible" content="IE-edge"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <link rel="icon" type="image/svg" sizes="32x32" href="/images/logo/wp54_icon.svg"/>
            </Head>
            <Layout>
                <Hero/>
                <main>

                </main>
            </Layout>
        </>
    )
}
