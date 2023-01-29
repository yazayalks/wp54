import Head from "next/head";
import Layout from "../../components/Layout/Layout";
import React from "react";
import Services from "../../components/Services/Services";
import DescriptionKaraoke from "../../components/Description/DescriptionKaraoke";

const Index = () => {
    return (
        <>
            <Head>
                <title>wp54 | Karaoke</title>
                <meta name="Описание" content="Описание страницы Karaoke"/>
            </Head>
            <Layout>
                <main>
                    <DescriptionKaraoke/>
                    <Services/>
                </main>
            </Layout>
        </>
    )
};

export default Index;


