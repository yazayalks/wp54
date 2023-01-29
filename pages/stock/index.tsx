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
                <meta name="Описание" content="Описание страницы Stock"/>
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


