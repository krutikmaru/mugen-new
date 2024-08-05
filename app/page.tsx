import Landing from "@/app/ui/components/Home/Landing/Landing";
import Details from "@/app/ui/components/Home/Details/Details";
import Customers from "@/app/ui/components/Home/Customers/Customers";
import Services from "@/app/ui/components/Home/Services/Services";
import Benefits from "./ui/components/Home/Benefits/Benefits";
import Globe from "@/components/magicui/globe";

export default function Home() {
  return (
    <div className="">
      {/* <div className="absolute w-full bottom-0 overflow-y-hidden"> */}
      <div className="absolute flex h-full w-full  items-center justify-center rounded-lg  px-40 pb-40 pt-8 md:pb-60 ">
        <Globe className="top-24  " />
      </div>
      {/* </div> */}
      <Landing />
      <Details />
      <Customers />
      <Services />
      <Benefits />
    </div>
  );
}
