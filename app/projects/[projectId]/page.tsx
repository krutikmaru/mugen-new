"use client";
import { projects } from "@/app/lib/data/projects";
import React from "react";
import { useRouter } from "next/navigation";
import { Content, Project } from "@/app/lib/types/project";
import { DocumentSection } from "@/app/ui/components/Projects/DocumentSection";
import { MetaDataSection } from "@/app/ui/components/Projects/MetadataSection";

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
