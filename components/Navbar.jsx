import Link from "next/link";
import React from "react";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";
import { constants } from "../utils/constants";

const Navbar = () => {
  return (
    <>
      <div className="w-full flex items-center justify-between">
        <p className="uppercase text-3xl font-bold tracking-[1rem] mdx:text-xl mdx:tracking-[0.25rem]">
          Rare Vamps
        </p>
        <div className="flex">
          <Link href={constants.twitter}>
            <div className="text-4xl mdx:text-3xl smx:text-2xl  cursor-pointer duration-500 hover:text-blue-500">
              <AiFillTwitterCircle />
            </div>
          </Link>
          <Link href={constants.discord}>
            <div className="text-4xl mdx:text-3xl smx:text-2xl ml-4 cursor-pointer duration-500 hover:text-[#5865F2]">
              <FaDiscord />
            </div>
          </Link>
        </div>
      </div>
      <div className="w-full bg-gray-700 p-[1px] mt-5 rounded-full"></div>
    </>
  );
};

export default Navbar;
