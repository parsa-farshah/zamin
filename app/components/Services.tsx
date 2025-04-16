import React from "react";
import dashLineRow from "../../public/image/dashLineRow.svg";
import Image from "next/image";
import ServicesLabel from "./ServicesLabel";
import designLogo from "../../public/image/designLogo.svg";

import ServicesImaes from "./ServicesImaes";

function Services() {
  return (
    <div className="w-full mt-24">
      <div>
        <Image className="w-full" src={dashLineRow} alt="dash Line row" />
      </div>
      <div className="flex justify-center">
        <div className="w-[208px] h-[48px] bg-[#FFFFFF] rounded-[12px] flex justify-around items-center ">
          <div className="w-[32px] h-[4px] bg-[#1B1B1B] opacity-15"></div>
          <div>
            <p className="text-[#727272] font-inter">SERVICES</p>
          </div>
          <div className="w-[32px] h-[4px] bg-[#1B1B1B] opacity-15"></div>
        </div>
      </div>
      <div>
        <Image className="w-full" src={dashLineRow} alt="dash Line row" />
      </div>
      <ServicesLabel text="Design" image={designLogo} />
      <ServicesImaes />
      <Image className="w-full" src={dashLineRow} alt="dash Line row" />
    </div>
  );
}

export default Services;
