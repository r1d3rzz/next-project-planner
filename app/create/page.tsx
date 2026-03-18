import ProjectCreateSection from "@/modules/project/components/create/ProjectCreateSection";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div>
      <h1 className="text-center text-xl my-3">Project Planner</h1>

      <div className="text-center">
        <Link className="font-semibold text-green-400" href={"/"}>
          Home
        </Link>{" "}
        | <Link href={"/create"}>Create</Link>
      </div>

      <ProjectCreateSection />
    </div>
  );
};

export default Page;
