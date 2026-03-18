import z from "zod";

export type ProjectType = {
  id: string;
  title: string;
  detail: string;
  is_done: boolean;
  created_at: string;
};

export const ProjectStoreSchema = z.object({
  title: z.string().min(3, "title is required"),
  detail: z.string().min(10, "detail is required"),
});

export type ProjectStoreValue = z.infer<typeof ProjectStoreSchema>;
