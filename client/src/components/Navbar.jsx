import { Link } from "react-router-dom"
import { Dropdown } from 'flowbite-react';

export default function Navbar() {
  return (
    <nav className="flex bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded mb-6 dark:bg-gray-900">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Link
          to="/"
          className="flex items-center"
        >
          <span className="flex items-center self-center text-xl whitespace-nowrap dark:text-white tracking-widest" style={{fontFamily: "Roboto"}}>
          <span className="material-symbols-outlined">water_drop</span>&nbsp;Rainmap
          </span>
        </Link>

        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="flex flex-col items-center p-4 mt-4 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <NavLink
              path="/"
              name="About"
            />
            <NavLink
              path="/map"
              name="Map"
            />
            <NavLink
              path="/login"
              name="Login / Register"
            />
            <Language />
          </ul>
        </div>
      </div>
    </nav>
  )
}

const NavLink = (props) => (
  <li>
    <Link 
      to={props.path}
      style={{fontFamily: "Roboto", fontWeight: "400"}}
      className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
    >
      {props.name}
    </Link>
  </li>
)

const Language = () => (
  <>
  <Dropdown
    label={
      <span 
        class="material-symbols-outlined" 
        style={{filter: "invert(25%) sepia(10%) saturate(1382%) hue-rotate(177deg) brightness(99%) contrast(84%)"}}
      >
        language
      </span>
    }
    inline={true}
  >
    <Dropdown.Item>
      Español
    </Dropdown.Item>
    <Dropdown.Item>
      русский
    </Dropdown.Item>
    <Dropdown.Item>
      Português
    </Dropdown.Item>
    <Dropdown.Item>
      English
    </Dropdown.Item>
  </Dropdown>
  </>
)