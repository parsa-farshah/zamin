import React from "react";
import miliMetr2 from "../../public/image/miliMetr2.svg";
import miliMetr from "../../public/image/miliMetr.svg";
import Image from "next/image";
function MiliMetr() {
  return (
    <div>
      <Image
        className="absolute top-0 lg:left-[16.8%]  left-0"
        src={miliMetr}
        alt="mili Metr"
      />
      <Image
        className="absolute top-0  lg:right-[16.8%] right-0"
        src={miliMetr2}
        alt="mili Metr"
      />
    </div>
  );
}

export default MiliMetr;
