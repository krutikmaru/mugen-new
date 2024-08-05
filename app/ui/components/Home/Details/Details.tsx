"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function Details() {
  return (
    <main className="flex h-screen relative overflow-x-hidden flex-col items-center justify-center text-white ">
      <div className="w-full h-full flex flex-col justify-start items-center z-10 py-24">
        <TitleParagraph />
      </div>
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
