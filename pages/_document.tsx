import {Html, Head, Main, NextScript} from 'next/document'
import React from "react";
import Image from "next/image";


export default function Document() {

    return (
        <Html lang="ru">
            <Head>
                <meta charSet="UTF-8"/>
                <meta httpEquiv="X-UA-Compatible" content="IE-edge"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <link rel="icon" type="image/svg" sizes="32x32" href="/images/logo/wp54_icon.svg"/>
            </Head>
            <body>
            <Main/>
            <NextScript/>

            <script
                dangerouslySetInnerHTML={{
                    __html: `
                   (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
   m[i].l=1*new Date();
   for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
   k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
   (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

   ym(92333901, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true
   });
              `,
                }}
            />
            <noscript>
                <div><Image src="https://mc.yandex.ru/watch/92333901" style={{position: "absolute", left: "-9999px"}}
                          alt=""/></div>
            </noscript>
            </body>
        </Html>
    )
}
