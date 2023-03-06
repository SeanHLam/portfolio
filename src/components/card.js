import Image from "next/image";
import { useEffect, useState } from "react";
import AppButton from "./button";
import { useRouter } from "next/router";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Card({
  title,
  type = "project",
  image,
  link,
  linkText,
}) {
  const router = useRouter();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    fade: true,
  };

  return (
    <>
      {type === "project" ? (
        <div className="drop-shadow-solid outline-dark   max-md:flex-wrap mt-12 mb-8  max-md:justify-center max-sm:justify-between justify-between   flex flex-center max-md:p-4   p-12  bg-sand">
          <div className=" flex justify-center    m-4 max-sm:m-4 max-md:w-64  w-80">
            <div className=" outline outline-dark drop-shadow-button p-5 w-44  bg-sand">
              <Slider {...settings}>
                <div>
                  <Image
                    src="/trackstacks.jpeg"
                    alt="Image 1"
                    width={300}
                    height={300}
                  />
                </div>
                <div>
                  <Image
                    src="/mindfull.jpeg"
                    alt="Image 2"
                    width={300}
                    height={300}
                  />
                </div>
                <div>
                  <Image
                    src="/trackstacks2.jpeg"
                    alt="TinyPaws Screenshot"
                    width={300}
                    height={300}
                  />
                </div>
              </Slider>
            </div>
          </div>

          <div className="m-4 max-sm:m-1 max-sm:w-fit w-80">
            <h1 className="text-4xl mb-1   text-dark font-bold font-title">
              My Projects
            </h1>
            <p className="font-body mb-4 text-dark">
              I am proficient with React, Next.js, and React Native. I also have
              experience with the back-end, using Firebase, Prisma, and MySQL.
              My favourite type of projects are ones aimed towards helping
              others. My favourite project of mine is the app TrackStacks is a
              to-do app for people with ADHD.
            </p>
            <AppButton
              text="MORE PROJECTS"
              onClick={() => router.push("/projects")}
              color="blue"
              size="medium"
            />
          </div>
        </div>
      ) : (
        <div className="drop-shadow-solid outline-dark max-md:flex-wrap mt-12 mb-24   max-md:justify-center max-sm:justify-between justify-between   flex flex-center max-md:p-4   p-12  bg-sand">
          <div className="m-4 max-sm:m-2 flex justify-center items-center max-md:w-64 w-80">
            <Image
              className="outline outline-dark drop-shadow-button"
              alt="3d render of dog with construction hat"
              src="/sean.jpeg"
              width={300}
              height={300}
            />
          </div>

          <div className="m-4 max-sm:m-1 max-sm:w-fit w-80">
            <h1 className="text-4xl mb-1   text-dark font-bold font-title">
              About Me
            </h1>
            <p className="font-body mb-4 text-dark">
              My name is Sean and I&#39;m a front-end web developer! I&#39;m
              based in Vancouver and I first started my journey at BCIT. My
              passion for learning, problem solving, and teaching is what drives
              me to continuously hone my skills. I love to create anything that
              helps people, while also having some fun along the way!
            </p>
            <AppButton
              text="MORE ABOUT ME"
              onClick={() => router.push("/projects")}
              color="blue"
              size="medium"
            />
          </div>
        </div>
      )}
    </>
  );
}
