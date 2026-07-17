import { useState } from 'react';
import { NavLink } from 'react-router';
import useAuth from '../hooks/useAuth';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, signOutUser } = useAuth();

  const handleSignOut = () => {
    try {
      signOutUser();
    } catch (error) {
      console.log(error);
    }
  };

  const links = (
    <ul className="flex flex-col gap-4 sm:flex-row sm:items-center">
      <li>
        <NavLink
          to="/"
          className="my-2 text-gray-300 transition-colors duration-300 transform  hover:text-blue-500  md:mx-4 md:my-0"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/register"
          className="my-2 text-gray-300 transition-colors duration-300 transform  hover:text-blue-500  md:mx-4 md:my-0"
        >
          Register
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/signin"
          className="my-2 text-gray-300 transition-colors duration-300 transform  hover:text-blue-500  md:mx-4 md:my-0"
        >
          Signin
        </NavLink>
      </li>
      <li>
        <button
          onClick={handleSignOut}
          className="my-2 text-gray-300 transition-colors duration-300 transform  hover:text-blue-500 md:mx-4 md:my-0"
        >
          Signout
        </button>
      </li>
    </ul>
  );
  return (
    <nav className="relative shadow bg-gray-800">
      <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
        <div className="flex items-center justify-between">
          <a href="#">
            <img
              className="w-auto h-6 sm:h-7"
              src="https://merakiui.com/images/full-logo.svg"
              alt=""
            />
          </a>
          <span className="text-gray-300">{user?.displayName}</span>

          <div className="flex sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-gray-500 hover:text-gray-600focus:outline-none focus:text-gray-600 "
              aria-label="toggle menu"
            >
              {!isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>

        <div
          className={`
    ${isOpen ? 'block' : 'hidden'}
   mt-4 sm:block sm:mt-0
  `}
        >
          {links}
        </div>
      </div>
    </nav>
  );
};

export default Header;
