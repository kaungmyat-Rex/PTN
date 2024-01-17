"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { AiFillMedicineBox } from "react-icons/ai";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
const Nav = () => {
  const pathname = usePathname("");
  return (
    <div className="fixed bottom-0 left-0 w-full bg-[#2d3138]">
      <div className="flex justify-around items-center pt-2 pb-4">
        <Link
          href={"/"}
          className={`${
            pathname === "/" ? "text-white" : "text-[#adb6bd]"
          } flex flex-col justify-center items-center`}
        >
          <AiFillMedicineBox size={30} />
          <span className="text-sm">Medicines</span>
        </Link>
        <Link
          href={"/loans"}
          className={`${
            pathname === "/loans" ? "text-white" : "text-[#adb6bd]"
          } flex flex-col justify-center items-center`}
        >
          <RiMoneyDollarCircleFill size={30} />
          <span className="text-sm">Loanslist</span>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
