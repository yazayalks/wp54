import Head from "next/head";
import Layout from "../../components/Layout/Layout";
import React from "react";
import Services from "../../components/Services/Services";
import PriceTable from "../../components/PriceTable/PriceTable";
import DescriptionBasicPrices from "../../components/Description/DescriptionBasicPrices";

const Index = () => {
    return (
        <>
            <Head>
                <title>wp54 | Basic prices</title>
                <meta name="Описание" content="Описание страницы Basic prices"/>
            </Head>
            <Layout>
                <main>
                    <DescriptionBasicPrices/>
                    <PriceTable/>
                    <Services/>
                </main>
            </Layout>
        </>
    )
};

export default Index;


