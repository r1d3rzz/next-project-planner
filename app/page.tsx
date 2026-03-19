import ProjectListSection from "@/modules/project/components/list/ProjectListSection";
import { Toaster } from "react-hot-toast";

const Page = () => {
  return (
    <div>
      <ProjectListSection />

      <Toaster />
    </div>
  );
};

export default Page;
