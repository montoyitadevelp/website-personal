import { Fragment } from "react";
import { Menu } from "../../../../interfaces";

interface Props {
  MenuItems: Menu[];
}

export const MapMenu = ({ MenuItems }: Props) => {
  return (
    <>

      {MenuItems.map((link, index) => (
        <Fragment key={`index-${index}-${link.name}`}>
          <li className="md:ml-8 text-md md:my-0 my-7">
            <a
              href={link.link}
              className="text-white hover:text-primary-100 duration-500"
            >
              {link.name}
            </a>
          </li>
        </Fragment>
      ))}
    </>
  );
};
