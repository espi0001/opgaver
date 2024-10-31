"use client"; // Angiver at komponenten kører på klienten og ikke serveren.

import { LiaCookieBiteSolid } from "react-icons/lia";
import { IoIosClose } from "react-icons/io";

// Definerer CookieConsentPopup-komponenten.
const CookieConsentPopup = () => {
  return (
    // Giver den sort baggrund og hvid tekst i mørk tilstand.
    <section className="bg-black dark:bg-white dark:text-black flex flex-col justify-between p-6 w-72 h-80 rounded-3xl">
      <header className="flex justify-between">
        {/* ændrer LiaCookieBiteSolid ikonets farve afhængig af temaet (mørk/lys) */}
        <LiaCookieBiteSolid className="dark:text-black text-white" size={50} />
        {/* Luk-ikon, ændrer farve baseret på temaet */}
        <IoIosClose className="cursor-pointer dark:text-black text-white" size={25} />
      </header>
      <footer className="flex flex-col">
        {/* Besked til brugeren om brugen af cookies - ændrer farve baseret på temaet */}
        <p className="text-white dark:text-black leading-8 text-[25px] mb-4">We use cookies to improve your user expirence.</p>
        {/* Knap med baggrundsfarve og tekstfarve afhængig af temaet */}
        <button className={`bg-white dark:bg-black p-3 text-lg rounded-lg h-15`}>
          <span className="text-black dark:text-white">I like Cookies</span>
        </button>
      </footer>
    </section>
  );
};

export default CookieConsentPopup; // Eksporterer komponenten til brug i andre dele af appen.
