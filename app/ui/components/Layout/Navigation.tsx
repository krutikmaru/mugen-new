"use client";
import React, { useState, useEffect } from "react";
import NavigationLogo from "./NavigationLogo";
import NavigationLinks from "./NavigationLinks";
import NavigationScroll from "./NavigationScroll";
import ThemeSwitcher from "@/app/ui/components/ThemeSwitcher";

const Navigation = () => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const changeNavLayout = () => {
    if (window.scrollY >= 90) {
      setHasScrolled(true);
    } else {
      setHasScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavLayout);

    return () => {
      window.removeEventListener("scroll", changeNavLayout);
    };
  }, []);
  return (
    <>
      {hasScrolled ? (
        <div className="w-full h-20 fixed top-0 left-0 z-[100000]">
          <div className="w-full h-full flex items-center justify-center px-10 relative">
            <div>
              <NavigationScroll />
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full h-20 bg-white/5 dark:bg-black/5 backdrop-blur-sm fixed top-0 left-0 border-b-[1px] border-black dark:border-neutral-800 z-[100000]">
          <div className="w-full h-full flex items-center justify-center md:justify-between px-10 relative">
            <div className="cursor-pointer hidden md:flex">
              <NavigationLogo />
            </div>
            <div>
              <NavigationLinks />
            </div>
            <div className="cursor-pointer hidden md:flex">
              <ThemeSwitcher />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
