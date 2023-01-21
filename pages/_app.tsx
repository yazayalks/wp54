import 'react-toastify/dist/ReactToastify.min.css';
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {ThemeProvider, useTheme} from 'next-themes'
import {ToastContainer} from "react-toastify";


export default function App({ Component, pageProps }: AppProps) {


  return ( <>
      <ThemeProvider>
        <Component {...pageProps} />
          <ToastContainer
              position="top-right"
              hideProgressBar={false}
              closeOnClick
              rtl={false}
          />
      </ThemeProvider>

      </>

  )
}
