import Head from "next/head";
import Layout from "../../components/Layout/Layout";
import Description from "../../components/Description/Description";
import React from "react";

const Index = () => {
    return (
        <>
            <Head>
                <title>wp54 | 404</title>
                <meta charSet="UTF-8"/>
                <meta httpEquiv="X-UA-Compatible" content="IE-edge"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <link rel="icon" type="image/svg" sizes="32x32" href="/images/logo/wp54_icon.svg"/>
            </Head>
            <Layout>
                <main>
                    <Description descriptionName={'404'}/>
                </main>
            </Layout>

        </>
    )
};

export default Index;




