const ProjectSkeletonLoading = () => {
  return (
    <div className="border border-slate-600 border-l-4 border-l-slate-500 p-2 rounded-md mb-3 last:mb-0 animate-pulse">
      <div className="flex justify-between items-center">
        {/* Title + time */}
        <div className="flex flex-col gap-2 w-2/3">
          <div className="h-5 bg-slate-300 rounded w-3/4"></div>
          <div className="h-3 bg-slate-200 rounded w-1/4"></div>
        </div>

        {/* Buttons */}
        <div className="gap-2 flex">
          <div className="w-6 h-6 bg-slate-300 rounded"></div>
          <div className="w-6 h-6 bg-slate-300 rounded"></div>
          <div className="w-6 h-6 bg-slate-300 rounded"></div>
        </div>
      </div>

      {/* Detail (optional skeleton block) */}
      {/* <div className="mt-3 space-y-2">
        <div className="h-3 bg-slate-300 rounded w-full"></div>
        <div className="h-3 bg-slate-300 rounded w-5/6"></div>
      </div> */}
    </div>
  );
};

export default ProjectSkeletonLoading;
