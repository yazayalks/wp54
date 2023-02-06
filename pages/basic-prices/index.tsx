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
                <title>wp54 | Основные цены, Аренда лофта для мероприятий в Новосибирске welcome_party54</title>
                <meta name="description" content="Описание страницы Basic prices, у нас самые дешёвые цены и есть акции"/>
                <meta name="Keywords" content="Лофт, wp54, Новосибирск, аренда помещения, цены "/>
            </Head>
            <Layout>
                <main>
                    <DescriptionBasicPrices/>
                    <br/>
                    <PriceTable/>
                    <Services/>
                </main>
            </Layout>
        </>
    )
};

export default Index;


