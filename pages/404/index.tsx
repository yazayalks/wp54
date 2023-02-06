import Head from "next/head";
import Layout from "../../components/Layout/Layout";
import React from "react";
import Description404 from "../../components/Description/Description404";

const Index = () => {
    return (
        <>
            <Head>
                <title>wp54 | 404, страница не найдена</title>
                <meta name="description" content="Описание страницы 404"/>
            </Head>
            <Layout>
                <main>
                    <Description404/>
                </main>
            </Layout>
        </>
    )
};

export default Index;




