import Link from "next/link";
import React from "react";
import { PiPillDuotone } from "react-icons/pi";
const Header = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-20">
      <div className="flex justify-between items-center bg-[#292b2f] py-4 px-3">
        <h4 className="text-white font-extrabold text-base">Pe Than Nyunt</h4>
        <Link
          href={"/add_medicine"}
          className="text-white font-semibold text-sm flex justify-center items-center gap-x-1 bg-[#36393e] rounded-2xl py-1 px-2"
        >
          <PiPillDuotone size={21} />
          Add Medicine
        </Link>
      </div>
    </div>
  );
};

export default Header;
