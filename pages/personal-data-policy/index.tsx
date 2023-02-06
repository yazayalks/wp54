import Head from "next/head";
import Layout from "../../components/Layout/Layout";
import React from "react";
import DescriptionPersonalDataPolicy from "../../components/Description/DescriptionPersonalDataPolicy";

const Index = () => {
    return (
        <>
            <Head>
                <title>wp54 | Политика обработки персональных данных аренды лофта для мероприятий в Новосибирске welcome_party54</title>
                <meta name="description" content="Описание страницы Personal data policy"/>
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




