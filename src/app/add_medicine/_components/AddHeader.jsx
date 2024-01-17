import Link from "next/link";
import React from "react";
import { IoIosArrowBack } from "react-icons/io";
const AddHeader = () => {
  return (
    <div className="fixed top-0 left-0 w-full">
      <div className="flex justify-between items-center bg-[#292b2f] py-4 px-3">
        <Link href={"/"} className="text-white font-semibold py-1">
          <IoIosArrowBack size={23} />
        </Link>
        <h4 className="text-white font-extrabold text-base">Add Medicine</h4>
      </div>
    </div>
  );
};

export default AddHeader;
