import React from "react";
import { useDispatch } from "react-redux";
import { setUserName, setIsLoggedIn } from "../redux/actions/userActions";
import { Link, NavLink } from "react-router-dom";

const Navbar = ({}) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setUserName(""));
    dispatch(setIsLoggedIn(false));
  };

  return (
    <>
      <div className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="nav-link active" to="/">
          Home
        </Link>
        <Link className="nav-link active" to="/listings">
          Listings
        </Link>
        <Link className="nav-link active" to="/authenticate">
          Login
        </Link>
        <div>
          <button className="btn btn-secondary btn-sm" onClick={handleClick}>
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
