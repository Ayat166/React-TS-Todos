import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 px-6 py-3 shadow-md">
      <ul className="flex items-center text-white font-medium">
        <li>
          <NavLink
            to="/"
          >
            Home
          </NavLink>
        </li>
        <div className="ml-auto flex gap-6">
          <li>
            <NavLink
              to="/register"
            >
              Register
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
            >
              Login
            </NavLink>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
