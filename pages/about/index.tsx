import Head from "next/head";
import Layout from "../../components/Layout/Layout";
import React from "react";
import DescriptionAbout from "../../components/Description/DescriptionAbout";

const Index = () => {
    return (
        <>
            <Head>
                <title>wp54 | About</title>
                <meta name="Описание" content="Описание страницы About"/>
            </Head>
            <Layout>
                <main>
                    <DescriptionAbout/>
                </main>
            </Layout>
        </>
    )
};

export default Index;




