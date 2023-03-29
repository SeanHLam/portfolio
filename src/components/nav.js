import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Nav() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 400);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {isMobile ? (
        <div className="flex z-1 relative flex-row justify-center bg-sand items-center w-full p-3">
      
        <div className="flex flex-row justify-center items-center">
        <Link href="/">
            <Image src="/logo.png" alt="Logo" width={60} height={60} />
          </Link>
          <Link href="/">
            <p className="text-dark font-title font-bold text-xl p-2 transition-all hover:text-light-blue">
              Home
            </p>
          </Link>
          {/* <Link href="/about">
            <p className="text-dark  font-title font-bold text-xl p-2 transition-all hover:text-light-blue">
              About
            </p>
          </Link> */}
          <Link href="/projects">
            <p className="text-dark  font-title font-bold text-xl p-2 transition-all hover:text-light-blue">
              Projects
            </p>
          </Link>
          <Link target="_blank"
                    rel="noopener noreferrer" href="https://portfolio.seanlam.ca/wp-content/uploads/2023/03/Sean_Lam_Resume.pdf">
            <p className="text-dark  font-title font-bold text-xl p-2 transition-all hover:text-light-blue">
              Resume
            </p>
          </Link>
       
       
        </div>
      </div>
      ) : (
        <div className="flex pl-8 pr-8 z-1 relative flex-row justify-between bg-sand items-center w-full p-3">
        <div className="flex flex-row justify-center items-center">
          <Link href="/">
            <Image src="/logo.png" alt="Logo" width={60} height={60} />
          </Link>
        </div>
        <div className="flex flex-row justify-center items-center">
          <Link href="/">
            <p className="text-dark font-title font-bold text-xl p-2 transition-all hover:text-light-blue">
              Home
            </p>
          </Link>
          {/* <Link href="/about">
            <p className="text-dark font-title font-bold text-xl p-2 transition-all hover:text-light-blue">
              About
            </p>
          </Link> */}
          <Link href="/projects">
            <p className="text-dark font-title font-bold text-xl p-2 transition-all hover:text-light-blue">
              Projects
            </p>
          </Link>
          <Link  target="_blank"
                    rel="noopener noreferrer" href="https://portfolio.seanlam.ca/wp-content/uploads/2023/03/Sean_Lam_Resume.pdf">
            <p className="text-dark  font-title font-bold text-xl p-2 transition-all hover:text-light-blue">
              Resume
            </p>
          </Link>
 
        </div>
      </div>
      )}
      
    </>
  );
}
