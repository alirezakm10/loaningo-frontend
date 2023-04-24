import "@/styles/globals.css";
import Layout from "@/components/Layout";
import {Manrope} from 'next/font/google'


const manrope = Manrope({ subsets: ['latin'],weight:['300','500','700'] })

export default function App({ Component, pageProps }) {
  return (
    <div className={manrope.className}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </div>
  );
}
