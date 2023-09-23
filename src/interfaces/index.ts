export interface Menu {
  name: string;
  link: string;
}

export const Links: Menu[] = [
  { name: "Home", link: "/" },
  { name: "Work travel", link: "/work" },
  { name: "Contact", link: "/contact" },
];

export type SlideInfo = {
  [key: string]: {
    [key: string]: React.ReactElement;
  };
};

export interface ProyectInfo {
  [projectName: string]: {
    icons: { [iconName: string]: JSX.Element };
    img: JSX.Element;
    link: string;
  };
}
export interface TitleInfo {
  title: any;
  icon: JSX.Element
}

export interface TitleAdd {
  titleMain: TitleInfo;
  titleDev: TitleInfo;
}

export interface WorkInfo {
  title: string;
  icons: JSX.Element;
  text: string;
}

export interface WorkHistory {
 
  main: {
    commit: WorkInfo;
    branch: WorkInfo;
  };
  dev: {
    merge: WorkInfo;
    fork: WorkInfo;
    pull: WorkInfo;
  };
}

export type SlideState = {
  slidePrev: () => void;
  slideNext: () => void;
};
