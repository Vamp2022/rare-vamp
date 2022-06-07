import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../assets/vamp.gif";
import { constants } from "../utils/constants";
const Intro = () => {
  return (
    <div className="w-full bg-gray-500/40 flex mt-5 smx:flex-col-reverse lg:pl-[5rem] rounded-lg overflow-hidden shadow-lg">
      <div className="w-[60%] px-[3rem] py-[4rem] smx:w-full smx:py-[1rem] ">
        <p className="font-extrabold text-sm">Welcome To</p>
        <p className="mt-2 text-2xl font-extrabold text-gray-900">
          The Rare Vamps
        </p>
        <p className="mt-2 text-md md:pr-[10rem]">
          2500 rare blood thirsty vampires came out of the underground to the
          Solana blockchain network
        </p>
        <Link href={constants.magicEden}>
          <div className="mt-5 bg-white p-2 inline-block px-7 rounded-md shadow-md cursor-pointer">
            Mint
          </div>
        </Link>
      </div>
      <div className="w-[40%] flex items-center justify-center p-5 smx:w-full ">
        <Image src={logo} height={300} width={300} className="rounded-lg" />
      </div>
    </div>
  );
};

export default Intro;
