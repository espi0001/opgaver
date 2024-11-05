"use client";
import { useState } from "react";

import { IoCloseOutline } from "react-icons/io5";
const Item = ({ activeItem, setActiveItem, Item }) => {
  return (
    <div>
      <div>
        <header>
          <button
            onClick={() => {
              activeItem == item ? setActiveItem(0) : setActiveItem(item);
            }}
            className="flex items-center justify-between text-black"
          >
            <span>Is it sunny in DK?</span>
            <span>
              <IoCloseOutline className="text-black" />
            </span>
          </button>
        </header>
        <section>
          <p className="text-black">YES</p>
        </section>
      </div>
    </div>
  );
};

export default Item;
