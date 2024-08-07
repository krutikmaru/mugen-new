import { Project } from "@/app/lib/types/project";

export default function SectorIntegrations({ project }: { project: Project }) {
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
                className="px-4 py-1 text-xs rounded-full mr-2 mb-2 border-[1px] text-black dark:text-white border-[#dedede] dark:border-[#292929]"
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
        <div className="w-full flex justify-start items-center overflow-x-scroll scrollbar-hidden pb-4">
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
}
