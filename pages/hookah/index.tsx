import Head from "next/head";
import Layout from "../../components/Layout/Layout";
import React from "react";
import Services from "../../components/Services/Services";
import DescriptionHookah from "../../components/Description/DescriptionHookah";

const Index = () => {
    return (
        <>
            <Head>
                <title>wp54 | Кальян в лофте для мероприятий в Новосибирске welcome_party54</title>
                <meta name="description" content="Описание страницы Hookah,дымите кальян со своими друзьями только у нас, мы предоставим Вам лучший табак, а стоимость кальяна всего 700р"/>
                <meta name="keywords" content="Лофт, wp54, Новосибирск, аренда помещения, кальян, калик, покурить кальян, угли, плита, дым, кайф, табак, лучшрий табак"/>
            </Head>
            <Layout>
                <main>
                    <DescriptionHookah/>
                    <Services/>
                </main>
            </Layout>
        </>
    )
};

export default Index;
