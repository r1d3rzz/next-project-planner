import { getProjectDetail } from "@/services/ProjectService";

const useProjectDetail = async (id: string) => {
  try {
    const project = await getProjectDetail(id);
    return project;
  } catch (error: unknown) {
    console.error(error);
  }
};

export default useProjectDetail;
