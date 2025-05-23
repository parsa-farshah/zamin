import Image from "next/image";
import React from "react";
import dashLine from "./../../public/image/lineHorizanal.png";
import whiteRight from "../../public/image/whiteRight.svg";
function DashLineRight() {
  return (
    <div className="relative max-w-full">
      <div className=" flex place-items-center pt-30  xl:w-[99%]">
        <p className="text-gray-300 w-auto lg:text-xl mb-1">-----</p>
        <div className="w-[5%] h-[10px] bg-green-600 rounded-full"></div>
        <div className="w-[72%] lg:w-[75%] xl:w-[79%]  h-[3px] bg-green-600"></div>
      </div>
      <div className=" w-[1%] top-0">
        <Image
          className="absolute top-0 left-0"
          src={dashLine}
          alt="dash Line"
        />
      </div>
      <Image
        className="pt-16 w-[90%] h-full"
        src={whiteRight}
        alt="white Left"
      />
    </div>
  );
}

export default DashLineRight;
