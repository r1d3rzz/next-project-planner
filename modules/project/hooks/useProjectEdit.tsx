import {
  projectApi,
  storeProject,
  updateProject,
} from "@/services/ProjectService";
import {
  ProjectStoreSchema,
  ProjectStoreValue,
  ProjectType,
} from "@/types/ProjectType";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { mutate } from "swr";

const useProjectEdit = (data: ProjectType) => {
  const router = useRouter();

  const form = useForm<ProjectStoreValue>({
    resolver: zodResolver(ProjectStoreSchema),
    defaultValues: {
      ...data,
    },
  });

  const OnSubmit = async (payload: ProjectStoreValue) => {
    try {
      let res = await updateProject(payload, data.id);
      mutate(projectApi);
      toast.success("new project successfully Editd.");
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

export default useProjectEdit;
