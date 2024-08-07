import { Service } from "@/app/lib/types/service";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ActionArea({ service }: { service: Service }) {
  return (
    <div className="h-full w-full lg:w-[25%] flex flex-col space-y-2">
      <div className="w-full lg:w-full lg:h-1/2 px-6 py-10 border-[1px] border-neutral-400 dark:border-neutral-800 bg-neutral-200 dark:bg-neutral-900 rounded-md flex justify-center items-center">
        <div className="flex flex-col justify-start items-start space-y-4">
          <h3 className="text-xl text-black dark:text-white font-bold tracking-tighter">
            {service.title}
          </h3>
          <p className="text-sm lg:text-xs tracking-tight text-black dark:text-white">
            {service.getServiceActionCardDescription}
          </p>
          <button className="text-sm text-white lg:text-xs tracking-tight px-3 py-2 bg-[#B352FF] border border-[#8339BD] rounded-md flex justify-center items-center space-x-2">
            <span>Get Started</span>
            <ArrowRight />
          </button>
        </div>
      </div>
      <div className="w-full lg:w-full lg:h-1/2 px-6 py-6 lg:py-5 border-[1px] border-neutral-400 dark:border-neutral-800 bg-neutral-200 dark:bg-neutral-900 rounded-md flex justify-center items-center">
        <div className="flex flex-col justify-start items-start space-y-2 w-full h-full">
          <div className="w-full h-[250px] md:h-full rounded-md overflow-hidden relative">
            <img
              src={service.nextServiceImage}
              alt="Test"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <h3 className="text-xl font-bold tracking-tighter text-black dark:text-white">
            {service.nextServiceTitle}
          </h3>
          <Link
            href={`/services/${service.nextServiceSlug}`}
            className="text-sm lg:text-xs tracking-tight font-medium text-[#C985FF] flex justify-center items-center space-x-2"
          >
            <span>Next Service</span>
            <ArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
}
