import React from "react";
import useProjectCreate from "../../hooks/useProjectCreate";
import { Controller } from "react-hook-form";

const ProjectCreateForm = () => {
  const {
    handleSubmit,
    OnSubmit,
    control,
    formState: { errors },
  } = useProjectCreate();

  return (
    <div className="my-3">
      <h1 className="mb-2">Create New Project</h1>

      <form onSubmit={handleSubmit(OnSubmit)}>
        <div className="mb-3">
          <label htmlFor="" className="font-medium">
            Title
          </label>
          <br />
          <Controller
            name="title"
            control={control}
            render={({ field, fieldState }) => (
              <div>
                <input type="text" className="border p-1 w-full" {...field} />
                <span className="text-red-600 text-xs">
                  {errors?.title?.message}
                </span>
              </div>
            )}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="" className="font-medium">
            Detail
          </label>
          <br />
          <Controller
            control={control}
            name="detail"
            render={({ field }) => (
              <div>
                <textarea
                  {...field}
                  rows={3}
                  className="border w-full p-1"
                ></textarea>
                <span className="text-red-600 text-xs">
                  {errors?.detail?.message}
                </span>
              </div>
            )}
          />
        </div>

        <div>
          <button
            type="submit"
            className="border w-full py-1 bg-slate-700 text-white active:scale-95 duration-200"
          >
            Create Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProjectCreateForm;
