import { ProjectType } from "@/types/ProjectType";

export const projectApi = process.env.NEXT_PUBLIC_API + "/projects";

export const getProjectDetail = async (id: string) => {
  let res = await fetch(projectApi + "/" + id, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    throw new Error("Cannot toggle Done project");
  }

  return res.json();
};

export const toggleDoneProject = async (project: ProjectType) => {
  let res = await fetch(projectApi + "/" + project.id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ...project, is_done: !project.is_done }),
  });

  if (!res.ok) {
    throw new Error("Cannot toggle Done project");
  }

  return res.json();
};

export const deleteProject = async (id: string) => {
  let res = await fetch(projectApi + "/" + id, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    throw new Error("Cannot toggle Done project");
  }

  return res.json();
};
