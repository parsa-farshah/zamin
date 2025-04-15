import Navbar from "./components/Navbar";
import Header from "./components/Header";
import MiliMetr from "./components/MiliMetr";
import DashLineLeft from "./components/DashLineLeft";
import DashLineRight from "./components/DashLineRight";

export default function Home() {
  return (
    <div className="w-full h-auto grid grid-cols-12">
      {/* Dash Line Left */}
      <div className="hidden lg:block col-span-2">
        <DashLineLeft />
      </div>

      {/* Main Content */}
      <div className="col-span-12 lg:col-span-8">
        <div className="flex flex-col items-center">
          <Navbar />
          <Header />
          <MiliMetr />
        </div>
      </div>

      {/* Dash Line Right */}
      <div className="hidden lg:block col-span-2">
        <DashLineRight />
      </div>
    </div>
  );
}
