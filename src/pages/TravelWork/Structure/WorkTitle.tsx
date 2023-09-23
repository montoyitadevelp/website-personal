import { Icon } from "@iconify/react/dist/iconify.js";

export const Main = () => {
  return (
    <>
      <div className="flex flex-col justify-stretch items-center font-mono ">
        <p className="text-danger-50">Branch main</p>
        <Icon className="text-white w-10 h-10" icon="carbon:directory-domain" />
      </div>
    </>
  );
};

export const Dev = () => {
  return (
    <>
      <div className="flex flex-col items-center font-mono ">
        <p className="text-danger-50">Branch dev</p>
        <Icon
          className="text-white w-10 h-10"
          icon="fluent:window-dev-edit-20-regular"
        />
      </div>
    </>
  );
};
