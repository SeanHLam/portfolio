import Head from 'next/head'
import Image from 'next/image'
import Nav from '@/components/nav'
import PortfolioPiece from '@/components/portfolio'

export default function About() {
  return (
    <>
      <Head>
        <title>Sean Lam</title>
        <meta name="description" content="Sean Lam's Portfolio Site" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>

        <Nav />

      <main className='flex flex-center w-full justify-center p-6 align-center items-center h-screen'>
        <PortfolioPiece />
       
      </main>


    </>
  )
}