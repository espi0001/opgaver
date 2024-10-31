"use client";
import { LiaCookieBiteSolid } from "react-icons/lia";
import { IoIosClose } from "react-icons/io";

const CookieConsentPopup = () => {
  return (
    <section className="bg-black flex flex-col justify-between p-6 w-72 h-80 rounded-3xl">
      <header className="flex justify-between">
        <LiaCookieBiteSolid className="text-white" size={50} />
        <IoIosClose className="cursor-pointer text-white" size={25} />
      </header>
      <footer className="flex flex-col">
        <p className="text-white leading-8 text-[25px] mb-4">
          We use cookies to improve your user expirence.
        </p>
        <button className={`p-3 text-lg rounded-lg h-15 bg-slate-50`}>
          <span className="text-black">I like Cookies</span>
        </button>
      </footer>
    </section>
  );
};

export default CookieConsentPopup;
