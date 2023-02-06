import React from "react";
import Head from "next/head";
import Layout from "../../components/Layout/Layout";
import Description500 from "../../components/Description/Description500";


const Index = () => {
    return (
        <>
            <Head>
                <title>wp54 | 500, Аренда лофта для мероприятий в Новосибирске welcome_party54</title>
                <meta name="description" content="Описание страницы 500"/>
            </Head>
            <Layout>
                <main>
                    <Description500/>
                </main>
            </Layout>
        </>
    )
};

export default Index;




