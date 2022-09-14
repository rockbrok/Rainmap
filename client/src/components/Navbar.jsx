import OutsideClickHandler from "react-outside-click-handler";
import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import i18n, { t } from "i18next";

const changeLanguage = (language) => i18n.changeLanguage(language);

export default function Navbar() {
  const [showAccount, setShowAccount] = useState(false);
  const [showLanguage, setShowLanguage] = useState(false);

  return (
    <nav className="flex w-full px-2 py-2.5 mb-6 dark:bg-gray-900">
      <div className="container flex flex-row flex-wrap justify-between items-center mx-auto">
        <Link to="/" className="flex items-center">
          <span
            className="flex items-center self-center text-xl whitespace-nowrap dark:text-white tracking-widest"
            style={{ fontFamily: "Roboto" }}
          >
            <span className="material-symbols-outlined">water_drop</span>
            &nbsp;Rainmap
          </span>
        </Link>

        <ul className="flex items-center justify-center p-4 flex-row space-x-8 md:text-sm md:font-medium">
          <Link to="/upload" className="h-6 w-6">
            <span
              class="material-symbols-outlined cursor-pointer select-none"
              style={{
                filter:
                  "invert(25%) sepia(10%) saturate(1382%) hue-rotate(177deg) brightness(99%) contrast(84%)",
              }}
            >
              file_upload
            </span>
          </Link>
          {/* <Dropdown
            setShow={setShowAccount}
            show={showAccount}
            icon="account_circle"
            component={<Account />}
          /> */}
          <Dropdown
            setShow={setShowLanguage}
            show={showLanguage}
            icon="language"
            component={<Languages />}
          />
        </ul>
      </div>
    </nav>
  );
}

const Dropdown = (props) => (
  <OutsideClickHandler
    onOutsideClick={() => {
      props.setShow(false);
    }}
  >
    <div className="relative flex flex-col items-center">
      <span
        className="material-symbols-outlined cursor-pointer select-none"
        id="user"
        style={{
          filter:
            "invert(25%) sepia(10%) saturate(1382%) hue-rotate(177deg) brightness(99%) contrast(84%)",
        }}
        onClick={() => props.setShow(!props.show)}
      >
        {props.icon}
      </span>
      {props.show ? props.component : null}
    </div>
  </OutsideClickHandler>
);

const Account = () => (
  <div className="absolute top-10 z-30 flex flex-col w-36 px-6 py-2.5 bg-white rounded border border-gray-200 shadow-md">
    <Path path="/login" name={t("nav.login")} />
    <hr className="my-3 border-gray-300" />
    <Path path="/account" name={t("account.account")} />
    <hr className="my-3 border-gray-300" />
    <Path path="/upload" name={t("account.upload")} />
    <div className="mb-3" />
    <hr className="my-3 border-gray-300" />
    <button
      style={{ fontFamily: "Roboto", fontWeight: "400" }}
      className="mb-3 text-center text-gray-700 md:hover:text-gray-900 dark:text-gray-400 md:dark:hover:text-white dark:hover:text-white"
    >
      {t("account.sign-out")}
    </button>
  </div>
);

const Path = (props) => (
  <li>
    <NavLink
      to={props.path}
      style={{
        fontFamily: "Roboto",
        fontWeight: "400",
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
      }}
      className={({ isActive }) =>
        isActive
          ? "text-gray-400 cursor-default"
          : "text-gray-700 md:hover:text-gray-900 dark:text-gray-400 md:dark:hover:text-white dark:hover:text-white"
      }
    >
      {props.name}
    </NavLink>
  </li>
);

const Languages = () => (
  <div className="absolute top-10 z-30 gap-4 flex flex-col w-28 px-6 pt-2.5 pb-6 bg-white rounded border border-gray-200 shadow-md">
    <Button
      text="Español"
      click={() => changeLanguage("es")}
      disabled={i18n.language === "es" ? true : ""}
    />
    <Button
      text="русский"
      click={() => changeLanguage("ru")}
      disabled={i18n.language === "ru" ? true : ""}
    />
    <Button
      text="Português"
      click={() => changeLanguage("pt")}
      disabled={i18n.language === "pt" ? true : ""}
    />
    <Button
      text="Français"
      click={() => changeLanguage("fr")}
      disabled={i18n.language === "fr" ? true : ""}
    />
    <Button
      text="English"
      click={() => changeLanguage("en")}
      disabled={i18n.language === "en" ? true : ""}
    />
  </div>
);

const Button = (props) => (
  <button
    onClick={props.click}
    id="language-btn"
    onClickCapture={() => window.location.reload(false)}
    style={{ fontFamily: "Roboto", fontWeight: "400" }}
    className="text-gray-700 md:hover:text-gray-900 dark:text-gray-400 md:dark:hover:text-white dark:hover:text-white"
    disabled={props.disabled}
  >
    {props.text}
  </button>
);
