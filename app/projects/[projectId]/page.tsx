"use client";
import { projects } from "@/app/lib/data/projects";
import React from "react";
import { useRouter } from "next/navigation";
import { Content, Project } from "@/app/lib/types/project";
import AnimatedCircularProgressBar from "@/components/magicui/animated-circular-progress-bar";
import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react";

function Page({ params }: { params: { projectId: "string" } }) {
  const project = projects.find((p) => p.id === params.projectId);
  const router = useRouter();
  if (!project) {
    router.push("/projects");
    return;
  }

  return (
    <div className="w-full pt-20 flex">
      <div className="w-full h-full relative flex flex-col lg:flex-row justify-start items-start">
        <MetaDataSection project={project} />
        <DocumentSection projectContent={project.content} />
      </div>
    </div>
  );
}

export default Page;

const DocumentSection = ({ projectContent }: { projectContent: Content[] }) => {
  const finalContent = [];
  const Heading1 = ({
    className,
    children,
  }: {
    className: string | undefined;
    children: React.ReactNode;
  }) => {
    return <h1 className={className}>{children}</h1>;
  };
  const Heading2 = ({
    className,
    children,
  }: {
    className: string | undefined;
    children: React.ReactNode;
  }) => {
    return <h2 className={className}>{children}</h2>;
  };
  const Paragraph = ({
    className,
    children,
  }: {
    className: string | undefined;
    children: React.ReactNode;
  }) => {
    return <p className={className}>{children}</p>;
  };
  const Li = ({
    className,
    children,
  }: {
    className: string | undefined;
    children: React.ReactNode;
  }) => {
    return <li className={className}>{children}</li>;
  };
  for (let i = 0; i < projectContent.length; i++) {
    let element = projectContent[i];
    if (element.type === "h1") {
      finalContent.push(
        <Heading1 className={element.tailwindCss}>{element.data}</Heading1>
      );
    }
    if (element.type === "h2") {
      finalContent.push(
        <Heading2 className={element.tailwindCss}>{element.data}</Heading2>
      );
    }
    if (element.type === "p") {
      finalContent.push(
        <Paragraph className={element.tailwindCss}>{element.data}</Paragraph>
      );
    }
    if (element.type === "li") {
      finalContent.push(
        <Li className={element.tailwindCss}>{element.data}</Li>
      );
    }
  }
  return <div className="w-full lg:w-[70%] p-5">{finalContent}</div>;
};

const MetaDataSection = ({ project }: { project: Project }) => {
  return (
    <div className="w-full lg:w-[30%] flex flex-col p-5">
      <SectorIntegrations project={project} />
      <TimelineDifficulty project={project} />
    </div>
  );
};

export const SectorIntegrations = ({ project }: { project: Project }) => {
  return (
    <div className="w-full h-auto bg-[#fff] dark:bg-black text-black dark:text-white dark:bg-mugen-purple-navigation backdrop-blur-md border-[1px] border-[#dedede] dark:border-[#292929]  rounded-md overflow-hidden p-4">
      <div>
        <div>
          <h1 className="ml-2 mb-2 text-xl text-black dark:text-white">
            Sector
          </h1>
          {project.sector.map((s) => {
            return (
              <span
                key={s}
                className="px-4 py-1 text-xs rounded-full mr-2 mb-2 border-[1px] text-black dark:text-white border-mugen-purple-white"
              >
                {s}
              </span>
            );
          })}
        </div>
      </div>
      <div>
        <h1 className="ml-2 mb-3 mt-6 text-xl text-black dark:text-white">
          Integrations
        </h1>
        <div className="w-full flex justify-start items-center overflow-x-scroll pb-4">
          {project.integrations.map((integration) => {
            return (
              <div
                key={integration.title}
                className="h-32 min-w-[128px] mr-5 p-5 bg-neutral-100 dark:bg-neutral-900 rounded-md overflow-hidden flex flex-col justify-center items-center text-center"
              >
                <integration.icon className="text-black dark:text-white" />
                <span className="text-black dark:text-white text-sm">
                  {integration.title}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const TimelineDifficulty = ({ project }: { project: Project }) => {
  let progressCol = "";
  let trackCol = "";
  if (project.difficulty.title.toLowerCase() === "high") {
    progressCol = "#ff3c20";
    trackCol = "#ffc6be";
  } else if (project.difficulty.title.toLowerCase() === "mid") {
    progressCol = "#d3ff19";
    trackCol = "#eeffa6";
  } else {
    progressCol = "#53fb5e";
    trackCol = "#e0fbe2";
  }
  return (
    <div className="h-auto w-full flex flex-col justify-start items-center">
      <div className="w-full h-auto mt-4 p-10  bg-[#fff] dark:bg-black  backdrop-blur-md border-2 border-[#dedede] dark:border-[#292929] rounded-md overflow-hidden flex justify-center items-center flex-col">
        <div className="w-44 h-44 bg-gradient-to-br flex justify-center items-center text-7xl font-semibold  from-violet-500 to-fuchsia-500 rounded-md">
          {project.timeline}
        </div>
        <span className="text-4xl mt-3 text-black dark:text-white">
          Timeline
        </span>
      </div>
      <div className="w-full h-auto mt-4 p-4 bg-[#fff] dark:bg-black  backdrop-blur-md border-2 border-[#dedede] dark:border-[#292929] rounded-md overflow-hidden flex justify-center items-center flex-col">
        <div className="mb-3 rounded-md flex justify-center items-center">
          <CircularProgress
            value={project.difficulty.progress}
            color={progressCol}
            size="150px"
            trackColor={trackCol}
            className="text-red-400"
            capIsRound
          >
            <CircularProgressLabel className="text-black dark:text-white">
              {project.difficulty.title}
            </CircularProgressLabel>
          </CircularProgress>
        </div>

        <span className="text-4xl mt-3 text-black dark:text-white">
          Difficulty
        </span>
      </div>
    </div>
  );
};
