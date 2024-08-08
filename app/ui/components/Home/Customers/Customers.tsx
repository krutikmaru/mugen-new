import AnimatedShinyText from "@/components/magicui/animated-shiny-text";
import React from "react";
import { cn } from "@/app/lib/utils";
import Marquee from "@/components/magicui/marquee";
import { Container, Leaf, School, Ship } from "lucide-react";
import Image from "next/image";
function Customers() {
  return (
    <div className=" w-full flex flex-col justify-center items-center pb-32">
      <div className="items-center justify-center">
        <div
          className={cn(
            "group rounded-full border border-black/5 bg-neutral-200 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
          )}
        >
          <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
            <span>✨ Our Customers</span>
          </AnimatedShinyText>
        </div>
      </div>
      <p className="leading-7 [&:not(:first-child)]:mt-4 text-neutral-800 text-center px-5 md:px-40 dark:text-neutral-600 mb-4">
        Empowering over 50 clients across diverse industries to grow their
        businesses with customized ERP solutions. We focus on enhancing
        operational efficiency, improving processes, and driving success
        tailored to each organizations unique needs.
      </p>
      <div className="w-full relative">
        <Marquee className="w-full [--duration:20s] mt-5" pauseOnHover>
          {customers.map((customer) => (
            <div
              key={customer.name}
              className="flex flex-col mr-16 justify-center items-center"
            >
              <div className="w-40 h-40 relative mb-4">
                <Image
                  src={customer.image}
                  alt={customer.name}
                  fill
                  className="absolute w-full h-full object-contain grayscale"
                />
              </div>
            </div>
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-black"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-black"></div>
      </div>
    </div>
  );
}

export default Customers;

const customers = [
  {
    name: "Department of Municipal Affairs Sharjah",
    image: "/clients/dma.png",
  },
  {
    name: "Sharjah Fish Resource Authority",
    image: "/clients/fra.png",
  },
  // { name: "Depart of Fisheries Sharjah", image: "" },
  { name: "Al Dhaidh Municipality", image: "/clients/al-dhaidh.jpeg" },
  { name: "Jogaram Group", image: "/clients/jogaram.webp" },
  { name: "Timber Craft", image: "/clients/timber-craft.svg" },
  { name: "Arooha Travels", image: "/clients/arooha-travels.png" },
  { name: "Hebron Group", image: "/clients/hebron.jpg" },
  { name: "Egreen", image: "/clients/e-green.png" },
  // { name: "Fintrestle", image: "/clients/fintrestle.jpeg" },
  { name: "Fujairah Holding", image: "/clients/fujairah.png" },
  { name: "UWBC", image: "/clients/uwbc.jpg" },
  { name: "UWBE", image: "/clients/uwe.png" },
];
