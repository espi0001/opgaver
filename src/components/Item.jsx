"use client";
import { useState } from "react";

import { IoCloseOutline } from "react-icons/io5";
const Item = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-slate-200 py-4">
      <header>
        <button
          onClick={() => {
            // Det er logical &&
            setIsOpen(!isOpen);
          }}
          className="flex items-center justify-between text-black w-full py-2 font-semibold"
        >
          <span className="">Is it sunny in DK?</span>
          <span>
            <IoCloseOutline className="text-black ml-8 self-start" />
          </span>
        </button>
      </header>

      {/* Her er der en if statement, som kun viser det indhold, som er i denne if statement, hvis isOpen er true */}
      {isOpen && (
        <section className="text-sm text-slate-600 bg-slate-100 p-4">
          <p className="text-black">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam saepe expedita tempore dicta aspernatur culpa eveniet animi cumque labore impedit aperiam, iusto consectetur voluptatibus odio quam? Mollitia veritatis ut deleniti.</p>
        </section>
      )}
    </div>
  );
};

export default Item;
