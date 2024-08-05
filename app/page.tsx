import Landing from "@/app/ui/components/Home/Landing/Landing";
import Details from "@/app/ui/components/Home/Details/Details";
import Customers from "@/app/ui/components/Home/Customers/Customers";
import Services from "@/app/ui/components/Home/Services/Services";
import Benefits from "./ui/components/Home/Benefits/Benefits";
import Globe from "@/components/magicui/globe";

export default function Home() {
  return (
    <div className="">
      <div className="absolute left-1/2  -translate-x-1/2 flex h-full w-full overflow-hidden  items-center justify-center rounded-lg  px-40 pb-40 pt-8 md:pb-60 ">
        <Globe className="top-96 w-[300px] md:w-[500px] lg:w-[600px]" />
        <div className="absolute bottom-0 w-full h-24 bg-gradient-to-b from-transparent to-white dark:to-black "></div>
      </div>

      <Landing />
      <Details />
      <Customers />
      <Services />
      <Benefits />
    </div>
  );
}
