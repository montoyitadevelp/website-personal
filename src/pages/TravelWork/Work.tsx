import { IconBrandGit } from "@tabler/icons-react";
import React, { Fragment } from "react";
import { WorkDesing } from "./Structure/WorkDesing";
import { listHistory } from "../../interfaces/Objects";
import { Dev, Main } from "./Structure/WorkTitle";

export const Work: React.FC = () => {
  return (
    <>
      <div className="flex items-center gap-[1rem] justify-center p-[1rem] font-mono text-3xl text-danger-50 max-[500px]:justify-center flex-wrap text-center ">
        <h1>Work travel with git flow</h1>
        <IconBrandGit className="w-10 h-10 text-white" />
      </div>

     
      <div className="md:flex md:justify-center">
        {listHistory.map((history, index) => (
          <Fragment key={index}>
            <div className="flex flex-col">
              <Main />
              {Object.values(history.main).map((itemMain, mainIndex) => (
                <WorkDesing
                  key={`main-${mainIndex}`}
                  titleGit={itemMain.title}
                  icon={itemMain.icons}
                  resumeGit={itemMain.text}
                />
              ))}
            </div>
            <div className="flex flex-col">
              <Dev />
              {Object.values(history.dev).map((itemDev, devIndex) => (
                <WorkDesing
                  key={`dev-${devIndex}`}
                  titleGit={itemDev.title}
                  icon={itemDev.icons}
                  resumeGit={itemDev.text}
                />
              ))}
            </div>
          </Fragment>
        ))}
      </div>
    </>
  );
};
