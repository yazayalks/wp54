import Head from "next/head";
import Layout from "../../components/Layout/Layout";
import React from "react";
import Services from "../../components/Services/Services";
import DescriptionHookah from "../../components/Description/DescriptionHookah";

const Index = () => {
    return (
        <>
            <Head>
                <title>wp54 | Hookah</title>
                <meta name="Описание" content="Описание страницы Hookah"/>
            </Head>
            <Layout>
                <main>
                    <DescriptionHookah/>
                    <Services/>
                </main>
            </Layout>
        </>
    )
};

export default Index;
