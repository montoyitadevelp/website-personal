import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconCodeAsterix,
} from "@tabler/icons-react";

export const Footer = () => {
  let currentYear = new Date().getFullYear();
  return (
    <>
      <div className="font-mono flex justify-between p-[1rem] bg-danger-200 max-[650px]:flex-wrap max-[420px]:justify-center ">
        <div className="flex flex-row items-center gap-[1rem] text-white text-2xl ">
          <IconCodeAsterix className=" text-danger-50" /> Simon
          <span className="- text-primary-100">Montoya</span>
        </div>
        <div className="flex justify-end  text-primary-400">
          Website Personal {currentYear} ©
        </div>
        <div className="flex justify-end gap-[3rem] text-primary-400 ">
          <a href="https://www.linkedin.com/in/sim%C3%B3n-restrepo-montoya-071244249/">
            <IconBrandLinkedin className="hover:cursor-pointer" />
          </a>
          <a href="https://www.instagram.com/montoyitadev/">
            <IconBrandInstagram className="hover:cursor-pointer" />
          </a>
          <a href="https://github.com/montoyitadevelp">
            <IconBrandGithub className="hover:cursor-pointer" />
          </a>
        </div>
      </div>
    </>
  );
};
