import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";

import Image from "next/image";
import {
  Wrench,
  Users,
  HeartHandshake,
  Smile,
  BicepsFlexed,
  DollarSign,
} from "lucide-react";

export function BenefitsBentoGrid() {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <div className="scroll-m-20 text-4xl md:text-5xl font-semibold tracking-tight first:mt-0 text-black dark:text-white flex space-x-2 flex-col md:flex-row items-center lg:items-start  text-center lg:text-left mb-4">
        <span className="bg-gradient-to-br from-indigo-600 to-fuchsia-500 inline-block text-transparent bg-clip-text">
          Benefits
        </span>{" "}
        <p>we offer over others</p>
      </div>
      <BentoGrid className="max-w-4xl mx-auto px-10">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            icon={item.icon}
            className={`${
              i === 3 || i === 6 ? "md:col-span-2" : ""
            } bg-neutral-200 dark:bg-neutral-900`}
          />
        ))}
      </BentoGrid>
    </div>
  );
}

const items = [
  {
    title: "Customization",
    description: "Tailored solutions to meet your unique business needs.",
    header: (
      <div className="relative w-full h-full rounded-lg overflow-hidden">
        <Image
          src="/assets/images/benefits/customise.avif"
          className="absolute w-full h-full object-cover"
          fill
          alt="krutik"
        />
      </div>
    ),
    icon: <Wrench size={24} className="text-black dark:text-white" />,
  },
  {
    title: "Expertise",
    description: "Extensive industry knowledge and technical proficiency.",
    header: (
      <div className="relative w-full h-full rounded-lg overflow-hidden">
        <Image
          src="/assets/images/benefits/expertise.avif"
          className="absolute w-full h-full object-cover"
          fill
          alt="krutik"
        />
      </div>
    ),
    icon: <Users size={24} className="text-black dark:text-white" />,
  },
  {
    title: "Support",
    description: "Dedicated 24/7 customer service and assistance.",
    header: (
      <div className="relative w-full h-full rounded-lg overflow-hidden">
        <Image
          src="/assets/images/benefits/support.avif"
          className="absolute w-full h-full object-cover"
          fill
          alt="krutik"
        />
      </div>
    ),
    icon: <HeartHandshake size={24} className="text-black dark:text-white" />,
  },
  {
    title: "Reliability",
    description: "Consistent and dependable service you can trust.",
    header: (
      <div className="relative w-full h-full rounded-lg overflow-hidden">
        <Image
          src="/assets/images/benefits/reliability.avif"
          className="absolute w-full h-full object-cover"
          fill
          alt="krutik"
        />
      </div>
    ),
    icon: <Smile size={24} className="text-black dark:text-white" />,
  },
  {
    title: "Flexibility",
    description: "Adaptable services to fit your changing requirements.",
    header: (
      <div className="relative w-full h-full rounded-lg overflow-hidden">
        <Image
          src="/assets/images/benefits/flexibility.avif"
          className="absolute w-full h-full object-cover"
          fill
          alt="krutik"
        />
      </div>
    ),
    icon: <BicepsFlexed size={24} className="text-black dark:text-white" />,
  },
  {
    title: "Cost-effective",
    description: "Competitive pricing with high return on investment.",
    header: (
      <div className="relative w-full h-full rounded-lg overflow-hidden">
        <Image
          src="/assets/images/benefits/cost-effective.avif"
          className="absolute w-full h-full object-cover"
          fill
          alt="krutik"
        />
      </div>
    ),
    icon: <DollarSign size={24} className="text-black dark:text-white" />,
  },
  {
    title: "Client-focused",
    description: "Prioritizing your satisfaction and success.",
    header: (
      <div className="relative w-full h-full rounded-lg overflow-hidden">
        <Image
          src="/assets/images/benefits/client-focused.avif"
          className="absolute w-full h-full object-cover"
          fill
          alt="krutik"
        />
      </div>
    ),
    icon: <Users size={24} className="text-black dark:text-white" />,
  },
];
