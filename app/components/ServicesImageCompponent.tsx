import Image from "next/image";
import React from "react";
import { IServicesLabel } from "./ServicesLabel";

function ServicesImageCompponent({ text, image }: IServicesLabel) {
  return (
    <div className="w-[80%] h-[156px] mx-auto md:mx-0 md:w-[303px] md:h-[196px] rounded-xl bg-[#FFFFFF] relative  ">
      <p className="font-inter text-lg font-light flex items-start pt-7 pl-7 w-auto ">
        {text}
      </p>
      <div className="flex justify-end">
        <Image
          className="w-[150px] h-[80%] md:w-[220px] md:h-[90%] bg-cover"
          src={image}
          alt="line line"
        />
      </div>
    </div>
  );
}

export default ServicesImageCompponent;
