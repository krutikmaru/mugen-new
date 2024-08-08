"use client";
import React from "react";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import Image from "next/image";
import { ArrowRight, Handshake } from "lucide-react";
import Link from "next/link";
import { services } from "../lib/data/services";
import { useTheme } from "next-themes";

function Page() {
  const { theme } = useTheme();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center p-10 mt-24 ">
      {services.map((service) => (
        <Link
          key={service.id}
          href={`/services/${service.id}`}
          className="mr-4 w-full"
        >
          <CardSpotlight
            className="h-96 w-full bg-white dark:bg-black text-black dark:text-white"
            color={theme === "dark" ? "#262626" : "#fff"}
          >
            <service.Icon className="mb-5" size={72} />
            <h2 className="text-4xl">{service.title}</h2>
            <div className="mt-4 relative z-20">{service.description}</div>
            <ArrowRight className="absolute bottom-10 right-10" size={32} />
          </CardSpotlight>
        </Link>
      ))}
    </div>
  );
}

export default Page;
