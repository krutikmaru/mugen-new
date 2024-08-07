import Landing from "@/app/ui/components/Home/Landing/Landing";
import Details from "@/app/ui/components/Home/Details/Details";
import Customers from "@/app/ui/components/Home/Customers/Customers";
import Services from "@/app/ui/components/Home/Services/Services";
import Benefits from "./ui/components/Home/Benefits/Benefits";
import { BenefitsBentoGrid } from "./ui/components/Home/Test";

export default function Home() {
  return (
    <div className="">
      <Landing />
      <Customers />
      <Services />
      <Details />
      {/* <Benefits /> */}
      <BenefitsBentoGrid />
    </div>
  );
}
