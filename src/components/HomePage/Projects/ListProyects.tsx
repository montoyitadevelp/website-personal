import { InfoProject } from "./InfoProyect/InfoProyect";
import { Fragment } from "react";
import { listProjects } from "../../../interfaces/Objects";
import "tippy.js/dist/tippy.css";
import "tippy.js/themes/material.css";

export const ListProyects: React.FC = () => {
  return (
    <>
      {listProjects.map((projects, index) => (
        <Fragment key={index}>
          <div className="flex gap-[1rem]  max-[860px]:justify-center flex-wrap ">
            {Object.entries(projects).map(([projectName, projectData]) => (
              <InfoProject
                key={projectName}
                titleProject={projectName}
                link={projectData.link}
                icons={projectData.icons}
                img={projectData.img}
              />
            ))}
          </div>
        </Fragment>
      ))}
    </>
  );
};
