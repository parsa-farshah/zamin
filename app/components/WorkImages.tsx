import Image from "next/image";
import React from "react";
import dots from "../../public/image/dotsGroup.svg";
import refresh from "../../public/image/refresh.svg";
import before from "../../public/image/before.svg";
import after from "../../public/image/after.svg";
import shield from "../../public/image/shield.svg";
import hrefSite from "../../public/image/hrefSite.svg";
import lock from "../../public/image/lockIcon.svg";
import refresh2 from "../../public/image/refresh2.svg";
import upload from "../../public/image/upload.svg";
import share from "../../public/image/share.svg";
import copy from "../../public/image/copy.svg";
function WorkImages() {
  return (
    <div>
      <div className="w-auto h-[337px] bg-[#FDFDFD] rounded-t-md rounded-b-2xl">
        {/* line top */}
        <div className="px-4 py-3 flex justify-between items-center">
          {/* left */}
          <div className="flex items-center">
            {/* dots */}
            <div className="flex justify-between gap-3">
              <Image className="w-6" src={dots} alt="dots" />
              <Image className="text-2xl" src={refresh} alt="refresh" />
              <div className="flex justify-between gap-2">
                <Image
                  className="w-[3.1144397258758545px] h-[5.284729957580566px]"
                  src={before}
                  alt="before"
                />
                <Image
                  className="w-[3.1144397258758545px] h-[5.284729957580566px]"
                  src={after}
                  alt="after"
                />
              </div>
            </div>
          </div>
          {/* middle */}
          <div className="flex items-center justify-between gap-1">
            <div>
              <Image src={shield} alt="after" />
            </div>
            <div className="w-[191.6997833251953px] h-[10.67668342590332px] bg-[#F0F0F0] rounded-sm flex items-center justify-center">
              <div className="flex justify-center items-center">
                <div className="flex">
                  <Image src={lock} alt="Lock Icon" />
                  <Image src={hrefSite} alt="after" />
                </div>

                <Image
                  className="relative left-14"
                  src={refresh2}
                  alt="refresh site"
                />
              </div>
            </div>
          </div>
          {/* right */}
          <div className="flex justify-between items-center gap-2">
            <Image src={upload} alt="upload" />
            <Image src={share} alt="share" />
            <Image src={copy} alt="Copy" />
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-[99%] bg-gray-400 h-[299.4474792480469px] rounded-xl"></div>
        </div>
      </div>
    </div>
  );
}

export default WorkImages;
