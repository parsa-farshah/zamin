import Image from "next/image";
import React from "react";
import servicesLineRight from "../../public/image/lineServiceImages.svg";
import servicesLineLeft from "../../public/image/servicesImagesleft.svg";
import ServicesImageCompponent from "./ServicesImageCompponent";
import lineBottomServices from "../../public/image/servicesLineBottom.svg";

interface IservisesImages {
  txt1: string;
  txt2: string;
  txt3: string;
  img1: string;
  img2: string;
  img3: string;
}

function ServicesImaes({
  txt1,
  img1,
  txt2,
  txt3,
  img2,
  img3,
}: IservisesImages) {
  return (
    <div className="w-full flex flex-row top-0">
      {/* Left line */}
      <div className="flex w-[48px] h-full items-stretch">
        <Image
          className="w-full h-full"
          src={servicesLineLeft}
          alt="line left"
        />
      </div>

      {/* Desktop content */}
      <div className=" flex-col h-full w-full hidden md:flex justify-between">
        {/* کارت‌ها */}
        <div className="w-full gap-6 flex justify-center">
          <ServicesImageCompponent text={txt1} image={img1} />
          <ServicesImageCompponent text={txt2} image={img2} />
          <ServicesImageCompponent text={txt3} image={img3} />
        </div>

        {/* خط پایین بدون فاصله */}
        <Image
          className=" w-full mt-auto"
          src={lineBottomServices}
          alt="bottom line"
        />
      </div>

      {/* Mobile content */}
      <div className="flex flex-col w-[85%] justify-center items-center md:hidden">
        <div className="w-full gap-3 h-[196px] flex justify-center">
          <ServicesImageCompponent text={txt1} image={img1} />
        </div>
        <Image 
          className=" w-full mt-auto"
          src={lineBottomServices}
          alt="bottom line"
        />
      </div>

      {/* Right line */}
      <div className="flex w-[48px] h-full justify-end">
        <Image
          className="w-full h-full"
          src={servicesLineRight}
          alt="line right"
        />
      </div>
    </div>
  );
}

export default ServicesImaes;
