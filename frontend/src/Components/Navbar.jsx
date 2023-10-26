import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <ul className="flex pr-6 font-semibold text-white text-xl py-6 bg-blue-900">
        <li>
          <Link to={"/signup"}>SignUp</Link>
        </li>
        <li>
          <Link to={"/login"} className="ml-3">
            Login
          </Link>
        </li>
        <li>
          <Link to={"/"} className="ml-3">
            Products
          </Link>
        </li>
        <li>
          <Link to={"/addproduct"} className="ml-3">
            Addproduct
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
