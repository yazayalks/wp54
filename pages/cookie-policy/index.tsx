import Head from "next/head";
import Layout from "../../components/Layout/Layout";
import DescriptionCookiePolicy from "../../components/Description/DescriptionCookiePolicy";
import React from "react";

const Index = () => {
    return (
        <>
            <Head>
                <title>wp54 | Cookie policy</title>
                <meta name="Описание" content="Описание страницы Cookie policy"/>
            </Head>
            <Layout>
                <main>
                    <DescriptionCookiePolicy/>
                </main>
            </Layout>
        </>
    )
};

export default Index;




