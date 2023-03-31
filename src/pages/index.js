import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { useEffect, useRef } from "react";
import { useRouter } from "next/router";
import Nav from "@/components/nav";
import AppButton from "@/components/button";
import Typewriter from "typewriter-effect";
import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import Card from "@/components/card";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  const navRef = useRef(null);

  const scrollView = () => {
    console.log(navRef.current.offsetTop);
    window.scrollTo({
      top: navRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <>
      <Head>
        <title>Sean Lam</title>
        <meta name="description" content="Sean Lam's Portfolio Site" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="">
          <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
              background: {
                color: {
                  value: "#16161d",
                },
              },
              fpsLimit: 120,
              interactivity: {
                events: {
                  onClick: {
                    enable: true,
                    mode: "push",
                  },
                  onHover: {
                    enable: true,
                    mode: "repulse",
                  },
                  resize: true,
                },
                modes: {
                  push: {
                    quantity: 4,
                  },
                  repulse: {
                    distance: 100,
                    duration: 0.4,
                  },
                },
              },
              particles: {
                color: {
                  value: "#ffffff",
                },
            
                collisions: {
                  enable: true,
                },

                move: {

                  direction: "none",
                  enable: true,
                  outModes: {
                    default: "bounce",
                  },
                  random: false,
                  speed: 6,
                  straight: false,
                },
                number: {
                  density: {
                    enable: true,
                    area: 800,
                  },
                  value: 80,
                },
                opacity: {
                  value: 1,
                },
                shape: {
                  type: "image",
                  image: {
                    src: "/logo.png"
                }
              },
                size: {
                  value: { min: 10, max: 30 },
                },
              },
              detectRetina: true,
            }}
            
          />
        </div>
      <div className=" start w-screen m-0 flex flex-col  h-screen justify-center items-center">
        

        <Typewriter
          options={{
            strings: [
              `
              Hey, My Name Is <span style="color: #02B0F3">Sean Lam!</span>  
              
             `,
              `
             
              I'm A <span style="color: #02B0F3">Front-End Web Developer... </span>
              `,
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 40,
            changeDelay: 40,
            changeDeleteSpeed: 100,
            delay: 40,
            changeDelay: 100,
          }}
          className={`typewriter`}
          
        />

        <AppButton
          onClick={scrollView}
          text="SEE MY PROJECTS"
          color="white"
          size="medium"
        />
      </div>
      <div ref={navRef}>
        <Nav />
      </div>

      <main className="z-20 flex flex-center w-full flex-col justify-center p-6 align-center items-center h-max">
        
     <Card />

     <Card type="about"/>
        
        
        
        
        
        
        
        
        
      
      </main>
    
      <Footer/>
    </>
  );
}
