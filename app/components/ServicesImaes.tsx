import Image from "next/image";
import React from "react";
import servicesLineRight from "../../public/image/lineServiceImages.svg";
import servicesLineLeft from "../../public/image/servicesImagesleft.svg";
import ServicesImageCompponent from "./ServicesImageCompponent";
import uiDesign from "../../public/image/uiDesign.svg";
import lineBottomServices from "../../public/image/servicesLineBottom.svg";
import designSystem from "../../public/image/designSystem.svg";
import uxReasearch from "../../public/image/uxReasearch.svg";

function ServicesImaes() {
  return (
    <div className="flex">
      <div className="flex w-[48px]">
        <Image
          className="w-[47px] h-full"
          src={servicesLineLeft}
          alt="line line"
        />
      </div>
      <div className="flex flex-col w-[89%] ">
        <div className="w-full gap-3 h-[196px] flex">
          <ServicesImageCompponent text="UI Design" image={uiDesign} />
          <ServicesImageCompponent text="Design system" image={designSystem} />
          <ServicesImageCompponent text="UX Research" image={uxReasearch} />
        </div>

        <Image
          className="w-full h-full"
          src={lineBottomServices}
          alt="line line"
        />
      </div>
      <div className="flex w-[48px] justify-end">
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
