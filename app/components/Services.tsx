import React from "react";
import dashLineRow from "../../public/image/dashLineRow.svg";
import Image from "next/image";
import ServicesLabel from "./ServicesLabel";
import designLogo from "../../public/image/designLogo.svg";
import developLogo from "../../public/image/developLogo.svg";
import ServicesImaes from "./ServicesImaes";
import uiDesign from "../../public/image/uiDesign.svg";
import designSystem from "../../public/image/designSystem.svg";
import uxReasearch from "../../public/image/uxReasearch.svg";
import webDevelop from "../../public/image/webDevelop.svg";
import technology from "../../public/image/technology.svg";
import library from "../../public/image/library.svg";

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
      <div className="flex flex-col gap-0">
        {/* design */}
        <div>
          <ServicesLabel text="Design" image={designLogo} />
          <div className="relative">
            <ServicesImaes
              txt1="UI Design"
              img1={uiDesign}
              txt2="Design system"
              img2={designSystem}
              txt3="UX Research"
              img3={uxReasearch}
            />
          </div>

          <Image className="w-full" src={dashLineRow} alt="dash Line row" />
        </div>
        {/* develop */}
        <div>
          <ServicesLabel text="Develop" image={developLogo} />
          <ServicesImaes
            txt1="Web Development"
            img1={webDevelop}
            txt2="Technology"
            img2={technology}
            txt3="Library"
            img3={library}
          />
          <Image className="w-full" src={dashLineRow} alt="dash Line row" />
        </div>
      </div>
    </div>
  );
}

export default Services;
