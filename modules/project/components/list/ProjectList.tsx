import SingleProject from "./SingleProject";
import useProjectList from "../../hooks/useProjectList";
import { ProjectType } from "@/types/ProjectType";
import ProjectSkeletonLoading from "./ProjectSkeletonLoading";
import useProjectStatusStore from "@/store/useProjectStatusStore";
import { useEffect, useState } from "react";

const ProjectList = () => {
  const { data, isLoading } = useProjectList();
  const [projectArr, setProjectArr] = useState<ProjectType[]>([]);

  useEffect(() => {
    if (!isLoading && data) {
      setProjectArr(data);
    }
  }, [isLoading, data]);

  const doneCount = data?.filter((el: any) => el.is_done).length ?? 0;
  const totalCount = data?.length ?? 0;

  const { status, makeActive } = useProjectStatusStore();

  const filgerBtnHandler = (status: string) => {
    makeActive(status);

    if (!data) return;

    const filtered = data.filter((el: ProjectType) => {
      if (status === "done") return el.is_done === true;
      if (status === "pending") return el.is_done === false;
      return true; // for "all"
    });

    setProjectArr(filtered);
  };

  return (
    <div>
      <div className="text-end text-sm mb-3">
        Total {doneCount} / {totalCount}
      </div>

      <div className="text-xs flex gap-2 text-slate-300 font-semibold mb-3">
        {status.map((el, index) => (
          <button
            key={index}
            onClick={() => filgerBtnHandler(el.status)}
            className={`${el.is_active ? "text-slate-500" : "text-slate-300"} cursor-pointer`}
          >
            {el.name}
          </button>
        ))}
      </div>

      {isLoading
        ? Array.from({ length: 5 }).map((_, index) => (
            <ProjectSkeletonLoading key={index} />
          ))
        : projectArr.map((project: ProjectType) => (
            <SingleProject
              key={project.id}
              project={project}
              filgerBtnHandler={filgerBtnHandler}
            />
          ))}
    </div>
  );
};

export default ProjectList;
