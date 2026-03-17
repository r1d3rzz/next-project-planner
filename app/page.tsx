import ProjectListSection from "@/modules/project/components/list/ProjectListSection";
import React from "react";
import { Toaster } from "react-hot-toast";

const Page = () => {
  return (
    <div className="w-1/3 mx-auto my-3">
      <h1 className="text-center text-xl">Project Planner</h1>

      <ProjectListSection />

      <Toaster />
    </div>
  );
};

export default Page;
