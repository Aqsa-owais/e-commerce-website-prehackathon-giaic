import React from "react";
import Image from "next/image";
import fivestr from "@/../../public/Five star.png";
import four from "@/../../public/Four Star.png";
import halffour from "@/../../public/Frame 551.png";

interface propstype {
  img: string;
  title: string;
  price: string;
}
const Card: React.FC<propstype> = ({ img, title, price, }) => {
  return (
    <>
    <div>
      <div className="p-4">
        <div>
          <Image
            src={img}
            alt="card"
            width={1000}
            height={1000}
            className="w-[250px] h-[200px] bg-[#f5f5f5] p-4"
          />
        </div>
        <h2>{title}</h2>
        <p>{price}</p>
      </div>
    <Image src={fivestr} alt="str" className="ml-6"/>
    </div>
    </>
  );
};

export default Card;


