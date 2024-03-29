import { Faq } from "@/components"
import Head from 'next/head'

const faq = () => {
  return (
    <section className="flex flex-col" >
    <Head>
        <title>Loaningo, FAQ</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Faq />
    </section>
  )
}

export default faq