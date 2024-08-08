import Marquee from "@/components/magicui/marquee";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className="pt-12 border-t-[1px] bg-white/20 dark:bg-black/20 backdrop-blur-2xl border-black dark:border-neutral-800">
      <div className="w-full relative">
        <Marquee className="w-full [--duration:20s] mt-5">
          <h3 className="scroll-m-20 mr-20 pb-2 font-extrabold tracking-tight text-9xl text-black dark:text-neutral-900">
            Mugen
          </h3>
          <h3 className="scroll-m-20 mr-20 font-extrabold tracking-tight text-9xl text-black dark:text-neutral-900">
            *
          </h3>
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-[15%] bg-gradient-to-r from-white dark:from-black"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-[15%] bg-gradient-to-l from-white dark:from-black"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full place-items-center py-24">
        <div className="w-full h-full flex flex-col space-y-2 justify-start items-center">
          <div className="flex flex-col justify-center items-center md:items-start space-y-2">
            <h4 className="text-4xl font-bold text-neutral-500 dark:text-neutral-800 mb-2">
              Pages
            </h4>
            <Link
              href="/projects"
              className="text-neutral-600 text-lg hover:text-black dark:hover:text-white"
            >
              Projects
            </Link>
            <Link
              href="/services"
              className="text-neutral-600 text-lg hover:text-black dark:hover:text-white"
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="text-neutral-600 text-lg hover:text-black dark:hover:text-white"
            >
              Contact
            </Link>
          </div>
        </div>
        <div className="w-full h-full flex flex-col space-y-2 justify-start items-center">
          <div className="flex flex-col space-y-2 justify-center items-center md:items-start">
            <h4 className="text-4xl font-bold text-neutral-500 dark:text-neutral-800 mb-2">
              Contact
            </h4>
            <Link
              href="mailto:support@mugen.ae"
              className="text-neutral-600 text-lg hover:text-black dark:hover:text-white"
            >
              Mail
            </Link>
            <Link
              href="tel:+971588352107"
              className="text-neutral-600 text-lg hover:text-black dark:hover:text-white"
            >
              Phone
            </Link>
          </div>
        </div>
        <div className="w-full h-full flex flex-col space-y-2 justify-start items-center">
          <div className="flex flex-col space-y-2 justify-center items-center md:items-start">
            <h4 className="text-4xl font-bold text-neutral-500 dark:text-neutral-800 mb-2">
              Legal
            </h4>
            <Link
              href="/terms-and-conditions"
              className="text-neutral-600 text-lg hover:text-black dark:hover:text-white"
            >
              Terms & Conditions
            </Link>
            <Link
              href="/privacy-policy"
              className="text-neutral-600 text-lg hover:text-black dark:hover:text-white"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
        <div className="w-full h-full flex flex-col space-y-2 justify-start items-center">
          <div className="flex flex-col space-y-2 justify-center items-center md:items-start">
            <h4 className="text-4xl font-bold text-neutral-500 dark:text-neutral-800 mb-2">
              Socials
            </h4>
            <Link
              href="https://www.linkedin.com/"
              className="text-neutral-600 text-lg hover:text-black dark:hover:text-white"
            >
              LinkedIn
            </Link>
            <Link
              href="https://x.com/"
              className="text-neutral-600 text-lg hover:text-black dark:hover:text-white"
            >
              Twitter
            </Link>
            <Link
              href="https://instagram.com/"
              className="text-neutral-600 text-lg hover:text-black dark:hover:text-white"
            >
              Instagram
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t-[1px] p-5 text-neutral-500 dark:text-neutral-700 border-black dark:border-neutral-800">
        &copy; {new Date().getFullYear()} Mugen. All Rights Reserved
      </div>
    </div>
  );
}

export default Footer;
