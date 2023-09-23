interface InfoProps {
  icon: React.ReactNode;
  title: string;
  link?: string;
}

export const PersonalInfo = ({ icon, title, link }: InfoProps) => {
  return (
    <>
      <div className="flex flex-col justify-start items-start pl-[1rem] w-[15rem] h-[8rem] md:w-[25rem] md:h-[8rem] rounded-lg bg-primary-300">
        <div className="flex relative top-[3rem] right-[4rem] max-[770px]:top-[4rem] self-end">
          {icon}
        </div>
        <h1 className=" text-white text-xl font-bold">{title}</h1>
        {link && (
          <a
            href={link}
            className="text-danger-50 text-lg underline hover:cursor-pointer"
          >
            Projects
          </a>
        )}
      </div>
    </>
  );
};
