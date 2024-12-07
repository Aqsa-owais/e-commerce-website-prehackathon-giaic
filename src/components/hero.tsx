import React from "react";
import { PiGreaterThanBold } from "react-icons/pi";
import Image from "next/image";
import banner from "@/../../public/Frame 560.png";
import time from "@/../../public/Group 1000005937.png";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Card from "./card";
import category from "@/../../public/catogery.png";
import cart from "@/../../public/Cart.png";
import cart1 from "@/../../public/Cart (1).png";
import cart2 from "@/../../public/Cart (2).png";
import cart3 from "@/../../public/Cart (3).png";
import fivestr from "@/../../public/Five star.png";
import fourhalf from "@/../../public/Four Half Star.png";
import cart4 from "@/../../public/Cart (4).png"
import cart5 from "@/../../public/Cart (5).png"
import cart6 from "@/../../public/Cart copy.png"
import cart7 from "@/../../public/Cart (6).png"
import cart11 from "@/../../public/Cart (11).png"
import cart12 from "@/../../public/Cart (12).png"
import cart13 from "@/../../public/Cart (13).png"
import cart14 from "@/../../public/Cart (14).png"
import phone from "@/../../public/phone.png"
import computer from "@/../../public/computer.png"
import headphones from "@/../../public/headphones.png"
import plussign  from "@/../../public/plus.png"
import switches from "@/../../public/switch.png"
import camera from "@/../../public/camera.png"

const Hero = () => {
  return (
    <div className="flex p-6">
      <div className="flex md:text-left">
        <div className="w-[217px] h-[344px] gap-[9px] ml-[100px] p-4 flex flex-col">
          {/* Women's Fashion */}
          <div className="flex items-center justify-between">
            <p className="font-Poppins font-normal text-[16px]">{`Women’s Fashion`}</p>
            <PiGreaterThanBold className="w-[14px] h-[14px] " />
          </div>
          {/* Men's Fashion */}
          <div className="flex items-center justify-between">
            <p className="font-Poppins font-normal text-[16px]">{`Men’s Fashion`}</p>
            <PiGreaterThanBold className="w-[14px] h-[14px] " />
          </div>
          {/* Electronics */}
          <p className="font-Poppins font-normal text-[16px]">Electronics</p>
          {/* Home & Lifestyle */}
          <p className="font-Poppins font-normal text-[16px]">
            Home & Lifestyle
          </p>
          {/* Medicine */}
          <p className="font-Poppins font-normal text-[16px]">Medicine</p>
          {/* Sports & Outdoor */}
          <p className="font-Poppins font-normal text-[16px]">
            Sports & Outdoor
          </p>
          {/* Baby’s & Toys */}
          <p className="font-Poppins font-normal text-[16px]">{`Baby’s & Toys`}</p>
          {/* Groceries & Pets */}
          <p className="font-Poppins font-normal text-[16px]">
            Groceries & Pets
          </p>
          {/* Health & Beauty */}
          <p className="font-Poppins font-normal text-[16px]">
            Health & Beauty
          </p>
        </div>
      </div>
      <div>
        <div className="w-[2px] h-[350px] bg-[#000000] opacity-30 mr-[30px]"></div>
      </div>
      <div>
        <Image src={banner} alt="banner" className="mr-5" />
      </div>
    </div>
  );
};

export default Hero;

export const Todays = () => {
  return (
    <div>
      <div className="h-[103px] w-[211px] gap-[24px] flex ml-[150px]">
        <div className="w-[20px] h-[40px] bg-[#db4444] rounded-[4px] mt-9"></div>
        <h2 className="font-Poppins w-[40px] h-[20px] text-[16px] font-semibold text-[#db4444] pt-[10px] mt-9">{`Today’s`}</h2>
      </div>
      <div className="flex justify-between ml-[150px]">
        <h2 className="w-[300px] h-[48px] font-semibold text-4xl 4%">
          Flash Sales
        </h2>
        <Image
          src={time}
          alt="time"
          width={1000}
          height={1000}
          className="w-[302px] h-[50px] mr-[300px] mt-[-15px]"
        />
        <div className="flex mr-[110px] gap-3">
          <button className="p-4 bg-[#F5F5F5] rounded-full">
            <FaArrowLeft className="w-[21px] h-[21px]" />
          </button>
          <button className="p-4 bg-[#F5F5F5] rounded-full">
            <FaArrowRight className="w-[21px] h-[21px]" />
          </button>
        </div>
      </div>
    </div>
  );
};

export const CartDetails = () => {
  const data = [
    {
      id: 1,
      img: "/Frame 570.png",
      title: "HAVIT HV-G92 Gamepad",
      price: "$120 $160",
    },
    {
      id: 2,
      img: "/keyboard.png",
      title: "AK-900 Wired Keyboard",
      price: "$960 $1160",
    },
    {
      id: 3,
      img: "/dragon.png",
      title: "IPS LCD Gaming Monitor",
      price: "$370 $400",
    },
    {
      id: 4,
      img: "/chair.png",
      title: "S-Series Comfort Chair ",
      price: "$375 $400",
    },
  ];
  return (
    <div className="flex gap-[16px] ml-[150px] w-[1170px] h-[350px] mt-[40px]">
      {data.map((item) => (
        <Card
          key={item.id}
          img={item.img}
          title={item.title}
          price={item.price}
        ></Card>
      ))}
    </div>
  );
};

export const Hero3 = () => {
  return (
    <div>
      <Image
        src={category}
        alt="category"
        width={1000}
        height={1000}
        className="w-[1170px] ml-[150px] h-[500px] mr-[50px] mt-11"
      />
      <div className="h-[103px] w-[211px] gap-[24px] flex ml-[150px]">
        <div className="w-[70px] h-[40px] bg-[#db4444] rounded-[4px] mt-9"></div>
        <h2 className="font-Poppins w-[460px] h-[20px] text-[16px] font-semibold text-[#db4444] pt-[10px] mt-9">{`Our Products`}</h2>
      </div>
      <div className="flex justify-between ml-[150px]">
        <h2 className="w-[450px] h-[48px] font-semibold text-4xl 4%">
          Explore Our Products
        </h2>

        <div className="flex mr-[110px] gap-3">
          <button className="p-4 bg-[#F5F5F5] rounded-full">
            <FaArrowLeft className="w-[21px] h-[21px]" />
          </button>
          <button className="p-4 bg-[#F5F5F5] rounded-full">
            <FaArrowRight className="w-[21px] h-[21px]" />
          </button>
        </div>
      </div>
      <div className=" flex w-[1170px] h-[350px] gap-4 ml-[150px] rounded-[3px] mt-[70px]">
        <div className="bg-gray-400 w-[270px] h-[250px]">
          <Image
            src={cart4}
            alt=""
            width={1000}
            height={1000}
            className="w-[270px] h-[270px]"
          />
          <p className="font-Poppins w-[218px] h-[24px] text-[#000000]">
            {`Breed Dry Dog Food`}
          </p>
          <p className="font-Poppins w-[218px] h-[24px] text-[#000000]">
            {`$260`} <span>{`$360`}</span>
          </p>
          <Image src={fivestr} alt="str" />
        </div>
        <div className="bg-gray-400 w-[270px] h-[270px]">
          <Image
            src={cart5}
            alt=""
            width={1000}
            height={1000}
            className="w-[270px] h-[270px]"
          />
          <p className="font-Poppins w-[218px] h-[24px] text-[#000000]">
            {`CANON EOS DSLR Camera`}
          </p>
          <p className="font-Poppins w-[118px] h-[24px] text-[#000000]">
            {`$960`} <span>{`$1160`}</span>
          </p>
          <Image src={fourhalf} alt="str" />
        </div>
        <div className="bg-gray-400 w-[270px] h-[250px]">
          <Image
            src={cart7}
            alt=""
            width={1000}
            height={1000}
            className="w-[270px] h-[270px]"
          />
          <p className="font-Poppins w-[218px] h-[24px] text-[#000000]">
            {`ASUS FHD Gaming Laptop`}
          </p>
          <p className="font-Poppins w-[118px] h-[24px] text-[#000000]">
            {`$160`} <span>{`$170`}</span>
          </p>
          <Image src={fourhalf} alt="str" />
        </div>
        <div className="bg-gray-400 w-[270px] h-[250px]">
          <Image
            src={cart6}
            alt=""
            width={1000}
            height={1000}
            className="w-[270px] h-[270px]"
          />
          <p className="font-Poppins w-[218px] h-[24px] text-[#000000]">
          {`Curology Product Set `}
          </p>
          <p className="font-Poppins w-[118px] h-[24px] text-[#000000]">{`$360`}</p>
          <Image src={fivestr} alt="str" />
        </div>
      </div>
      <div className=" flex w-[1170px] h-[350px] gap-4 ml-[150px] rounded-[3px] mt-10">
        <div className="bg-gray-400 w-[270px] h-[250px]">
          <Image
            src={cart11}
            alt=""
            width={1000}
            height={1000}
            className="w-[270px] h-[270px]"
          />
          <p className="font-Poppins w-[218px] h-[24px] text-[#000000]">
            {`Kids Electric Car`}
          </p>
          <p className="font-Poppins w-[118px] h-[24px] text-[#000000]">
            {`$260`} <span>{`$360`}</span>
          </p>
          <Image src={fivestr} alt="str" />
        </div>
        <div className="bg-gray-400 w-[270px] h-[270px]">
          <Image
            src={cart12}
            alt=""
            width={1000}
            height={1000}
            className="w-[270px] h-[270px]"
          />
          <p className="font-Poppins w-[218px] h-[24px] text-[#000000]">
            {`Jr. Zoom Soccer Cleats`}
          </p>
          <p className="font-Poppins w-[118px] h-[24px] text-[#000000]">
            {`$960`} <span>{`$1160`}</span>
          </p>
          <Image src={fourhalf} alt="str" />
        </div>
        <div className="bg-gray-400 w-[270px] h-[250px]">
          <Image
            src={cart13}
            alt=""
            width={1000}
            height={1000}
            className="w-[270px] h-[270px]"
          />
          <p className="font-Poppins w-[218px] h-[24px] text-[#000000]">
            {`GP11 Shooter USB Gamepad`}
          </p>
          <p className="font-Poppins w-[118px] h-[24px] text-[#000000]">
            {`$160`} <span>{`$170`}</span>
          </p>
          <Image src={fourhalf} alt="str" />
        </div>
        <div className="bg-gray-400 w-[270px] h-[250px]">
          <Image
            src={cart14}
            alt=""
            width={1000}
            height={1000}
            className="w-[270px] h-[270px]"
          />
          <p className="font-Poppins w-[218px] h-[24px] text-[#000000]">
            {`Quilted Satin Jacket`}
          </p>
          <p className="font-Poppins w-[118px] h-[24px] text-[#000000]">{`$360`}</p>
          <Image src={fivestr} alt="str" />
        </div>
      </div>
      <button className="bg-[#DB4444] w-[234px] h-[56px] mt-[70px] text-center font-Poppins text-[#fafafa] ml-[540px] rounded-[4px]">
        View All Products
      </button>
    </div>
    
  );
};

export const Button = () => {
  return (
    <>
      <button className="bg-[#DB4444] w-[234px] h-[56px] mt-[3px] text-center font-Poppins text-[#fafafa] ml-[540px] rounded-[4px]">
        View All Products
      </button>
      <hr className="w-[100%] mt-14" />
    </>
  );
};

export const OurProducts = () => {
  return (
    <>
      <div className="h-[103px] w-[211px] gap-[24px] flex ml-[150px]">
        <div className="w-[50px] h-[40px] bg-[#db4444] rounded-[4px] mt-9"></div>
        <h2 className="font-Poppins w-[460px] h-[20px] text-[16px] font-semibold text-[#db4444] pt-[10px] mt-9">{`Our Products`}</h2>
      </div>
      <div className="flex justify-between ml-[150px]">
        <h2 className="w-[450px] h-[48px] font-semibold text-4xl 4%">
          Browse By Category
        </h2>

        <div className="flex mr-[110px] gap-3">
          <button className="p-4 bg-[#F5F5F5] rounded-full">
            <FaArrowLeft className="w-[21px] h-[21px]" />
          </button>
          <button className="p-4 bg-[#F5F5F5] rounded-full">
            <FaArrowRight className="w-[21px] h-[21px]" />
          </button>
        </div>
      </div>
      {/* new code */}
      <div className=" flex gap-3 w-[1170px] h-[145px] ml-[150px] mt-7">
        <div className="w-[170px] h-[145px] border-[2px] rounded-[2px] border-gray-400">
          <Image
            src={phone}
            alt="phone"
            width={700}
            height={700}
            className="w-[90px] h-[90px] ml-[40px] mt-[30px]"
          />
          <p className="font-poppins text[#000000] ml-[40px] mt-[30px]" >Phones</p>

        </div>
        <div className="w-[170px] h-[145px] border-[2px] rounded-[2px] border-gray-400 ">
          <Image
            src={computer}
            alt=""
            width={1000}
            height={1000}
            className="w-[90px] h-[90px] ml-[40px] mt-[30px]"
          />
        <p className="font-poppins text[#000000] ml-[40px] mt-[30px]" >Computers</p>

        </div>
        <div className="w-[170px] h-[145px] border-[2px] rounded-[2px] border-gray-400 ">
          <Image
            src={switches}
            alt=""
            width={1000}
            height={1000}
            className="w-[90px] h-[90px] ml-[40px] mt-[30px]"
          />
          <p className="font-poppins text[#000000] ml-[40px] mt-[30px]" >SmartWatch</p>
        </div>
        <div className="w-[170px] h-[145px] border-[2px] rounded-[2px] border-gray-400  bg-[#DB4444]">
          <Image
            src={camera}
            alt=""
            width={1000}
            height={1000}
            className="w-[90px] h-[90px] ml-[40px] mt-[30px]"
          />
          <p className="font-poppins text[#000000] ml-[40px] mt-[30px]" >Camera</p>
        </div>
        <div className="w-[170px] h-[145px] border-[2px] rounded-[2px] border-gray-400 ">
          <Image
            src={headphones}
            alt=""
            width={1000}
            height={1000}
            className="w-[90px] h-[90px] ml-[40px] mt-[30px]"
          />
          <p className="font-poppins ml-[40px] mt-[30px]" >HeadPhones</p>

        </div>
        <div className="w-[170px] h-[145px] border-[2px] rounded-[2px] border-gray-400 ">
          <Image
            src={plussign}
            alt=""
            width={1000}
            height={1000}
            className="w-[90px] h-[90px] ml-[40px] mt-[30px]"
          />
          <p className="font-poppins ml-[40px] mt-[30px]" >Gaming</p>
        </div>
      </div>
      <hr className="w-[100%] mt-14" />
    </>
  );
};

export const ThisMonth = () => {
  return (
    <>
      <div className="h-[103px] w-[211px] gap-[24px] flex ml-[150px]">
        <div className="w-[50px] h-[40px] bg-[#db4444] rounded-[4px] mt-9"></div>
        <h2 className="font-Poppins w-[460px] h-[20px] text-[16px] font-semibold text-[#db4444] pt-[10px] mt-9">{`This Month`}</h2>
      </div>
      <div className="flex justify-between ml-[150px]">
        <h2 className="w-[450px] h-[48px] font-semibold text-4xl 4%">
          Best Selling Products
        </h2>

        <div className="flex mr-[110px] gap-3">
          <button className="bg-[#DB4444] w-[134px] h-[56px] mt-[3px] text-center font-Poppins text-[#fafafa] ml-[540px] rounded-[4px]">
        View All Products
      </button>
        </div>
      </div>
      <div className=" flex w-[1170px] h-[350px] gap-4 ml-[150px] rounded-[3px] mt-6">
        <div className="bg-gray-400 w-[270px] h-[250px]">
          <Image
            src={cart}
            alt=""
            width={1000}
            height={1000}
            className="w-[270px] h-[270px]"
          />
          <p className="font-Poppins w-[118px] h-[24px] text-[#000000]">
            The north coat
          </p>
          <p className="font-Poppins w-[118px] h-[24px] text-[#000000]">
            {`$260`} <span>{`$360`}</span>
          </p>
          <Image src={fivestr} alt="str" />
        </div>
        <div className="bg-gray-400 w-[270px] h-[270px]">
          <Image
            src={cart1}
            alt=""
            width={1000}
            height={1000}
            className="w-[270px] h-[270px]"
          />
          <p className="font-Poppins w-[118px] h-[24px] text-[#000000]">
            Gucci duffle bag
          </p>
          <p className="font-Poppins w-[118px] h-[24px] text-[#000000]">
            {`$960`} <span>{`$1160`}</span>
          </p>
          <Image src={fourhalf} alt="str" />
        </div>
        <div className="bg-gray-400 w-[270px] h-[250px]">
          <Image
            src={cart2}
            alt=""
            width={1000}
            height={1000}
            className="w-[270px] h-[270px]"
          />
          <p className="font-Poppins w-[218px] h-[24px] text-[#000000]">
            RGB liquid CPU Cooler
          </p>
          <p className="font-Poppins w-[118px] h-[24px] text-[#000000]">
            {`$160`} <span>{`$170`}</span>
          </p>
          <Image src={fourhalf} alt="str" />
        </div>
        <div className="bg-gray-400 w-[270px] h-[250px]">
          <Image
            src={cart3}
            alt=""
            width={1000}
            height={1000}
            className="w-[270px] h-[270px]"
          />
          <p className="font-Poppins w-[118px] h-[24px] text-[#000000]">
            Small BookSelf
          </p>
          <p className="font-Poppins w-[118px] h-[24px] text-[#000000]">{`$360`}</p>
          <Image src={fivestr} alt="str" />
        </div>
      </div>
    </>
  );
};
