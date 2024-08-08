import React from "react";
import { projects } from "../lib/data/projects";
import OverviewProjectCard from "../ui/components/Projects/OverviewProjectCard";

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

export default Page;
