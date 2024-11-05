"use client";
import { HiDotsVertical } from "react-icons/hi";

const ColorIndicator = ({ bgColor, onClick }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-1">
      <button onClick={onClick} className={`w-5 h-5 ${bgColor} rounded-full border-2 border-white transform transition-transform duration-300 hover:scale-150 cursor-pointer`}></button>
      {/* <div className="w-0.5 h-6 bg-gray-300 my-1"></div> */}
      <HiDotsVertical />
      {/* <div className="w-0.5 h-6 bg-gray-300 my-1"></div>
      <div className="w-0.5 h-6 bg-gray-300 my-1"></div>
      <div className="w-0.5 h-6 bg-gray-300 my-1"></div>
      <div className="w-0.5 h-6 bg-gray-300 my-1"></div> */}
    </div>
  );
};

export default ColorIndicator;
