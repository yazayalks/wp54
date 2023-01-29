import Head from "next/head";
import Layout from "../../components/Layout/Layout";
import React from "react";
import DescriptionPersonalDataOfClients from "../../components/Description/DescriptionPersonalDataOfClients";

const Index = () => {
    return (
        <>
            <Head>
                <title>wp54 | Personal data of clients</title>
                <meta name="Описание" content="Описание страницы Personal data of clients"/>
            </Head>
            <Layout>
                <main>
                    <DescriptionPersonalDataOfClients/>
                </main>
            </Layout>
        </>
    )
};

export default Index;




