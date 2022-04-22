import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/solid";
import { LogoutIcon, UserCircleIcon } from "@heroicons/react/outline";
import { Menu } from "@headlessui/react";
import getUserId from "../utils/getUserId";
import mango from "../assets/mango.png";
import profilePlaceholder from "../assets/profile-placeholder.png";
import onLogout from "../utils/onLogout";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NavBar() {
  const location = useLocation();
  const [uid, setUid] = useState(null);

  // get supertokens user ID if logged in on page load
  useEffect(() => {
    getUserId().then((id) => {
      setUid(id);
    });
  }, [location]);

  const activeClasses = "text-teal-500 font-bold underline underline-offset-8 decoration-4";
  const inactiveClasses = "text-gray-500 hover:text-gray-700 hover:underline hover:underline-offset-8 hover:decoration-4";

  return (
    <div className="flex justify-between mx-auto max-w-screen-xl items-center h-36 px-20 text-xl bg-transparent w-full">
      {/* Scurvy Mango logo */}
      <Link to="/">
        <img src={mango} alt="mango" className="h-16 w-16" />
      </Link>

      {/* core navigation */}
      <div className="flex justify-center space-x-10">
        <NavLink to="/" className={({ isActive }) => (isActive ? activeClasses : inactiveClasses)}>
          Home
        </NavLink>
        <NavLink to="/companies" className={({ isActive }) => (isActive ? activeClasses : inactiveClasses)}>
          Companies
        </NavLink>
        <NavLink to="/people" className={({ isActive }) => (isActive ? activeClasses : inactiveClasses)}>
          People
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? activeClasses : inactiveClasses)}>
          About
        </NavLink>
      </div>

      {/* user profile image OR login button */}
      {uid != null ? (
        <Menu as="div" className="relative inline-block text-left">
          <Menu.Button className="flex flex-col w-full group">
            <img src={profilePlaceholder} alt="profile" className="h-16 w-16 rounded-full group-hover:border-4 border-gray-500 duration-100" />
            <div className="flex justify-center items-center text-gray-500">
              <p className="text-center text-base font-semibold">me</p>
              <ChevronDownIcon className="h-5 w-5 -mb-1" />
            </div>
          </Menu.Button>
          <Menu.Items className="absolute right-[-75%] mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
            <div className="py-1">
              <Menu.Item>
                {({ active }) => (
                  <a href="/profile" className={classNames(active ? "bg-gray-100 text-gray-900" : "text-gray-700", "block px-4 py-2 text-sm")}>
                    <div className="flex items-center">
                      <UserCircleIcon className="h-5 w-5 mr-2" />
                      View Profile
                    </div>
                  </a>
                )}
              </Menu.Item>
            </div>
            <div className="py-1">
              <Menu.Item>
                {({ active }) => (
                  <button onClick={onLogout} className={classNames(active ? "bg-gray-100 text-gray-900" : "text-gray-700", "w-full block px-4 py-2 text-sm")}>
                    <div className="flex items-center">
                      <LogoutIcon className="h-5 w-5 mr-2" />
                      Sign Out
                    </div>
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Menu>
      ) : (
        <Link to="/auth">
          <div className="flex justify-center items-center text-gray-600 rounded-full bg-gray-200 py-2 px-4 hover:bg-gray-600 hover:text-gray-300 duration-200">
            <p className="text-center text-base font-semibold">Sign in</p>
            <ChevronRightIcon className="h-5 w-5 -mb-1 -mr-1" />
          </div>
        </Link>
      )}
    </div>
  );
}
