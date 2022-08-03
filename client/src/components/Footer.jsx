import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <footer class="flex mt-auto p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
        <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">©2022 Rainmap
        </span>
        <ul class="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              <Link
                to="/about"
                className="mr-4 hover:underline md:mr-6"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                  to="/contact"
                  className="mr-4 hover:underline md:mr-6"
              >
                Contact
              </Link>
            </li>
        </ul>
    </footer>
  )
}