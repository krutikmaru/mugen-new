import React from "react";

function Page({ params }: { params: { projectId: "string" } }) {
  return (
    <div className="w-full h-screen py-24 px-10">
      Project {params.projectId}
    </div>
  );
}

export default Page;
