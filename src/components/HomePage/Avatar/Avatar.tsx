import Atropos from "atropos/react";
import styledHead from "../../../Home-layout.module.scss";
import circleTop from "../../../assets/circles/circleTop.svg";
import circleBottom from "../../../assets/circles/circleBottom.svg";
import AvatarImage from "../../../img/Perfil.png";
import ReactIcon from "../../../assets/icons/React.svg";
import TypeScriptIcon from "../../../assets/icons/Typescript.svg";
import NodeIcon from "../../../assets/icons/Node.svg";

export const Avatar: React.FC = () => {
  return (
    <>
      <Atropos 
      activeOffset={40}
      shadowScale={1.05}
      >
        <div
          className="w-96 h-96 max-[410px]:max-w-xs rounded-full bg-primary-200"
        >
          <div className="flex place-content-center z-auto ">
            <img className="absolute max-w-[14rem]" src={AvatarImage}  data-atropos-offset="-5"/>
            <div
              className={`${styledHead.SubHeadIcons} flex relative top-56 items-center justify-center w-36 h-36 rounded-full bg-primary-200 shadow-md `}
            >
              <img src={ReactIcon} />
            </div>
            <div
              className={`${styledHead.SubHeadIcons} flex relative top-64 left-28 items-center justify-center w-24 h-24 rounded-full bg-primary-200 shadow-md `}
            >
              <img src={TypeScriptIcon} />
            </div>
            <div
              className={`${styledHead.SubHeadIcons} flex relative items-center justify-center w-24 h-24 rounded-full bg-primary-200 shadow-md `}
            >
              <img src={NodeIcon} />
            </div>
            <div className="flex relative bottom-24">
              <img
                className={`${styledHead.SubHeadCircleTop}`}
                src={circleTop}
              />
            </div>
            <div className="flex relative right-80 w-4 h-4 rounded-full bg-slate-400"></div>
            <div className="flex relative top-52 ">
              <img src={circleBottom} />
            </div>
          </div>
        </div>
      </Atropos>
    </>
  );
};
