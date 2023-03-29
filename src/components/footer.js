import AppButton from "./button";
import { FaBeer, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { useRouter } from "next/router";
import { useState } from "react";
import Popup from "./buttonPop";

export default function Footer() {
  const router = useRouter();

  return (
    <>
      <div className="w-screen  relative  flex  justify-evenly max-sm:flex-wrap items-center bg-sand p-3">
        <div className="p-2">
          <h1 className="text-4xl mb-2   text-dark font-bold font-title">
            Follow me!
          </h1>
          <div className="flex  justify-evenly">
            <a
              href="https://www.instagram.com/seanhlam/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram
                size={40}
                className="text-dark transition-all hover:text-light-blue "
              />
            </a>

            <a
              href="https://github.com/SeanHLam"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub
                size={40}
                className="text-dark transition-all hover:text-light-blue "
              />
            </a>

            <a
              href="https://www.linkedin.com/in/seanlam384/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin
                size={40}
                className="text-dark transition-all hover:text-light-blue "
              />
            </a>
          </div>
        </div>

        <div>
          <h1 className="text-4xl mb-2   text-dark font-bold font-title">
            Contact me!
          </h1>
          <div className="max-md:justify-center flex">
            <Popup text="EMAIL..." />
          </div>
        </div>
      </div>
    </>
  );
}
