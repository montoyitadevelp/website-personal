import { Avatar } from "./HomePage/Avatar/Avatar";
import { Icons } from "./Carrusel/Icons";
import { IconCode } from "@tabler/icons-react";
import { ListProyects } from "./HomePage/Projects/ListProyects";
import { personalInfoComponents, resume } from "../interfaces/Objects";
import "swiper/css";

export const Head: React.FC = () => {
  return (
    <>
      <span className="font-mono ">
        <section className=" pt-10 flex flex-col items-center top-[5rem] z-10  ">
          <div className="flex max-[980px]:flex-wrap items-center justify-center gap-[10rem]   ">
            <div className="flex flex-col h-full  ">
              <h1 className="flex justify-center md:justify-start  max-w-xl text-lg md:text-3xl text-white">
                <span>Hello, i am</span>
                <br />
              </h1>
              <section className="flex flex-col items-center md:items-start max-w-xl mb-10 ">
                <p className="text-2xl md:text-7xl text-danger-50">
                  Simón <br />
                  Montoya
                </p>
                <p className="pt-10 text-xl md:text-5xl text-white font-bold ">
                  Front-End Developer
                </p>
                <div className="flex flex-col md:flex-row text-white items-center gap-[1rem] pt-[1rem]">
                  <h1 className="text-2xl md:text-6xl text-primary-300">1</h1>
                  <p className="text-lg md:text-xl text-primary-100 uppercase">
                    Year of <br />
                    experiencie
                  </p>
                  <h1 className="text-2xl md:text-6xl text-primary-300">4</h1>
                  <p className="text-lg md:text-xl text-primary-100 uppercase">
                    Proyects completed
                  </p>
                </div>

                <div className="flex flex-col pt-[1rem] animate-bounce ">
                  <span className="flex shadow-2xl text-xs md:text-xl text-danger-50   ">
                    "Quality is more relevant than quantity"
                  </span>
                </div>
              </section>
            </div>

            <Avatar />
          </div>
        </section>
        <section className="flex flex-col items-center pt-[5rem] pb-[5rem] p-[1rem] ">
          <div className="flex flex-row max-[1000px]:flex-col items-center justify-center pt-[3rem] pb-[1rem] gap-[9rem] ">
            <div className="flex flex-col items-start  md:text-justify">
              <div className="flex self-center md:self-start items-center">
                <h1 className="text-danger-50 text-4xl">aboutMe</h1>
                <IconCode className="text-white" />
              </div>
              <section className=" max-w-[15rem] md:max-w-xl  ">
                <p className="text-white text-lg">{resume}</p>
              </section>
            </div>
            <div className="flex flex-col  space-y-5 ">
              {personalInfoComponents}
            </div>
          </div>
        </section>
        <section className="bg-danger-200 ">
          <div className="flex items-center  p-[2rem] max-[340px]:justify-center ">
            <h1 className="text-danger-50 text-3xl md:flex ">Skills</h1>
            <IconCode className="text-white" />
          </div>
          <Icons />
        </section>
        <section>
          <div className="flex items-center p-[2rem] max-[340px]:justify-center">
            <h1 className="text-danger-50 text-3xl md:flex">Projects</h1>
            <IconCode className="text-white" />
          </div>
        </section>

        <ListProyects />
      </span>
    </>
  );
};
