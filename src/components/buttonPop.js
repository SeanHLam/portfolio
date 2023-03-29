import { useState } from "react";

export default function Popup({
  text = "Button",
  color = "blue",
  size = "medium",
  onClick,
}) {
  const [showMessage, setShowMessage] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 1400);
    const email = "seanlam384@gmail.com";
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <>
      {color === "blue" ? (
        <div
          onClick={handleCopy}
          className="cursor-pointer bg-light-blue outline outline-dark   w-44 flex justify-center p-1 drop-shadow-button  transition-all hover:translate-y-1.5 hover:translate-x-1.5 hover:drop-shadow-none"
        >
          <h1 className=" font-body text-dark">{text}</h1>
        </div>
      ) : (
        <div
          onClick={handleCopy}
          className="cursor-pointer bg-light-blue outline outline-sand  w-44 flex justify-center p-1 drop-shadow-sand  transition-all hover:translate-y-1.5 hover:translate-x-1.5 hover:drop-shadow-none"
        >
          <h1 className=" font-body text-sand">{text}</h1>
        </div>
      )}
      <div
        className={`${
          showMessage ? "h-16" : "h-0"
        } fixed bottom-0 left-0 right-0 bg-light-blue  overflow-hidden  z-50 transition-all ease-in-out duration-300`}
      >
        <div className="flex justify-center items-center h-full ">
          <p className="text-2xl    text-dark font-bold font-title">
            Email Copied to Clipboard!
          </p>
        </div>
      </div>
    </>
  );
}
