import React from "react";

import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import { Brain, Server, Globe, Cloud, Bell } from "lucide-react";
import { cn } from "@/app/lib/utils";
import AnimatedShinyText from "@/components/magicui/animated-shiny-text";

function Services() {
  return (
    <div className="p-10 flex flex-col justify-center items-center">
      <div className="items-center justify-center">
        <div
          className={cn(
            "group rounded-full border border-black/5 bg-neutral-200 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
          )}
        >
          <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
            <span>🔥 Our Services</span>
          </AnimatedShinyText>
        </div>
      </div>
      <p className="leading-7 [&:not(:first-child)]:mt-4 text-neutral-800 text-center px-5 md:px-40 dark:text-neutral-500 mb-20">
        we offer a wide range of tailored solutions designed to enhance your
        business operations. Explore our expertise in ERP implementation, custom
        development, and more.
      </p>
      <ServicesBento />
    </div>
  );
}

export default Services;

async function ServicesBento() {
  return (
    <BentoGrid className="lg:grid-rows-3">
      {features.map((feature) => (
        <BentoCard key={feature.name} {...feature} />
      ))}
    </BentoGrid>
  );
}

const features = [
  {
    Icon: Server,
    name: "ERP Implementation",
    description:
      "ERP implementation tailored to your business needs from Mugen.",
    href: "/",
    cta: "Learn more",
    background: (
      <div className="relative">
        <img
          className="absolute top-0 left-0 object-cover opacity-100 dark:opacity-60"
          src="https://images.unsplash.com/photo-1554232456-8727aae0cfa4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="ERP"
        />
      </div>
    ),
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
  },
  {
    Icon: Brain,
    name: "AI & ML",
    description: "Kuch aata hai nai fir bhi daalenge",
    href: "/",
    cta: "Learn more",
    background: (
      <img
        className="absolute top-0 left-0 object-cover opacity-100 dark:opacity-60"
        src="https://images.unsplash.com/photo-1617722694908-9be1092d1bc2?q=80&w=1486&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Loli Lolll"
      />
    ),
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: Globe,
    name: "Web Development",
    description: "We make the best website, look at ours only.",
    href: "/",
    cta: "Learn more",
    background: (
      <img
        className="absolute top-0 left-0 object-cover opacity-100 dark:opacity-60"
        src="https://images.unsplash.com/photo-1678690832871-8b9993c76aa8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Loli Lolll"
      />
    ),
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
  },
  {
    Icon: Cloud,
    name: "Cloud & DevOps",
    description: "Best cloud in the market bois, hmu!",
    href: "/",
    cta: "Learn more",
    background: (
      <img
        className="absolute top-0 left-0 object-cover opacity-100 dark:opacity-60"
        src="https://images.unsplash.com/photo-1667984390527-850f63192709?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Loli Lolll"
      />
    ),
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: Bell,
    name: "IT Consultation",
    description: "Know the direction where you need to go to.",
    href: "/",
    cta: "Learn more",
    background: (
      <img
        className="absolute top-0 left-0 object-cover opacity-100 dark:opacity-60"
        src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Loli Lolll"
      />
    ),

    className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
  },
];
