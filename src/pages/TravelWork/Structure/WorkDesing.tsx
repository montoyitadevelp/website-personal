

interface PropsGit {
  titleGit: string;
  icon: JSX.Element;
  resumeGit: string;
}

export const WorkDesing = ({ titleGit, icon, resumeGit }: PropsGit) => {
  return (
    <>
      <div className="flex flex-row justify-around font-mono p-[5rem]">
        <div className="flex flex-col ">
          <div className="flex flex-col items-center  max-w-xs">
            <div className="flex items-center">
              <h1 className="text-danger-50 text-2xl">{titleGit}</h1>
              {icon}
            </div>
            <p className="text-white text-justify">{resumeGit}</p>
          </div>
        </div>
      </div>
    </>
  );
};
