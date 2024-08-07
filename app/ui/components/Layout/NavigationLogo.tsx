import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavigationLogo = () => {
  return (
    <Link
      href="/"
      className="text-black dark:text-white font-semibold w-8 h-8 relative "
    >
      <Image
        src={"/mugen.png"}
        alt={"Mugen Logo"}
        fill
        className="absolute w-full h-full object-contain"
      />
    </Link>
  );
};

export default NavigationLogo;
