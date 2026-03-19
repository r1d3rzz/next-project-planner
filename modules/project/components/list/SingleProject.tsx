"use client";

import { ProjectType } from "@/types/ProjectType";
import { Check, Edit, Trash } from "lucide-react";
import React, { useState } from "react";
import useProjectToggleCheck from "../../hooks/useProjectToggleCheck";
import useProjectDelete from "../../hooks/useProjectDelete";
import { useRouter } from "next/navigation";
import { formatDistanceToNow } from "date-fns";
import useMenuStore from "@/store/useMenuStore";
import useProjectStatusStore from "@/store/useProjectStatusStore";

type Props = {
  project: ProjectType;
  filgerBtnHandler: (status: string) => void;
};

const SingleProject = ({ project, filgerBtnHandler }: Props) => {
  const router = useRouter();
  const { makeAllUnActive } = useMenuStore();
  const { makeActive } = useProjectStatusStore();

  let [isShow, setIsShow] = useState<boolean>(false);

  const showDetailHandler = () => {
    setIsShow(!isShow);
  };

  const checkBtnHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    await useProjectToggleCheck(project.id);
    filgerBtnHandler("all");
  };

  const deleteBtnHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    await useProjectDelete(project.id);
  };

  const editBtnHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    makeAllUnActive();
    router.push("/edit/" + project.id);
  };

  return (
    <div
      className={`border border-slate-600 border-l-4 ${project.is_done ? "border-l-green-600" : "border-l-red-600"} p-2 rounded-md mb-3 last:mb-0`}
      onClick={showDetailHandler}
    >
      <div className="flex justify-between items-center">
        <div className="text-lg font-medium line-clamp-1">
          {project.title}{" "}
          <small className="text-slate-500 text-xs">
            {formatDistanceToNow(project.created_at)}
          </small>
        </div>
        <div className="gap-2 flex">
          <button
            onClick={checkBtnHandler}
            className={`p-1 border border-slate-600 active:scale-90 duration-200 cursor-pointer active:bg-slate-800 active:text-white ${project.is_done && "bg-slate-800 text-white"}`}
          >
            <Check size={15} />
          </button>
          <button
            onClick={editBtnHandler}
            className="p-1 border border-slate-600 active:scale-90 duration-200 cursor-pointer active:bg-slate-800 active:text-white"
          >
            <Edit size={15} />
          </button>
          <button
            onClick={deleteBtnHandler}
            className="p-1 border border-slate-600 active:scale-90 duration-200 cursor-pointer active:bg-slate-800 active:text-white"
          >
            <Trash size={15} />
          </button>
        </div>
      </div>
      <div className={`${!isShow ? "hidden" : null} mt-3`}>
        <p className="text-slate-500">{project.detail}</p>
      </div>
    </div>
  );
};

export default SingleProject;
