import React from "react";
import { IoIosSettings } from "react-icons/io";
const page = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-28 gap-y-3">
      <div className="flex justify-center items-center gap-x-2 text-[#adb6bd] text-2xl">
        <IoIosSettings size={25} className="animate-spin" />
        <p>Coming Soon</p>
      </div>
      <div className="text-[#adb6bd]">
        Developed by{" "}
        <a className="text-[#4184b8]" href="https://kaungmyat.netlify.app/">
          @kaungmyat
        </a>
        <p>(aka U Pe Than Nyunt Fav Son)</p>
      </div>
    </div>
  );
};

export default page;
