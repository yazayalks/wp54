import 'react-toastify/dist/ReactToastify.min.css';
import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {ThemeProvider} from 'next-themes'
import {ToastContainer} from "react-toastify";
import NextNProgress from 'nextjs-progressbar';
import {Roboto} from '@next/font/google'
import {YMInitializer} from "react-yandex-metrika";
import React from "react";
const roboto = Roboto({
    subsets: ['latin', 'cyrillic'],
    weight: ['400','700', '900']
})

export default function App({Component, pageProps}: AppProps) {
    return (
        <main className= {roboto.className} >
            <ThemeProvider>
                <NextNProgress color="var(--icon-color-hover)"/>
                <Component {...pageProps} />
                <ToastContainer
                    position="top-right"
                    hideProgressBar={false}
                    closeOnClick
                    rtl={false}
                />
                <YMInitializer accounts={[92333901]}  options={{webvisor: true}}  version="2"/>
            </ThemeProvider>
        </main>
    )
}

