"use client"; // Angiver at komponenten kører på klienten og ikke serveren.
// når vi skal arbejde med interaktivitet skal være client side renderet

import { LiaCookieBiteSolid } from "react-icons/lia";
import { IoIosClose } from "react-icons/io";

import { useState } from "react";

// Definerer CookieConsentPopup-komponenten.
const CookieConsentPopup = () => {
  // cookies er ikke accepteret som default, men føst når brugeren accepterer dem
  // Hvis vi ikke er nødt til at opdatere hele siden, så er det bedst at bruge state variabler
  // sætter Cookies til true
  const [isCookieAccepted, setIsCookieAccepted] = useState(false);
  const [isCookieAcceptedClosed, setisCookieAcceptedClosed] = useState(false);

  return (
    // hvis cookies ikke er accepteret, så vises cookies popup
    !isCookieAccepted &&
    !isCookieAcceptedClosed && (
      // Giver den sort baggrund og hvid tekst i mørk tilstand.
      <section className="bg-black dark:bg-white dark:text-black flex flex-col justify-between p-6 w-72 h-80 rounded-3xl">
        <header className="flex justify-between">
          {/* ændrer LiaCookieBiteSolid ikonets farve afhængig af temaet (mørk/lys) */}
          <LiaCookieBiteSolid className="dark:text-black text-white" size={50} />
          {/* Luk-ikon, ændrer farve baseret på temaet */}
          <IoIosClose onClick={() => setisCookieAcceptedClosed(!isCookieAcceptedClosed)} className="cursor-pointer dark:text-black text-white" size={25} />
        </header>
        <footer className="flex flex-col">
          {/* Ændrer farve baseret på temaet */}
          <p className="text-white dark:text-black leading-8 text-[25px] mb-4">We use cookies to improve your user expirence.</p>
          {/* Knap farver baseret af temaet */}
          <button
            // Hvis knappen trykkes, så sættes isCookieAccepted til false */}
            onClick={() => setIsCookieAccepted(!isCookieAccepted)}
            className={`bg-white dark:bg-black p-3 text-lg rounded-lg h-15`}
          >
            <span className="text-black dark:text-white">I like Cookies</span>
          </button>
        </footer>
      </section>
    )
  );
};

export default CookieConsentPopup; // Eksporterer komponenten til brug i andre dele af appen.
