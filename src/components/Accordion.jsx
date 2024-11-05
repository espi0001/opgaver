"use client";
import { useState } from "react";

import Item from "./Item";

const Accordion = () => {
  const [activeItem, setActiveItem] = useState(0);
  return (
    <div className="relative font-inter antialiased">
      <main className="relative min-h-screen bg-slate-50 overflow-hidden">
        <section className="w-full max-w-2xl mx-auto px-4 md:px-6 py-24">
          <h1 className="text-2xl font-bold text-slate-900 mb-4">FAQs</h1>
          <Item />
          <Item />
          <Item />
          {/* <Item item={1} activeItem={activeItem} setActiveItem={setActiveItem} />
          <Item item={2} activeItem={activeItem} setActiveItem={setActiveItem} />
          <Item item={3} activeItem={activeItem} setActiveItem={setActiveItem} /> */}
        </section>
      </main>

      <footer></footer>
    </div>
  );
};

export default Accordion;
