import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const NavigationLinks = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.2 }}
      className="flex p-2 px-10 rounded-full border-[1px] border-black dark:border-neutral-800 space-x-4"
    >
      <motion.div className=" cursor-pointer hover:text-purple-700 text-black dark:text-white transition-all duration-300 ease-in-out">
        <Link href="/projects">Projects</Link>
      </motion.div>
      <motion.div className=" cursor-pointer hover:text-purple-700 text-black dark:text-white transition-all duration-300 ease-in-out">
        <Link href="/services">Services</Link>
      </motion.div>
    </motion.div>
  );
};

export default NavigationLinks;
