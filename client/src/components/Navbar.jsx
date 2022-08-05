import OutsideClickHandler from 'react-outside-click-handler';
import { NavLink, Link } from "react-router-dom"
import { useState } from "react";
import i18n, { t } from 'i18next';

const changeLanguage = (language) => (
  i18n.changeLanguage(language)
);

function LanguageChange() {
  i18n.language === "en" ? 
    changeLanguage("es") : changeLanguage("en")
}

export default function Navbar() {
  const [showAccount, setShowAccount] = useState(false);
  const [showLanguage, setShowLanguage] = useState(false);

  return (
    <nav className="flex bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded mb-6 dark:bg-gray-900">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Link
          to="/"
          className="flex items-center"
        >
          <span className="flex items-center self-center text-xl whitespace-nowrap dark:text-white tracking-widest" style={{ fontFamily: "Roboto" }}>
            <span className="material-symbols-outlined">water_drop</span>&nbsp;Rainmap
          </span>
        </Link>

        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="flex flex-col items-center justify-center p-4 mt-4 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <Path
              path="/"
              name={t("nav.home")}
            />
            <Path
              path="/about"
              name={t("nav.about")}
            />
            <Path
              path="/map"
              name={t("nav.map")}
            />
            <Path
              path="/login"
              name={t("nav.login")}
            />
            <OutsideClickHandler onOutsideClick={() => { setShowAccount(false) }}>
              <div className="relative flex flex-col items-center">
                <span className="material-symbols-outlined cursor-pointer select-none" onClick={() => setShowAccount(!showAccount)}>account_circle</span>
                {showAccount ? <Account /> : null}
              </div>
            </OutsideClickHandler>
            <OutsideClickHandler onOutsideClick={() => { setShowLanguage(false) }}>
              <div className="relative flex flex-col items-center">
                <span
                  className="material-symbols-outlined cursor-pointer select-none"
                  style={{ filter: "invert(25%) sepia(10%) saturate(1382%) hue-rotate(177deg) brightness(99%) contrast(84%)" }}
                  onClick={() => setShowLanguage(!showLanguage)}
                >
                  language
                </span>
                {showLanguage ? <Language /> : null}
              </div>
            </OutsideClickHandler>
          </ul>
        </div>
      </div>
    </nav>
  )
}

const Account = () => (
  <div className="absolute top-10 z-20 flex flex-col w-36 px-6 py-2.5 bg-white rounded border border-gray-200 shadow-md">
    <Link
      to="/account"
      style={{ fontFamily: "Roboto", fontWeight: "400" }}
      className="flex text-center self-center text-gray-700 md:hover:text-gray-900 dark:text-gray-400 md:dark:hover:text-white dark:hover:text-white"
    >
      {t("account.account")}
    </Link>
    <hr className="my-3 border-gray-300" />
    <Link
      to="/upload"
      style={{ fontFamily: "Roboto", fontWeight: "400" }}
      className="flex text-center self-center text-gray-700 md:hover:text-gray-900 dark:text-gray-400 md:dark:hover:text-white dark:hover:text-white"
    >
      {t("account.upload")}
    </Link>
    <hr className="my-3 border-gray-300" />
    <button style={{ fontFamily: "Roboto", fontWeight: "400" }} className="mb-3 text-center text-gray-700 md:hover:text-gray-900 dark:text-gray-400 md:dark:hover:text-white dark:hover:text-white">
      {t("account.sign-out")}
    </button>
  </div>
);

const Path = (props) => (
  <li>
    <NavLink
      to={props.path}
      style={{ fontFamily: "Roboto", fontWeight: "400", display: "flex", flexDirection: "column" }}
      className={({ isActive }) =>
        (isActive ? "text-blue-700" : "text-gray-700 md:hover:text-gray-900 dark:text-gray-400 md:dark:hover:text-white dark:hover:text-white")
      }
    >
      {props.name}
    </NavLink>
  </li>
);

const Language = () => (
  <div className="absolute top-10 z-20 gap-4 flex flex-col w-28 px-6 pt-2.5 pb-6 bg-white rounded border border-gray-200 shadow-md">
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
    onClickCapture={() => window.location.reload(false)}
    style={{ fontFamily: "Roboto", fontWeight: "400" }} 
    className="text-gray-700 md:hover:text-gray-900 dark:text-gray-400 md:dark:hover:text-white dark:hover:text-white"
    disabled={props.disabled}
  >
    {props.text}
  </button>
)