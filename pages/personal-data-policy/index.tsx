import Head from "next/head";
import Layout from "../../components/Layout/Layout";
import React from "react";
import DescriptionPersonalDataPolicy from "../../components/Description/DescriptionPersonalDataPolicy";

const Index = () => {
    return (
        <>
            <Head>
                <title>wp54 | Personal data policy</title>
                <meta name="Описание" content="Описание страницы Personal data policy"/>
            </Head>
            <Layout>
                <main>
                    <DescriptionPersonalDataPolicy/>
                </main>
            </Layout>
        </>
    )
};

export default Index;




