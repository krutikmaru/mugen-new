"use client";
import { Project } from "@/app/lib/types/project";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { ArrowRight, Clock, Factory } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";

export default function OverviewProjectCard({
  project,
}: {
  project: Project;
  index: number;
}) {
  const { theme } = useTheme();

  return (
    <Link href={`/projects/${project.id}`}>
      <CardSpotlight
        className="h-[500px] min-w-full md:min-w-[300px] bg-white dark:bg-black flex flex-col lg:mb-0 relative p-7 cursor-pointer "
        color={theme === "dark" ? "#262626" : "#fff"}
      >
        <div className="relative z-10 h-full text-black dark:text-white">
          <div>
            {project.icon}
            <h1 className="text-5xl my-4 font-semibold flex flex-col items-start justify-start">
              {project.title}
            </h1>
            <p className="text-mugen-purple-dark mb-4">{project.overview}</p>
          </div>
          <div className="w-full text-mugen-purple-dark">
            <div className="w-full flex items-center justify-between mb-2">
              <div className="flex space-x-2 items-center">
                <Factory />
                <span>Industry</span>
              </div>
              <p className="font-semibold">{project.industry}</p>
            </div>
            <div className="w-full flex items-center justify-between ">
              <div className="flex space-x-2 items-center">
                <Clock />
                <span>Duration</span>
              </div>
              <p className="font-semibold">{project.duration}</p>
            </div>
          </div>
        </div>
        <div className="relative z-10 flex items-center justify-end text-5xl">
          <ArrowRight />
        </div>
      </CardSpotlight>
    </Link>
  );
}
