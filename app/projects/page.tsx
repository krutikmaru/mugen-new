"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { projects } from "../lib/data/projects";
import { ArrowRight, Clock, Factory } from "lucide-react";
import { Project } from "../lib/types/project";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { useTheme } from "next-themes";

const Page = () => {
  return (
    <div className="w-full min-h-screen flex flex-col p-4 md:p-10 mt-24 ">
      <ProjectsOverview />
    </div>
  );
};

const ProjectsOverview = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 items-center pb-4 relative transition-all duration-500 ease-in-out">
        {projects.map((project, index) => (
          <OverviewProjectCard
            key={project.title}
            project={project}
            index={index}
          />
        ))}
      </div>
    </>
  );
};

const OverviewProjectCard = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => {
  const { theme } = useTheme();
  const [isClicked, setIsClicked] = useState(false);
  const [shouldAppear, setShouldAppear] = useState(false);
  const router = useRouter();
  const handleCardClick = () => {
    router.push(`/projects/${project.id}`);
  };

  return (
    <>
      <CardSpotlight
        className="h-[500px] min-w-full md:min-w-[300px] bg-white dark:bg-black flex flex-col lg:mb-0 relative p-7 cursor-pointer "
        onClick={handleCardClick}
        color={theme === "dark" ? "#262626" : "#fff"}
      >
        <div className="relative z-10 h-full text-black dark:text-white">
          <div>
            <project.icon size={40} />
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
    </>
  );
};

export default Page;
