import AnimatedShinyText from "@/components/magicui/animated-shiny-text";
import React from "react";
import { cn } from "@/app/lib/utils";
import Marquee from "@/components/magicui/marquee";
import { Container, Leaf, School, Ship } from "lucide-react";
function Customers() {
  return (
    <div className="py-44 w-full flex flex-col justify-center items-center">
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
          <div className="flex flex-col mr-10 justify-center items-center">
            <Leaf
              size={100}
              className="text-neutral-500 dark:text-neutral-900 mb-2"
            />
            <div className="text-sm text-neutral-700">E-Green</div>
          </div>
          <div className="flex flex-col mr-10 justify-center items-center">
            <School
              size={100}
              className="text-neutral-500 dark:text-neutral-900 mb-2"
            />
            <div className="text-sm text-neutral-700">UWBC</div>
          </div>
          <div className="flex flex-col mr-10 justify-center items-center">
            <Ship
              size={100}
              className="text-neutral-500 dark:text-neutral-900 mb-2"
            />
            <div className="text-sm text-neutral-700">Ship Chandler</div>
          </div>
          <div className="flex flex-col mr-10 justify-center items-center">
            <Container
              size={100}
              className="text-neutral-500 dark:text-neutral-900 mb-2"
            />
            <div className="text-sm text-neutral-700">Hebron</div>
          </div>
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-black"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-black"></div>
      </div>
    </div>
  );
}

export default Customers;
