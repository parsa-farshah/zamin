import Image from "next/image";
import React from "react";
import { IServicesLabel } from "./ServicesLabel";

function ServicesImageCompponent({ text, image }: IServicesLabel) {
  return (
    <div className="flex flex-col justify-between bg-white rounded-xl shadow-sm p-4 w-full max-w-[300px]">
      <p className="text-[#1B1B1B] font-medium text-base">{text}</p>
      <div className="w-full h-[120px] relative mt-2 overflow-hidden rounded-md">
        <Image src={image} alt={text} fill className="object-contain p-2" />
      </div>
    </div>
  );
}

export default ServicesImageCompponent;
