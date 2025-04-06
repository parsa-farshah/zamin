import Image from "next/image";
import dashLine from "./../../public/image/lineHorizanal.png";
import miliMetr from "../../public/image/miliMetr.svg";
import miliMetr2 from "../../public/image/miliMetr2.svg";
import leftSideBar from "../../public/image/Left Sidebar.svg";
import rightSideBar from "../../public/image/Right Sidebar.svg";
function DashLine() {
  return (
    <div>
      <Image
        className="absolute top-0 left-[200px]"
        src={dashLine}
        alt="dash Line"
      />
      <Image
        className="absolute top-0 right-[200px]"
        src={dashLine}
        alt="dash Line"
      />
      <Image
        className="absolute top-0 left-[200px]"
        src={miliMetr}
        alt="mili Metr"
      />
      <Image
        className="absolute top-0  right-[200px]"
        src={miliMetr2}
        alt="mili Metr"
      />
      <Image
        className="absolute top-[132px]  left-0"
        src={leftSideBar}
        alt="mili Metr"
      />
      <Image
        className="absolute top-[132px] right-0"
        src={rightSideBar}
        alt="mili Metr"
      />
    </div>
  );
}

export default DashLine;
