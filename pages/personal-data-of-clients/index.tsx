import Head from "next/head";
import Layout from "../../components/Layout/Layout";
import React from "react";
import DescriptionPersonalDataOfClients from "../../components/Description/DescriptionPersonalDataOfClients";

const Index = () => {
    return (
        <>
            <Head>
                <title>wp54 | Personal data of clients</title>
                <meta charSet="UTF-8"/>
                <meta httpEquiv="X-UA-Compatible" content="IE-edge"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta name="Описание" content="Описание страницы Personal data of clients"/>
                <link rel="icon" type="image/svg" sizes="32x32" href="/images/logo/wp54_icon.svg"/>
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




