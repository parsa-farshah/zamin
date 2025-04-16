import Image from "next/image";
import React from "react";
import { IServicesLabel } from "./ServicesLabel";


function ServicesImageCompponent({ text, image }: IServicesLabel) {
  return (
    <div className="w-[303px] h-[196px] rounded-xl bg-[#FFFFFF] flex flex-col ">
      <p className="font-inter text-lg font-light flex items-start pt-7 pl-7 w-auto ">
        {text}
      </p>
      <div className="flex justify-end flex-nowrap">

        <Image className="w-[80%] h-fit bg-cover" src={image} alt="line line" />
      </div>
    </div>
  );
}

export default ServicesImageCompponent;
