import Head from 'next/head'
import Image from 'next/image'
import Nav from '@/components/nav'
import PortfolioPiece from '@/components/portfolio'
import projectpieces from '@/data/projects.json'
import Footer from '@/components/footer'

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

      <main className='mb-4 flex flex-center flex-wrap w-full justify-center p-6 align-center items-center h-max xl:h-screen   md:h-max sm:h-screen'>
        <PortfolioPiece />
        <PortfolioPiece />
        
        {/* {
          projectpieces.data.map((project) => (
            <PortfolioPiece
              key={project.Title}
              title={project.Title}
              text={project.Text}
              tags={project.Tags}
              links={project.Links}
              images={project.Images}
              role={project.Role}
              cover={project.Cover}
            />
          ))
        }
        */}
      </main>

      <Footer />

    </>
  )
}