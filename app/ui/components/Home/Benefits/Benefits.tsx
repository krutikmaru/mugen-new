"use client";
import { MagicCard } from "@/components/magicui/magic-card";
import { useTheme } from "next-themes";
import React from "react";
import {
  DollarSign,
  HeartHandshake,
  Smile,
  Wrench,
  Lightbulb,
  User,
} from "lucide-react";
import { GridPattern } from "@/components/magicui/animated-grid-pattern";
import { cn } from "@/app/lib/utils";
import { Badge } from "@/components/ui/badge";

function Benefits() {
  const { theme } = useTheme();
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center space-x-0 md:space-x-5 px-0 md:px-40 py-20 relative overflow-hidden">
      <GridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
        )}
      />
      <div className="scroll-m-20 w-80 text-4xl md:text-5xl font-semibold tracking-tight first:mt-0 text-black dark:text-white flex flex-col items-center lg:items-start  text-center lg:text-left mb-10 lg:mb-0">
        <span className="bg-gradient-to-br from-indigo-600 to-fuchsia-500 inline-block text-transparent bg-clip-text">
          Benefits
        </span>{" "}
        we offer over others
      </div>
      <div className={"grid grid-cols-1 items-center sm:grid-cols-2 gap-4"}>
        {benefits.map((benefit) => {
          return (
            <MagicCard
              key={benefit.title}
              className="h-40 w-40 flex flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl "
              gradientColor={theme === "dark" ? "#262626" : "#c1a3ff"}
            >
              {benefit.icon}
              <Badge variant="secondary">{benefit.title}</Badge>
            </MagicCard>
          );
        })}
      </div>
    </div>
  );
}

export default Benefits;

const benefits = [
  { icon: <DollarSign />, title: "Cost Efficient" },
  { icon: <Wrench />, title: "Customization" },
  { icon: <Smile />, title: "Reliability" },
  { icon: <HeartHandshake />, title: "Support" },
  { icon: <Lightbulb />, title: "Innovation" },
  { icon: <User />, title: "Expertise" },
];
