import Image from "next/image";
import React from "react";
import servicesLineRight from "../../public/image/lineServiceImages.svg";
import servicesLineLeft from "../../public/image/servicesImagesleft.svg";
import ServicesImageCompponent from "./ServicesImageCompponent";
import bottomServicesMobile from "../../public/image/bottom services mobile.svg";

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
    <div className="w-full flex top-0">
      <div className="flex w-[8%] h-[100%]">
        <Image
          className="w-[47px]  h-full"
          src={servicesLineLeft}
          alt="line line"
        />
      </div>
      <div className=" flex-col w-[84%] h-[100%] hidden md:flex">
        <div className="w-full gap-3 h-[196px] flex nth-[2]:">
          <ServicesImageCompponent text={txt1} image={img1} />
          <ServicesImageCompponent text={txt2} image={img2} />
          <ServicesImageCompponent text={txt3} image={img3} />
        </div>

        <Image className="w-full h-" src={lineBottomServices} alt="line line" />
      </div>
      {/* mobile size */}
      <div className=" flex-col w-[85%] flex justify-between md:hidden">
        <div className="w-full gap-3 h-[196px] flex ">
          <ServicesImageCompponent text={txt1} image={img1} />
        </div>
        <Image
          className="w-full h-full flex "
          src={lineBottomServices}
          alt="line line"
        />
        {/* <Image
          className="w-full h-full flex md:hidden"
          src={bottomServicesMobile}
          alt="line line"
        /> */}
      </div>

      <div className="flex w-[8%] h-[100%] justify-end">
        <Image
          className="w-[47px] h-full"
          src={servicesLineRight}
          alt="line line"
        />
      </div>
    </div>
  );
}

export default ServicesImaes;
