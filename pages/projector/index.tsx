import Head from "next/head";
import Layout from "../../components/Layout/Layout";
import Services from "../../components/Services/Services";
import DescriptionProjector from "../../components/Description/DescriptionProjector";
import React from "react";

const Index = () => {
    return (
        <>
            <Head>
                <title>wp54 | Projector</title>
                <meta name="Описание" content="Описание страницы Projector"/>
            </Head>
            <Layout>
                <main>
                    <DescriptionProjector/>
                    <Services/>
                </main>
            </Layout>
        </>
    )
};

export default Index;
