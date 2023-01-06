import Head from "next/head";
import Header from "../components/Header/Header";


export default function Home() {
    return (
        <>
            <Head>
                <title>wp54</title>
                <meta charSet="UTF-8"/>
                <meta httpEquiv="X-UA-Compatible" content="IE-edge"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <link rel="icon" type="image/svg" sizes="32x32" href="/images/logo_wp.svg"/>
            </Head>
            <Header/>
            <main>

            </main>
                <div className="background-animation">
                    <div id="ball-one"></div>
                    <div id="ball-two"></div>
                    <div id="ball-three"></div>
                </div>
        </>
    )
}
