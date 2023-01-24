import Head from "next/head";
import Layout from "../../components/Layout/Layout";
import DescriptionCookiePolicy from "../../components/Description/DescriptionCookiePolicy";

const Index = () => {
    return (
        <>
            <Head>
                <title>wp54 | Cookie policy</title>
                <meta charSet="UTF-8"/>
                <meta httpEquiv="X-UA-Compatible" content="IE-edge"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <link rel="icon" type="image/svg" sizes="32x32" href="/images/logo/wp54_icon.svg"/>
            </Head>
            <Layout>
                <main>
                    <DescriptionCookiePolicy/>
                </main>
            </Layout>
        </>
    )
};

export default Index;




