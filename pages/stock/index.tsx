import Head from "next/head";
import Layout from "../../components/Layout/Layout";
import React from "react";
import Services from "../../components/Services/Services";
import DescriptionStock from "../../components/Description/DescriptionStock";

const Index = () => {
    return (
        <>
            <Head>
                <title>wp54 | Stock</title>
                <meta charSet="UTF-8"/>
                <meta httpEquiv="X-UA-Compatible" content="IE-edge"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta name="Описание" content="Описание страницы Stock"/>
                <link rel="icon" type="image/svg" sizes="32x32" href="/images/logo/wp54_icon.svg"/>
            </Head>
            <Layout>
                <main>
                    <DescriptionStock/>
                    <Services/>
                </main>
            </Layout>
        </>
    )
};

export default Index;


