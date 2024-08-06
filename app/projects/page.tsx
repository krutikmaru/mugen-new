"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { projects, Project } from "../lib/data/projects";
import { ArrowRight, Clock, Factory } from "lucide-react";

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
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 items-center pb-4 relative transition-all duration-500 ease-in-out">
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
  const [isClicked, setIsClicked] = useState(false);
  const [shouldAppear, setShouldAppear] = useState(false);
  const router = useRouter();
  const handleCardClick = () => {
    // setIsClicked(true);
    // setTimeout(() => {
    //   setShouldAppear(true);
    //   setTimeout(() => {
    //     // navigate("/projects/krutik");
    //   }, 500);
    // }, 300);
    router.push(`/projects/${project.id}`);
  };

  return (
    <>
      <motion.div
        className="h-[500px] min-w-full bg-neutral-300 dark:bg-neutral-900 md:min-w-[300px] flex flex-col rounded-md overflow-hidden lg:mb-0 relative p-7 cursor-pointer "
        animate={{
          scale: isClicked ? 100 : 1,
          zIndex: isClicked ? 10 : 1,
          rotate: isClicked ? "-30deg" : "0deg",
        }}
        transition={{ duration: 3.5 }}
        onClick={handleCardClick}
      >
        {/* <img
            src="/assets/images/gradients/gradient_background_1.jpg"
            alt="background"
            className="w-full h-full object-cover absolute top-0 left-0"
          /> */}
        <div className="relative z-10 h-full ">
          <div>
            <project.icon size={40} />
            <h1 className="text-mugen-purple-dark text-5xl my-4 font-semibold flex flex-col items-start justify-start">
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
        <div className="relative z-10 flex items-center justify-end text-5xl text-mugen-purple-dark">
          <ArrowRight />
        </div>
      </motion.div>
      <motion.div
        animate={{
          opacity: shouldAppear ? 1 : 0,
          display: shouldAppear ? "block" : "none",
        }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 w-full h-screen bg-mugen-purple-dark z-[1000]"
      ></motion.div>
    </>
  );
};

export default Page;
