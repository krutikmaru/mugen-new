"use client";
import { details } from "@/app/lib/data/details";
import { motion, useInView } from "framer-motion";
import { useTheme } from "next-themes";
import { useRef, useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { cn } from "@/app/lib/utils";

function Details() {
  return (
    <main className="flex flex-col items-center justify-start text-white ">
      <div className="w-full h-full flex flex-col justify-start items-center z-10 pt-24 pb-6">
        <TitleParagraph />
      </div>
      <DetailsGrid />
    </main>
  );
}

function TitleParagraph() {
  const titleRef = useRef(null);
  const titleIsInView = useInView(titleRef, { once: true, amount: "some" });
  const paragraphRef = useRef(null);
  const paragraphIsInView = useInView(titleRef, { once: true, amount: "some" });
  return (
    <>
      <motion.div
        ref={titleRef}
        initial={{ opacity: 0, y: 20 }}
        transition={{ delay: 0.2, duration: 0.4 }}
        animate={titleIsInView ? { opacity: 1, y: 0 } : {}}
        className="scroll-m-20  text-4xl md:text-5xl font-semibold tracking-tight first:mt-0 text-black dark:text-white flex flex-col items-center lg:items-start  text-center lg:text-left "
      >
        A Modern Business Management System
      </motion.div>
      <motion.p
        ref={paragraphRef}
        initial={{ opacity: 0, y: 20 }}
        transition={{ delay: 0.4, duration: 0.4 }}
        animate={paragraphIsInView ? { opacity: 1, y: 0 } : {}}
        className="leading-7 [&:not(:first-child)]:mt-4 text-black text-lg dark:text-neutral-400 mb-4 px-10 text-center"
      >
        Designed to dramatically scale down costs, optimize processes, and
        simplify operations.
      </motion.p>
    </>
  );
}

export default Details;

import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";
import { LucideIcon } from "lucide-react";

const DetailsGrid = () => {
  const [currentItem, setCurrentItem] = useState(details.detailsStore[0]);
  const [currentSubItem, setCurrentSubItem] = useState(
    details.detailsStore[0].mainContent[0]
  );
  const { theme } = useTheme();
  return (
    <div className="w-full flex flex-col mt-5 p-5">
      <div className="grid pb-2 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 ">
        {details.detailsStore.map((detail) => {
          if (currentItem.title === detail.title) {
            return (
              <div
                key={detail.id}
                className="cursor-pointer border-[1px] border-[#6161613b] bg-purple-500 rounded-md py-3 px-5 w-full min-w-[160px] flex mr-1 sm:mr-4 items-center justify-center"
              >
                <detail.icon />
                <span className="ml-2">{detail.title}</span>
              </div>
            );
          }
          return (
            <div
              key={detail.id}
              onClick={() => {
                setCurrentItem(detail);
                setCurrentSubItem(detail.mainContent[0]);
              }}
              className="cursor-pointer border-[1px] text-black dark:text-white border-[#6161613b] bg-[#e7e7e7] dark:bg-neutral-900 rounded-md py-3 px-5 w-full min-w-[160px] flex mr-4 items-center justify-center"
            >
              <detail.icon />

              <span className="ml-2">{detail.title}</span>
            </div>
          );
        })}
      </div>
      <div className="w-full mt-5 flex flex-col space-x-0 xl:space-x-4 xl:flex-row items-center xl:items-start justify-center">
        <div className="grid grid-cols-2 lg:grid-cols-4  relative z-10  mx-auto">
          {currentItem.mainContent.map((feature, index) => (
            <Feature
              key={feature.title}
              title={feature.title}
              Icon={feature.icon}
              onClick={() => setCurrentSubItem(feature)}
              index={index}
            />
          ))}
        </div>

        <div className="flex flex-col w-full xl:w-1/2 items-start justify-start  p-5 xl:px-10 border-[1px] rounded-md border-[#6161613b] bg-white bg-white/20 dark:bg-black/20 backdrop-blur-2xl">
          <h1 className="text-3xl font-medium bg-gradient-to-r from-indigo-600 to-fuchsia-500 text-transparent bg-clip-text mb-4">
            {currentSubItem.title}
          </h1>
          <div className="flex flex-wrap">
            <h1 className="mr-2 text-black dark:text-white">Works well with</h1>
            {currentSubItem.modules.map((module) => {
              return (
                <div
                  key={module}
                  className="px-4 text-black dark:text-white py-1 text-xs rounded-full mr-2 mb-2 border-[1px] border-mugen-purple-white"
                >
                  {module}
                </div>
              );
            })}
          </div>
          <p className="text-sm text-neutral-900 dark:text-[#b1b1b1]">
            {currentSubItem.overview}
          </p>
          <div className="flex flex-col mt-4 mx-auto xl:mx-0">
            {currentSubItem.details.map((detail) => {
              return (
                <div
                  key={detail.title}
                  className="flex items-center justify-start space-x-4 mb-5 pb-3 border-b-[1px] border-[#6161613b]"
                >
                  <detail.icon />
                  <div>
                    <h1 className="text-purple-400 mb-1 font-medium">
                      {detail.title}
                    </h1>
                    <p className="text-sm text-neutral-900 dark:text-[#b1b1b1]">
                      {detail.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

const Feature = ({
  title,
  Icon,
  onClick,
  index,
}: {
  title: string;
  Icon: LucideIcon;
  onClick: () => void;
  index: number;
}) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800 cursor-pointer",
        (index === 0 || index === 4 || index === 8 || index === 12) &&
          "lg:border-l dark:border-neutral-800",
        index < 12 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        <Icon />
      </div>
      <div className="text-sm font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
    </div>
  );
};
