import Image from "next/image";
import dashLine2 from "./../../public/image/lineHorizanal2.png";
import whiteLeft from "../../public/image/whiteLeft.svg";

function DashLineLeft() {
  return (
    <div className="relative max-w-full">
      <div className=" flex place-items-center pt-30  xl:w-[99%]">
        <div className="w-[72%] lg:w-[75%] xl:w-[79%]  h-[3px] bg-green-600"></div>
        <div className="w-[5%] h-[10px] bg-green-600 rounded-full"></div>
        <p className="text-gray-300 w-auto lg:text-xl mb-1">-----</p>
      </div>
      <div className=" w-[1%] top-0">
        <Image
          className="absolute top-0 right-0"
          src={dashLine2}
          alt="dash Line"
        />
      </div>
      <Image
        className="pt-16 w-[90%] h-full"
        src={whiteLeft}
        alt="white Left"
      />
    </div>
  );
}

export default DashLineLeft;
