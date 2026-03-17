import {
  getProjectDetail,
  projectApi,
  toggleDoneProject,
} from "@/services/ProjectService";
import { mutate } from "swr";

const useProjectToggleCheck = async (id: string) => {
  try {
    const project = await getProjectDetail(id);

    if (project == null) {
      throw new Error("Project not found");
    }

    const res = await toggleDoneProject(project);
    mutate(projectApi);
  } catch (error: unknown) {
    console.error(error);
  }
};

export default useProjectToggleCheck;
