import Image from "next/image";

const PictureWBagground = ({ onClick, bgColor, imageSkift }) => {
  return (
    <div className="relative flex flex-col items-center cursor-pointer">
      <Image onClick={onClick} src={imageSkift} alt="image of applewatch" layout="intrinsic" className="h-24 object-contain z-10" width={500} height={500} />
      <div className={`absolute bottom-0 w-full h-14 bg-[#434558] bg-opacity-60 rounded-lg ${bgColor}`}></div>
    </div>
  );
};

export default PictureWBagground;
