import '@/styles/globals.css'
import {Head} from "next/document";

export default function App({ Component, pageProps }) {
  return <>
    <Head>
      <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests"/>
    </Head>
    <Component {...pageProps} />
  </>


}
