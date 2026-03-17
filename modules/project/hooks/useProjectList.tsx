import fetcher from "@/libs/fetcher";
import { projectApi } from "@/services/ProjectService";
import useSWR from "swr";

const useProjectList = () => {
  const swr = useSWR(projectApi, fetcher);

  return {
    ...swr,
  };
};

export default useProjectList;
