import { Link } from "react-router-dom";
const NavLink = ({ children, to }) => {
  return (
    <Link
      to={to}
      className="mt-2 lg:mt-0 lg:mx-4 hover:text-gray-800 dark:hover:text-gray-200"
    >
      {children}
    </Link>
  );
};

export default NavLink;
