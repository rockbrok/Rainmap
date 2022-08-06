import { t } from 'i18next';

export default function Footer() {
  return (
    <footer className="flex mt-auto p-4 md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          ©2022 Rainmap.&nbsp;
          {t("footer")}&nbsp;&nbsp;
          <span className="material-icons" style={{fontSize: "12px"}}>favorite</span>
        </span>
    </footer>
  )
}