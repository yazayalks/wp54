import Head from "next/head";
import Layout from "../../components/Layout/Layout";
import React from "react";
import Services from "../../components/Services/Services";
import DescriptionNewYearPrices from "../../components/Description/DescriptionNewYearPrices";
import PriceTable from "@components/PriceTable/PriceTable";
import NewYearPriceTable from "@components/NewYearPriceTable/NewYearPriceTable";

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
                    <br/>
                    <NewYearPriceTable/>
                    <Services/>
                </main>
            </Layout>
        </>
    )
};

export default Index;


