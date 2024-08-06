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
      <div className="w-full mt-5 flex flex-col xl:flex-row items-center xl:items-start justify-center">
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 xl:grid-cols-4 gap-4 place-items-center xl:mr-4 mb-4 xl:mb-0 ">
          {currentItem.mainContent.map((content) => {
            return (
              <div
                key={content.title}
                className="flex cursor-pointer flex-col border-[2px] border-neutral-200 dark:border-neutral-900 p-2 rounded-md w-28 h-28 items-center justify-center"
                style={{
                  background:
                    content.title === currentSubItem.title
                      ? "#a855f7"
                      : "transparent",
                }}
                onClick={() => setCurrentSubItem(content)}
              >
                <content.icon className="text-black dark:text-white" />
                <span className="text-center font-medium text-[10px] mt-2 text-black dark:text-white">
                  {content.title}
                </span>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col w-full xl:w-1/2 items-start justify-start  p-5 xl:px-10 border-[1px] rounded-md border-[#6161613b] bg-white dark:bg-neutral-900">
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
