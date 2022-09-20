import { t } from "i18next";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="hidden md:flex flex-row text-sm text-gray-500 tracking-wide p-4 flex items-center justify-between md:p-8 dark:bg-gray-800">
      <span className="hidden lg:flex flex-row ml-[30px]">©2022 Rainmap</span>
      <span className="flex lg:hidden"></span>
      <div className="flex flex-row gap-6">
        <Path path="/upload" name={t("footer.upload")} />
        <Path path="/about" name={t("footer.about")} />
      </div>
    </footer>
  );
}

const Path = (props) => (
  <NavLink
    to={props.path}
    className={({ isActive }) =>
      isActive
        ? "text-gray-400 cursor-default"
        : "text-gray-500 hover:text-gray-600"
    }
  >
    {props.name}
  </NavLink>
);
