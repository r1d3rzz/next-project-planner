import React from "react";
import SingleProject from "./SingleProject";
import useProjectList from "../../hooks/useProjectList";
import { ProjectType } from "@/types/ProjectType";
import ProjectSkeletonLoading from "./ProjectSkeletonLoading";

const ProjectList = () => {
  const { data, isLoading } = useProjectList();

  const doneCount = data?.filter((el: any) => el.is_done).length ?? 0;
  const totalCount = data?.length ?? 0;

  return (
    <div>
      <div className="text-end text-sm mb-3">
        Total {doneCount} / {totalCount}
      </div>
      {isLoading
        ? Array.from({ length: 5 }).map((_, index) => (
            <ProjectSkeletonLoading key={index} />
          ))
        : data.map((project: ProjectType) => (
            <SingleProject key={project.id} project={project} />
          ))}
    </div>
  );
};

export default ProjectList;
