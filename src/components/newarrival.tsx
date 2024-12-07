import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import arrivals from "@/../../public/arrivals.png";
import last from "@/../../public/lastimg.png"

const Newarrival = () => {
  return (
    <>
      <div className="h-[103px] w-[211px] gap-[24px] flex ml-[150px]">
        <div className="w-[50px] h-[40px] bg-[#db4444] rounded-[4px] mt-9"></div>
        <h2 className="font-Poppins w-[460px] h-[20px] text-[16px] font-semibold text-[#db4444] pt-[10px] mt-9">{`Featured`}</h2>
      </div>
      <div className="flex justify-between ml-[150px]">
        <h2 className="w-[450px] h-[48px] font-semibold text-4xl 4%">
          New Arrival
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
      <div className="w-[1170px] h-[600px] ml-[150px] mt-8">
   <Image src={arrivals} alt="arrivals" width={1000} height={1000} className="w-[1140px] h-[500px]"/>
      </div>
      </>
      
          
  );
};

export default Newarrival;

export const Prefooter = ()=>{
  return(
    <div className="w-[943px] h-[161px] ml-[190px]">
      <Image src={last} alt="lastimg" width={1000} height={1000} className="w-[743px] h-[121px] ml-[170px]"/>
    </div>
  )
}
