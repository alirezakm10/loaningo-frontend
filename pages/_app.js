import "@/styles/globals.css";
import Layout from "@/components/Layout";
import {Manrope} from 'next/font/google'
import { I18nextProvider } from 'react-i18next';
import i18n from '@/i18n'


const manrope = Manrope({ subsets: ['latin'],weight:['300','500','700'] })

export default function App({ Component, pageProps }) {
  return (
    <I18nextProvider i18n={i18n} >
    <div className={manrope.className}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </div>
    </I18nextProvider>
  );
}
