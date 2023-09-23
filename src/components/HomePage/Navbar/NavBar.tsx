import { useState } from "react";
import {
  IconCodeAsterix,
  IconMenu2,
  IconSquareLetterX,
} from "@tabler/icons-react";
import { Links } from "../../../interfaces";
import { MapMenu } from "./ListNav/MapMenu";
import styled from '../../../Home-layout.module.scss'

const Nav: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full top-0 left-0 font-mono  ">
      <div className="flex justify-center  md:flex py-4 md:px-10 gap-[1rem] md:justify-end  ">
        <div className="grid grid-cols-4 items-center md:hidden fixed text-white text-2xl ">
          <IconCodeAsterix className=" text-danger-50" /> Simon
          <span className="- text-primary-100">Montoya</span>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="flex items-center text-xl text-danger-50 fixed right-8 top-5 cursor-pointer md:hidden  "
        >
          {open ? <IconSquareLetterX /> : <IconMenu2 />}
        </div>

        <ul
          className={` ${styled.navLayout} md:bg-none md:flex md:items-center  md:pb-0 pb-12 fixed md:static z-50 w-full md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-16 " : "top-[-490px]"
          }`}
        >
          <MapMenu MenuItems={Links} />
        </ul>
      </div>
    </div>
  );
};

export default Nav;
