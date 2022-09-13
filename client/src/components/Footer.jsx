import { t } from "i18next";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="flex flex-row text-sm text-gray-500 tracking-wide sm:text-center dark:text-gray-400 p-4 md:flex md:items-center md:justify-between md:p-8 mx-8 dark:bg-gray-800">
      <span className="flex flex-row">©2022 Rainmap</span>
      <div className="flex flex-row gap-6 mr-2">
        <Path path="/about" name={t("nav.about")} />
        {/* <Path
          path="/contact"
          name="Contact"
        /> */}
      </div>
    </footer>
  );
}

const Path = (props) => (
  <NavLink
    to={props.path}
    className={({ isActive }) =>
      isActive ? "text-gray-400 cursor-default" : ""
    }
  >
    {props.name}
  </NavLink>
);
