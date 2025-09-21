import { NavLink } from "react-router-dom";
import Button from "./ui/Button";
import toast from "react-hot-toast";

const Navbar = () => {
  const userData = JSON.parse(localStorage.getItem("userData") || "{}");
  const handleLogout = () => {
    localStorage.removeItem("userData");
    toast.success("Logout successful");
    setTimeout(() => {
      location.replace("/login");
    }, 2000);
  }
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
          {userData?.jwt ? (
            <div className="flex items-center gap-6">
            <p>Welcome {userData?.user?.username}</p>
            <Button title="Logout" onClick={handleLogout} />
            </div>
          ) : (
            <>
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
            </>
          )}</div>

      </ul>
    </nav>
  );
};

export default Navbar;
