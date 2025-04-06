import Image from "next/image";
import Navbar from "./components/Navbar";
import DashLine from "./components/DashLine";

import Header from "./components/Header";

export default function Home() {
  return (
    <div className="w-full h-auto flex justify-center">
      <DashLine />
      <Navbar />
      <Header />
    </div>
  );
}
