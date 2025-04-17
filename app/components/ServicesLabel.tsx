import Image from "next/image";
import React from "react";
import lineLineServices from "../../public/image/lineLineServices.svg";
import lineLineServicesEnd from "../../public/image/lineLineServiceEnd.svg";
import dashLineRow from "../../public/image/dashLineRow.svg";
export interface IServicesLabel {
  image: string;
  text: string;
}

function ServicesLabel({ text, image }: IServicesLabel) {
  return (
    <div className="w-full">
  <div className="w-full flex justify-between items-center">
    {/* سمت چپ */}
    <div className="flex items-center">
      <Image
        className="w-[48px] h-[42px]"
        src={lineLineServices}
        alt="line line"
      />
      <Image
        className="w-[32px] h-[32px] mx-2"
        src={image}
        alt="design Logo"
      />
      <h2 className="font-inter text-lg text-[#2D68FF] font-medium">
        {text}
      </h2>
    </div>

    {/* سمت راست - بهبود: گذاشتن داخل یه div با ارتفاع و align یکسان */}
    <div className="flex items-center">
      <Image
        className="w-[48px] h-[42px]"
        src={lineLineServicesEnd}
        alt="line line"
      />
    </div>
  </div>

  {/* خط پایین */}
  <div>
    <Image className="w-full" src={dashLineRow} alt="dash Line row" />
  </div>
</div>
  );
}

export default ServicesLabel;
