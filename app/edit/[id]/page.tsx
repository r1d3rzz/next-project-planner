import ProjectEditeSection from "@/modules/project/components/edit/ProjectEditSection";
import Link from "next/link";

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

      <ProjectEditeSection />
    </div>
  );
};

export default Page;
