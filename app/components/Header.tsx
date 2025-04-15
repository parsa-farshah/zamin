import Image from "next/image";
import React from "react";
import containerMain from "../../public/image/containerMain.svg";
import uiImage from "../../public/image/uiImage.svg";
import younes from "../../public/image/younesImage.png";
import ButtonMain from "./ButtonMain";
import dashLineRow from "../../public/image/dashLineRow.svg";
import WorkImages from "./WorkImages";
import Services from "./Services";

function Header() {
  return (
    <div className="w-full flex justify-center">
      <div className="relative h-screen  z-10 top-2 w-full  text-center text-black font-inter">
        <div className="w-full hidden lg:block border-1 border-dashed border-gray-300 absolute top-32 left-[50%] mx-[-50%] "></div>
        <Image
          src={containerMain}
          alt="container main"
          fill
          className=" w-full h-screen bg-cover bg-center z-0"
        />

        <div className="max-w-5xl mx-auto px-4 relative top-36 z-10">
          <p className="flex gap-4 text-md md:text-5xl justify-center items-center">
            We craft UI
            <Image className="" src={uiImage} alt="logo Ui" />
            that attracts, and
          </p>

          <div className="flex text-md md:text-5xl gap-4 mt-[30px] justify-center items-center">
            <span>UX</span>
            <div className="bg-[#FFFFFF] w-[45px] h-[45px] border border-[#D9D9D9] rounded-xl flex justify-center items-center">
              <span className="text-xl">&#128293;</span>
            </div>
            <span>that keeps them coming</span>
          </div>

          <p className="flex justify-center text-md md:text-5xl mt-[60px]">
            back.
          </p>
          {/* 4image  */}
          <div className="flex flex-row-reverse justify-center mt-[120px] pr-[40px]">
            <div className="z-40 bg-amber-800 w-[36px] h-[36px] rounded-[24px] border-2 border-[#F5F5F5]">
              <Image
                className="rounded-2xl"
                alt="imageYounes"
                src={younes}
                layout="responsive"
              />
            </div>
            <div className="z-30 relative left-[12px] bg-amber-800 w-[36px] h-[36px] rounded-[24px] border-2 border-[#F5F5F5]">
              <Image
                className="rounded-2xl"
                src={younes}
                alt="imageYounes"
                layout="responsive"
              />
            </div>
            <div className="z-20 relative left-[24px] bg-amber-800 w-[36px] h-[36px] rounded-[24px] border-2 border-[#F5F5F5]">
              <Image
                className="rounded-2xl"
                src={younes}
                alt="imageYounes"
                layout="responsive"
              />
            </div>
            <div className="z-10 relative left-[36px] bg-amber-800 w-[36px] h-[36px] rounded-[24px] border-2 border-[#F5F5F5]">
              <Image
                className="rounded-2xl"
                src={younes}
                alt="imageYounes"
                layout="responsive"
              />
            </div>
          </div>
        </div>
        {/* end 4image */}
        <div className="text-white flex justify-center mt-40 ">
          <ButtonMain image={younes.src} text="Book a 15-min call" />
        </div>
        <div className="flex justify-center items-center gap-2 mt-4">
          <span className=" relative flex size-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex size-3 rounded-full bg-green-600"></span>
          </span>
          <p> 2 Spots Abailable</p>
        </div>
        {/* section work */}
        <div className="w-full mt-24">
          <div>
            <Image className="w-full" src={dashLineRow} alt="dash Line row" />
          </div>
          <div className="flex justify-center">
            <div className="w-[208px] h-[48px] bg-[#FFFFFF] rounded-[12px] flex justify-around items-center ">
              <div className="w-[32px] h-[4px] bg-[#1B1B1B] opacity-15"></div>
              <div>
                <p className="text-[#727272] font-inter">WORK</p>
              </div>
              <div className="w-[32px] h-[4px] bg-[#1B1B1B] opacity-15"></div>
            </div>
          </div>
          <div className="w-full border-1 border-dashed border-gray-300 absolute left-[50%] mx-[-50%] "></div>
          {/* work images */}
          <div className="grid md:grid-cols-2 place-items-center mt-7  gap-5 px-5">
            <div className="col-span-1 w-[95%] md:w-[99%] md:h-[300px]">
              <WorkImages />
            </div>
            <div className="col-span-1 w-[95%] md:w-[99%] h-[300px] mt-4   md:mt-0">
              <WorkImages />
            </div>
            <div className="col-span-1 w-[95%] md:w-[99%] h-[300px] mt-12 md:mt-7">
              <WorkImages />
            </div>
            <div className="col-span-1 w-[95%] md:w-[99%] h-[300px] mt-12 md:mt-7">
              <WorkImages />
            </div>
            <div className="col-span-1 w-[95%]  md:w-[99%] h-[300px] mt-12 md:mt-7">
              <WorkImages />
            </div>
            <div className="col-span-1 w-[95%] md:w-[99%] h-[300px] mt-12 md:mt-7">
              <WorkImages />
            </div>
          </div>
        </div>
        {/* services */}
        <Services />
      </div>
    </div>
  );
}

export default Header;
