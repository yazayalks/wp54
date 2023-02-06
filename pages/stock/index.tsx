import Head from "next/head";
import Layout from "../../components/Layout/Layout";
import React from "react";
import Services from "../../components/Services/Services";
import DescriptionStock from "../../components/Description/DescriptionStock";

const Index = () => {
    return (
        <>
            <Head>
                <title>wp54 | Акции, Аренда лофта для мероприятий в Новосибирске welcome_party54</title>
                <meta name="description" content="Описание страницы Stock, акция для проведения дня рождения в лофте, 10% от общей стоимости бронирования"/>
                <meta name="Keywords" content="Лофт, wp54, Новосибирск, аренда помещения, акции, день рождения"/>
            </Head>
            <Layout>
                <main>
                    <DescriptionStock/>
                    <Services/>
                </main>
            </Layout>
        </>
    )
};

export default Index;


