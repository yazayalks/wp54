import Head from "next/head";
import Layout from "../../components/Layout/Layout";
import React from "react";
import DescriptionPrivacyPolicy from "../../components/Description/DescriptionPrivacyPolicy";

const Index = () => {
    return (
        <>
            <Head>
                <title>wp54 | Privacy policy</title>
                <meta name="Описание" content="Описание страницы Privacy policy"/>
            </Head>
            <Layout>
                <main>
                    <DescriptionPrivacyPolicy/>
                </main>
            </Layout>
        </>
    )
};

export default Index;




