import Head from "next/head";
import Layout from "../../components/Layout/Layout";
import React from "react";
import Services from "../../components/Services/Services";
import DescriptionEquipment from "../../components/Description/DescriptionEquipment";

const Index = () => {
    return (
        <>
            <Head>
                <title>wp54 | Equipment</title>
                <meta name="Описание" content="Описание страницы Equipment"/>
            </Head>
            <Layout>
                <main>
                    <DescriptionEquipment/>
                    <Services/>
                </main>
            </Layout>
        </>
    )
};

export default Index;


