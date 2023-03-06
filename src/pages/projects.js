import Head from 'next/head'
import Image from 'next/image'
import Nav from '@/components/nav'


export default function Projects() {
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
        <div className='drop-shadow-solid justify-center items-center flex-col flex flex-center  p-6  bg-sand'>
          <h1 className='text-4xl p-2  text-dark font-bold'>We Are Currently Under Construction!</h1>
          <Image alt='3d render of dog with construction hat' src='/dog.png' width={300} height={300} />
          <p className='text-xl p-2 text-dark'>
            In the mean time check out my portfolio at: <a className='text-light-blue hover:text-dark-blue' href='https://portfolio.seanlam.ca/'> portfolio.seanlam.ca</a>

          </p>

        </div>

      </main>


    </>
  )
}