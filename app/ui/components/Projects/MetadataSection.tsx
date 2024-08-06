import { Project } from "@/app/lib/types/project";
import SectorIntegrations from "./SectorIntegration";
import TimelineDifficulty from "./TimelineDifficulty";

export function MetaDataSection({ project }: { project: Project }) {
  return (
    <div className="w-full lg:w-[30%] flex flex-col p-5">
      <SectorIntegrations project={project} />
      <TimelineDifficulty project={project} />
    </div>
  );
}
