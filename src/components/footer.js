import AppButton from "./button";
import { FaBeer, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { useRouter } from "next/router";

export default function Footer() {
  const router = useRouter();
  return (
    <>
      <div className="w-screen  relative z-30 flex  justify-evenly max-sm:flex-wrap items-start bg-sand p-3">
        <div className="p-2">
          <h1 className="text-4xl mb-2   text-dark font-bold font-title">
            Follow me!
          </h1>
          <div className="flex justify-between">
            <FaInstagram
              onClick={() =>
                router.push("https://www.instagram.com/seanhlam/?hl=en")
              }
              size={40}
              className="text-dark transition-all hover:text-light-blue "
            />
            <FaGithub
              onClick={() =>
                router.push("https://github.com/SeanHLam")
              }
              size={40}
              className="text-dark transition-all hover:text-light-blue "
            />
            <FaLinkedin
              onClick={() =>
                router.push("https://www.linkedin.com/in/seanlam384/")
              }
              size={40}
              className="text-dark transition-all hover:text-light-blue "
            />
          </div>
        </div>

        <div>
          <h1 className="text-4xl mb-2   text-dark font-bold font-title">
            Contact me!
          </h1>
          <div className="max-md:justify-center flex">
          <AppButton
            onClick={() => router.push("/contact")}
            text="CONTACT..."
          ></AppButton>

          </div>
          
        </div>
      </div>
    </>
  );
}
