import Navbar from "./components/Navbar";
import DashLine from "./components/DashLine";

import Header from "./components/Header";
import MiliMetr from "./components/MiliMetr";

export default function Home() {
  return (
    <div className="w-full h-auto flex justify-center">
      <div className="xl:flex hidden ">
        <DashLine />
      </div>
      <div className=" md:flex">
        <MiliMetr />
      </div>
      <div className="flex justify-center w-full xl:w-[951px]">
        <Navbar />
        <Header />
      </div>
    </div>
  );
}
