import { SlideInfo } from "../../../interfaces";

const InfoSection = ({
  title,
  items,
}: {
  title: string;
  items: React.ReactElement[];
}) => {
  return (
    <>
      <div className="flex justify-center  text-xl text-white">
        <div className="flex-col">
          <h1 className="text-center">{title}</h1>
          <div className="flex gap-[1rem] justify-center top-[1rem]">
            {items.map((item, index) => (
              <span key={index}>{item}</span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export const Info = ({ languages }: SlideInfo) => {
  const languageItems = Object.values(languages);

  return (
    <>
      <InfoSection title="Programming Languages" items={languageItems} />
    </>
  );
};

export const Front = ({ frontend }: SlideInfo) => {
  const frontendItems = Object.values(frontend);

  return (
    <>
      <InfoSection title="Frontend Development" items={frontendItems} />
    </>
  );
};

export const Database = ({ databases }: SlideInfo) => {
  const databaseItems = Object.values(databases);

  return (
    <>
      <InfoSection title="Databases & Cloud Hosting" items={databaseItems} />
    </>
  );
};

export const Tool = ({ tools }: SlideInfo) => {
  const toolsItems = Object.values(tools);

  return (
    <>
      <InfoSection title="Tools & Software" items={toolsItems} />
    </>
  );
};
