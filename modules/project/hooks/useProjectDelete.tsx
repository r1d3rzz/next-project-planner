import { deleteProject, projectApi } from "@/services/ProjectService";
import toast from "react-hot-toast";
import { mutate } from "swr";

const useProjectDelete = async (id: string) => {
  try {
    await deleteProject(id);
    mutate(projectApi);
    toast.success("project deleted");
  } catch (error: unknown) {
    console.error(error);
  }
};

export default useProjectDelete;
