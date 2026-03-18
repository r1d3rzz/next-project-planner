import { projectApi, storeProject } from "@/services/ProjectService";
import { ProjectStoreSchema, ProjectStoreValue } from "@/types/ProjectType";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { mutate } from "swr";

const useProjectCreate = () => {
  const router = useRouter();

  const form = useForm<ProjectStoreValue>({
    resolver: zodResolver(ProjectStoreSchema),
    defaultValues: {
      title: "",
      detail: "",
    },
  });

  const OnSubmit = async (payload: ProjectStoreValue) => {
    try {
      let res = await storeProject(payload);
      mutate(projectApi);
      toast.success("new project successfully created.");
      form.reset();
      router.push("/");
    } catch (error: unknown) {
      form.reset();
      console.error(error);
    }
  };

  return {
    ...form,
    OnSubmit,
  };
};

export default useProjectCreate;
