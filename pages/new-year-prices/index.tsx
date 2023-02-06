import Head from "next/head";
import Layout from "../../components/Layout/Layout";
import React from "react";
import Services from "../../components/Services/Services";
import DescriptionNewYearPrices from "../../components/Description/DescriptionNewYearPrices";

const Index = () => {
    return (
        <>
            <Head>
                <title>wp54 | Новогодние цены в лофте для мероприятий в Новосибирске welcome_party54</title>
                <meta name="description" content="Описание страницы  New year prices"/>
            </Head>
            <Layout>
                <main>
                    <DescriptionNewYearPrices/>
                    <Services/>
                </main>
            </Layout>
        </>
    )
};

export default Index;


