import React from "react";
import { motion } from "framer-motion";

import Link from "next/link";
import ThemeSwitcher from "@/app/ui/components/ThemeSwitcher";
import Image from "next/image";

const NavigationScroll = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.2 }}
        className=" bg-white/20 dark:bg-black/20 dark:bg-mugen-purple-navigation backdrop-blur-md flex p-2 px-10 rounded-full text-black dark:text-white border-[1px] border-black dark:border-neutral-800"
      >
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.2 }}
          className="mr-7 w-6 h-6 relative"
        >
          <Link href="/" className=" ">
            <Image
              src={"/mugen.png"}
              alt={"Mugen Logo"}
              fill
              className="absolute w-full h-full object-contain"
            />
          </Link>
        </motion.div>
        <Link
          href="/projects"
          className="mr-8 cursor-pointer hover:text-purple-400 transition-all duration-300 ease-in-out"
        >
          Projects
        </Link>
        <Link
          href="/services"
          className=" cursor-pointer hover:text-purple-400 transition-all duration-300 ease-in-out"
        >
          Services
        </Link>
      </motion.div>
    </>
  );
};

export default NavigationScroll;
