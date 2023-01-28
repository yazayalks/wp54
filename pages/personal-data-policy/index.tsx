import Head from "next/head";
import Layout from "../../components/Layout/Layout";
import React from "react";
import DescriptionPersonalDataPolicy from "../../components/Description/DescriptionPersonalDataPolicy";

const Index = () => {
    return (
        <>
            <Head>
                <title>wp54 | Personal data policy</title>
                <meta charSet="UTF-8"/>
                <meta httpEquiv="X-UA-Compatible" content="IE-edge"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta name="Описание" content="Описание страницы Personal data policy"/>
                <link rel="icon" type="image/svg" sizes="32x32" href="/images/logo/wp54_icon.svg"/>
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




