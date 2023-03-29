import { useState } from "react";
import Image from "next/image";
import {
  FaBeer,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaGlobe,
} from "react-icons/fa";
import { useRouter } from "next/router";
import ImageCarousel from "./carousel";

const PortfolioPiece = ({
  title = "TrackStacks",
  text = "TrackStacks is a task-tracking app aimed at people with ADHD. Completing tasks rewards you with points that can be spent on decoration items in the app. TrackStacks was built with Expo and uses Firebase to store user data. Creating the To-do feature took the longest but was really rewarding to complete.",
  images = ["/dog.png", "/logo.png", "/dog.png"],
  tags = "React, Firebase, Expo, Tailwind CSS",
  cover = "/dog.png",
  links = [
    {
      Link: "https://github.com/SeanHLam",
      Site: "GitHub",
    },
    {
      Link: "https://github.com/SeanHLam",
      Site: "GitHub",
    },
  ],
  role = "Frontend Developer",
}) => {
  const router = useRouter();
  const [showPopup, setShowPopup] = useState(false);

  const handlePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <>
      <div
        onClick={handlePopup}
        className="group m-2 overflow-none w-72 h-72  bg-sand  cursor-pointer  outline outline-dark flex justify-center drop-shadow-button  transition-all hover:translate-y-1.5 hover:translate-x-1.5 hover:drop-shadow-none"
      >
        <h1 className="proj z-10 fixed top-0 left-0 bottom-0 right-0 flex items-center justify-center font-title text-5xl text-sand hover:text-light-blue transition-all duration-500 ">
          {title}
        </h1>
        <div className="w-full fixed bg-dark h-full opacity-70 hover:bg-light-blue top-0 left-0 bottom-0 right-0 flex items-center justify-center transition-all duration-300" />
        <img alt={title} className=" object-cover " src={cover} />
      </div>

      <div
        className={`${
          showPopup ? "h-screen" : "h-0"
        } fixed overflow-auto top-0 left-0 w-full  bg-sand-dark  z-50  transition-all ease-in-out duration-1000`}
      >
        <div className=" relative flex flex-col items-center h-full mx-auto mt-10 p-4 lg:w-6/12  sm:p-6 lg:p-8">
          <div className=" w-full  flex justify-end">
            <button onClick={handlePopup} className="mb-8 pt-4 ">
              <svg
                className="h-6 w-6 text-dark hover:text-light-blue transition ease-in-out duration-150"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {images.length > 1 ? (
            
              <ImageCarousel images={images} />
           
          ) : (
            <Image alt={title} src={images[0]} width={200} height={200} />
          )}

          {/* <Image src={images[0]} width={200} height={200} /> */}

          <div className="pt-4 mt-8 text-left  sm:pt-0">
            <h2 className="text-4xl font-title text-dark mb-1">{title}</h2>
            <p className="text-dark text-body leading-relaxed mb-2">
              <b>{role}</b>
            </p>
            <p className="text-dark text-body leading-relaxed mb-4">{text}</p>
            <div className="flex justify-between flex-col  sm:flex-row">
              <p className="text-dark text-body leading-relaxed mb-4">
                <b>Tags:</b> {tags}
              </p>
              <div className="flex">
                {links.map((link) => (
                  <a
                    key={link.Link}
                    href={link.Link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-dark text-body leading-relaxed m-1 mb-4"
                  >
                    {link.Site === "GitHub" ? (
                      <FaGithub
                        size={40}
                        className="text-dark transition-all hover:text-light-blue "
                      />
                    ) : (
                      <FaGlobe
                        size={40}
                        className="text-dark transition-all hover:text-light-blue "
                      />
                    )}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioPiece;
