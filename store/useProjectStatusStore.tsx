import { create } from "zustand";

type ProjectStatusType = {
  name: string;
  status: string;
  is_active: boolean;
};

type ProjectStatusState = {
  status: ProjectStatusType[];
  makeActive: (statusName: string) => void;
};

const useProjectStatusStore = create<ProjectStatusState>()((set) => ({
  status: [
    {
      name: "All",
      status: "all",
      is_active: true,
    },
    {
      name: "Pending",
      status: "pending",
      is_active: false,
    },
    {
      name: "Done",
      status: "done",
      is_active: false,
    },
  ],
  makeActive: (statusName) =>
    set((state) => ({
      status: state.status.map((el) =>
        el.status == statusName
          ? { ...el, is_active: true }
          : { ...el, is_active: false },
      ),
    })),
}));

export default useProjectStatusStore;
