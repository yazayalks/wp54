import {Html, Head, Main, NextScript} from 'next/document'

import Image from "next/image";
export default function Document() {

    return (
        <Html lang="ru">
            <Head>
                <meta charSet="UTF-8"/>
                <meta httpEquiv="X-UA-Compatible" content="IE-edge"/>
                <meta name="robots" content="index, follow"/>
                <link rel="icon" href="/favicon.svg" type="image/svg+xml"/>
                <link rel="icon" href="/favicon.ico"  type="image/x-icon"/>
                <link rel="apple-touch-icon" href="/logo512.png" type="image/png"/>
                <link rel="manifest" href="/manifest.json"/>
            </Head>
            <body>
            <Main/>
            <NextScript/>
            <script
                dangerouslySetInnerHTML={{
                    __html: `
                   (function (d, w, c) {
        (w[c] = w[c] || []).push(function() {
            try {
                w.yaCounter92333901 = new Ya.Metrika({
                    id:92333901,
                    clickmap:true,
                    trackLinks:true,
                    accurateTrackBounce:true,
                    webvisor:true
                });
            } catch(e) { }
        });

        var n = d.getElementsByTagName("script")[0],
            x = "https://mc.yandex.ru/metrika/watch.js",
            s = d.createElement("script"),
            f = function () { n.parentNode.insertBefore(s, n); };
        for (var i = 0; i < document.scripts.length; i++) {
            if (document.scripts[i].src === x) { return; }
        }
        s.type = "text/javascript";
        s.async = true;
        s.src = x;

        if (w.opera == "[object Opera]") {
            d.addEventListener("DOMContentLoaded", f, false);
        } else { f(); }
    })(document, window, "yandex_metrika_callbacks");
              `,
                }}
            />
            <noscript>
                <div>
                    <img src="https://mc.yandex.ru/watch/92333901" style={{position: 'absolute', left: '-9999px'}}
                          alt=""/>
                </div>
            </noscript>
            </body>
        </Html>
    )
}
