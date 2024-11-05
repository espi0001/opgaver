"use client";
import { useState } from "react";

import Item from "./Item";

const Accordion = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative font-inter antialiased">
      <main className="relative min-h-screen bg-slate-50 overflow-hidden">
        <section className="w-full max-w-2xl mx-auto px-4 md:px-6 py-24">
          <h1 className="text-2xl font-bold text-slate-900 mb-4">FAQs</h1>
          <Item isOpen={isOpen} setIsOpen={setIsOpen} item={1} />
          <Item isOpen={isOpen} setIsOpen={setIsOpen} item={2} />
          <Item isOpen={isOpen} setIsOpen={setIsOpen} item={3} />
          <Item isOpen={isOpen} setIsOpen={setIsOpen} item={4} />
        </section>
      </main>

      <footer></footer>
    </div>
  );
};

export default Accordion;
