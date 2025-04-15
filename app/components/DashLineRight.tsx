import Image from "next/image";
import React from "react";
import rightSideBarImage from "../../public/image/Right Sidebar.svg";
import dashLine from "./../../public/image/lineHorizanal.png";
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
    </div>
  );
}

export default DashLineRight;
