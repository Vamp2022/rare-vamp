import Image from "next/image";
import React from "react";
import logo from "../assets/logo.png";
import Link from "next/link";
import { constants } from "../utils/constants";

const Define = () => {
  return (
    <div className="w-full md:flex mt-10">
      <div className="md:w-[40%] p-4  flex items-center justify-center">
        <Image src={logo} width={400} height={400} />
      </div>
      <div className="md:w-[60%] text-center flex flex-col items-center justify-center">
        <p className="text-2xl text-gray-900 font-bold">What are Rare Vamps?</p>
        <p className="lg:w-[60%] mt-5 w-[95%]">{constants.bigDesc}</p>
        <Link href={constants.whitepaper}>
          <div className="w-[50%] mt-7 flex items-center justify-center">
            <p className="text-2xl p-3 cursor-pointer shadow-lg bg-gray-500 text-white inline-block font-bold px-10 rounded-lg">
              Whitepaper
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Define;
