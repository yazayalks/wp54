import Head from "next/head";
import Layout from "../../components/Layout/Layout";
import React from "react";
import Services from "../../components/Services/Services";
import DescriptionKaraoke from "../../components/Description/DescriptionKaraoke";

const Index = () => {
    return (
        <>
            <Head>
                <title>wp54 | Караоке, Аренда лофта для мероприятий в Новосибирске welcome_party54</title>
                <meta name="description" content="Описание страницы Karaoke, посоревнуйтесь со своей компанией в навыках пения, исполняйте своих любимых исполнителей в нашем караоке в новосибирске"/>
                <meta name="Keywords" content="Лофт, wp54, Новосибирск, аренда помещения, караоке, пение, петь"/>
            </Head>
            <Layout>
                <main>
                    <DescriptionKaraoke/>
                    <Services/>
                </main>
            </Layout>
        </>
    )
};

export default Index;


