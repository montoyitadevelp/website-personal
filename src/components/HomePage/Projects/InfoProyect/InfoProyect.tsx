import { followCursor } from "tippy.js";
import { LazyTippy } from "../../../../lazyLoading/lazyTippy";
import { Icon } from "@iconify/react/dist/iconify.js";

interface PropsProyect {
  titleProject: string;
  img: JSX.Element;
  link: string;
  icons: Record<string, JSX.Element>;
}

export const InfoProject = ({
  titleProject,
  img,
  link,
  icons,
}: PropsProyect) => {
  return (
    <>
      <div className="flex flex-col rounded-xl   ">
        <LazyTippy
          theme={"light"}
          content={
            <div
              id="lazyTippy"
              className="flex flex-col items-center justify-center"
            >
              <Icon
                icon="mdi:account-multiple-outline"
                className="w-12 h-12 text-gray-500"
              />
              <p className="text-gray-500 text-sm font-medium">
                {titleProject}
              </p>
            </div>
          }
          interactive={true}
          plugins={[followCursor]}
          followCursor={true}
        >
          <div className="hover:cursor-pointer  mx-4 mt-4 border w-96 h-72 max-[430px]:w-auto overflow-hidden rounded-xl shadow-2xl">
            <a href={link}>{img}</a>
          </div>
        </LazyTippy>
        <div className="flex justify-start gap-7 p-6 pt-2">
          <div className="flex flex-col">
            <h1 className="text-center text-white text-xl shadow-2xl ">
              Stacks
            </h1>
            <div className="flex gap-[5rem] max-[430px]:flex-wrap max-[430px]:justify-center max-[430px]:p-5">
              {Object.values(icons).map((icon, index) => (
                <div key={index} className="flex flex-col items-center">
                  {icon}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
