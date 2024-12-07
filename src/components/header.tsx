import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import Image from "next/image";
import hurt from "@/../../public/Frame 551.png";
import search from "@/../../public/Component 2.png";
import user from "@/../../public/user.png";
import Link from "next/link";

const TopHeader = () => {
  return (
    <div className="w-[1340px] pt-3 h-[48px] gap-[231px] pl-32 bg-[#000000] text-[#fafafa] flex">
      <div className="w-[750px] h-[24px]">
        <p className="font-Poppins text-sm w-[794px] h-[18px] font-normal pl-[245px] text-center">
          {`Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!`}
          <span className="w-[68px] h-[24px] font-poppins font-semibold text-sm underline text-center ml-3">
            ShopNow
          </span>
        </p>
      </div>
      <select
        name="select"
        id="select"
        className="bg-[#000000] text-[#fafafa] gap-[5px] text-center mb-3 font-normal  "
      >
        <option value="English">English</option>
      </select>
    </div>
  );
};

export default TopHeader;

export const Header = () => {
  return (
    <>
      <div className="text-gray-600 body-font w-[1170px] h-[38px] ml-[125px] mt-[20px] gap-[130px]  mb-28">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="ml-3 mt-[15px] text-xl  h-[42px] w-[118px] font-inter font-[700] text-[#000000] 3% text-[24px]">
              Exclusive
            </span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center w-[276px] h-[24px] gap-[15px] text-[#000000] mr-[90px]">
            <Link
              href="/"
              className="font-Poppins text-[16px] text-center font-normal h-[24px] w-[48px]"
            >
              Home
            </Link>
            <Link
              href=""
              className="font-Poppins text-[16px] text-center font-normal h-[24px] w-[66px]"
            >
              Contact
            </Link>
            <Link
              href=""
              className="font-Poppins text-[16px] text-center font-normal h-[24px] w-[48px]"
            >
              About
            </Link>
            <Link
              href=""
              className="font-Poppins text-[16px] text-center font-normal h-[24px] w-[61px]"
            >
              Sign Up
            </Link>
          </nav>
          <button className="inline-flex items-center bg-[#f5f5f5] border-0 py-1 px-3 focus:outline-none rounded-[4px] pt-[7px] pl-[20px] pb-[7px] pr-[12px] gap-[10px] text-base mt-4 md:mt-0 w-[243px] h-[38px]">
            <input
              type="text"
              className="w-[153px] h-[18px] text-[12px] font-Poppins font-normal opacity--[50%] text-[#000000]  bg-[#f5f5f5]"
              placeholder=" What are you looking for?"
            />

            <Image src={search} alt="heart" />
          </button>
          <Image src={hurt} alt="heart" className="mr-[10px] " />
          <Image src={user} alt="heart" className="mr-[70px] " />
        </div>
        <hr className="w-[100%]" />
      </div>
    </>
  );
};
Header();
