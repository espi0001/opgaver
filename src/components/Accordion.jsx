"use client";
import { useState } from "react";

import Item from "./Item";

const Accordion = () => {
  const [isOpen, setIsOpen] = useState(0);

  return (
    <div className="relative font-inter antialiased">
      <main className="relative min-h-screen bg-slate-50 overflow-hidden">
        <section className="w-full max-w-2xl mx-auto px-4 md:px-6 py-24">
          <h1 className="text-2xl font-bold text-slate-900 mb-4">FAQs</h1>
          {/* Vi siger, at hvis isOpen er true, så skal vi vise Item komponenten, og så skal vi give den 3 props, som er isOpen, setIsOpen og item. */}
          {/* vi giver item en number, så vi kan se hvilken item vi er på */}
          <Item isOpen={isOpen} setIsOpen={setIsOpen} item={1} />
          <Item isOpen={isOpen} setIsOpen={setIsOpen} item={2} />
          <Item isOpen={isOpen} setIsOpen={setIsOpen} item={3} />
        </section>
      </main>

      <footer></footer>
    </div>
  );
};

export default Accordion;
