import React from "react";
import Image from "next/image";
import { FiGithub } from "react-icons/fi";
function HomeHeader() {
  return (
    <header className="bg-[#171719] border-b-[#27272A] border-b w-full h-18.5 relative flex justify-between items-center px-10">
      <Image
        src="/logo_with_text.svg"
        alt="Logo Image"
        width={159}
        height={29}
      />
      <div className="flex gap-5">
        <h3 className="opacity-80 font-light cursor-pointer hover:opacity-100 duration-200">Features</h3>
        <h3 className="opacity-80 font-light cursor-pointer hover:opacity-100 duration-200">About</h3>
        <h3 className="opacity-80 font-light cursor-pointer hover:opacity-100 duration-200">Pricing</h3>
        <h3 className="opacity-80 font-light cursor-pointer hover:opacity-100 duration-200">Docs</h3>
      </div>
      <div className="flex gap-4">
        <button className="text-white/80 font-normal py-2 px-4 rounded-md transition duration-200 hover:bg-[#2665d8] cursor-pointer">
          Sign in
        </button>
        <button className="text-white/80 font-normal py-2 px-4 rounded-md transition duration-200 bg-linear-to-r from-[#2665d8] to-[#1e53b5] box-border border-[.5px] border-white/10 cursor-pointer">
          <FiGithub className="inline mr-2" />
          Connect Github
        </button>
      </div>
    </header>
  );
}

export default HomeHeader;
