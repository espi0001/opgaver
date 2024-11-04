"use client";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

const Next = () => {
  return (
    <div className="flex gap-4 items-center">
      <FaArrowLeftLong />
      <p>1</p>
      <FaArrowRight />
    </div>
  );
};

export default Next;
