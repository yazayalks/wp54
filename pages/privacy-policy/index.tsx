import Head from "next/head";
import Layout from "../../components/Layout/Layout";
import React from "react";
import DescriptionPrivacyPolicy from "../../components/Description/DescriptionPrivacyPolicy";

const Index = () => {
    return (
        <>
            <Head>
                <title>wp54 | Политика конфиденциальности аренды лофта для мероприятий в Новосибирске welcome_party54</title>
                <meta name="description" content="Описание страницы Privacy policy"/>
            </Head>
            <Layout>
                <main>
                    <DescriptionPrivacyPolicy/>
                </main>
            </Layout>
        </>
    )
};

export default Index;




