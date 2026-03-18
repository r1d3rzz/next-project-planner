import fetcher from "@/libs/fetcher";
import { projectApi } from "@/services/ProjectService";
import useSWR from "swr";

const useProjectShow = (id: string) => {
  const swr = useSWR(projectApi + "/" + id, fetcher);
  return {
    ...swr,
  };
};

export default useProjectShow;
