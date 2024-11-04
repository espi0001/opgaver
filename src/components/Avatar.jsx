import Image from "next/image";
import profile1 from "../images/profile-1.jpeg";
import profile2 from "../images/profile-2.jpeg";
import profile3 from "../images/profile-3.jpeg";

const profiles = {
  "profile-1": profile1,
  "profile-2": profile2,
  "profile-3": profile3,
};

const classes = "h-10 w-10 rounded-full bg-gray-300";

export default function Avatar = ({ imgUrl, name }) {
  return imgUrl ? (
    <Image
      src={profiles[imgUrl]}
      alt={name}
      className={classes}
      width={40}
      height={40}
      priority
      placeholder="blur"
    />
  ) : (
    <div className={classes} />
  );
}
 
export default Avatar;