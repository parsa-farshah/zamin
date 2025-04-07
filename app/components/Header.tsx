import Image from "next/image";
import React from "react";
import containerMain from "../../public/image/containerMain.svg";
import uiImage from "../../public/image/uiImage.svg";
import younes from "../../public/image/younesImage.png";
import ButtonMain from "./ButtonMain";

function Header() {
  return (
    <div className="flex justify-center">
      <Image
        className="absolute mt-[135px] h-auto w-[950px] z-0"
        src={containerMain}
        alt="container main"
      />
      <div className="flex flex-col z-10 mt-[255px]  text-center text-black font-inter ">
        <p className="flex gap-4 text-5xl justify-center items-center">
          We craft UI
          <Image src={uiImage} alt="logo Ui" />
          that attracts, and
        </p>

        <div className="flex text-5xl gap-4 mt-[30px] justify-center items-center">
          <span>UX</span>
          <div className="bg-[#FFFFFF] w-[45px] h-[45px] border border-[#D9D9D9] rounded-xl flex justify-center items-center">
            <span className="text-xl">&#128293;</span>
          </div>
          <span>that keeps them coming</span>
        </div>

        <p className="flex justify-center text-5xl mt-[30px]">back.</p>
        {/* 4image  */}
        <div className="flex flex-row-reverse justify-center mt-[120px] pr-[40px]">
          <div className="z-40 bg-amber-800 w-[36px] h-[36px] rounded-[24px] border-2 border-[#F5F5F5]">
            <Image className="rounded-2xl" alt="imageYounes" src={younes} />
          </div>
          <div className="z-30 relative left-[12px] bg-amber-800 w-[36px] h-[36px] rounded-[24px] border-2 border-[#F5F5F5]">
            <Image className="rounded-2xl" src={younes} alt="imageYounes" />
          </div>
          <div className="z-20 relative left-[24px] bg-amber-800 w-[36px] h-[36px] rounded-[24px] border-2 border-[#F5F5F5]">
            <Image className="rounded-2xl" src={younes} alt="imageYounes" />
          </div>
          <div className="z-10 relative left-[36px] bg-amber-800 w-[36px] h-[36px] rounded-[24px] border-2 border-[#F5F5F5]">
            <Image className="rounded-2xl" src={younes} alt="imageYounes" />
          </div>
        </div>
        {/* end 4image */}
        <div className="text-white flex justify-center mt-6">
          <ButtonMain image={younes.src} text="Book a 15-min call" />
        </div>
        <div className="flex justify-center items-center gap-2 mt-4">
          <span className=" relative flex size-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex size-3 rounded-full bg-green-600"></span>
          </span>
          <p> 2 Spots Abailable</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
