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
          <div className="md:grid md:grid-cols-[repeat(auto-fit,minmax(400px,1fr))]  md:justify-items-center  flex flex-col justify-center items-center ">
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
