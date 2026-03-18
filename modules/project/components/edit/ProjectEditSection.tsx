"use client";

import { useParams } from "next/navigation";
import useProjectShow from "../../hooks/useProjectShow";
import ProjectEditeForm from "./ProjectEditForm";

const ProjectEditeSection = () => {
  const { id } = useParams<{ id: string }>();

  const { data, isLoading } = useProjectShow(id);

  return (
    <div>
      {isLoading ? <div>loading</div> : <ProjectEditeForm project={data} />}
    </div>
  );
};

export default ProjectEditeSection;
