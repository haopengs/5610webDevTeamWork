import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { logoutThunk } from "../../services/auth/auth-thunks";
import "bootstrap/dist/css/bootstrap.css";

const NavigationSidebar = () => {
  const { pathname } = useLocation();
  const paths = pathname.split("/");
  const active = paths[2];
  const { currentAccount } = useSelector((state) => state.accounts);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await dispatch(logoutThunk());
    navigate("/login");
    window.location.reload();
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className={`nav-item ${active === "home" ? "active" : ""}`}>
            <Link className="nav-link" to="/home">
              Home
            </Link>
          </li>
          {currentAccount ? (
            <li className="nav-item">
              <Link className="nav-link" onClick={handleLogout}>
                Log Out
              </Link>
            </li>
          ) : (
            <li className={`nav-item ${active === "login" ? "active" : ""}`}>
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
          )}
          <li className={`nav-item ${active === "profile" ? "active" : ""}`}>
            <Link className="nav-link" to="/profile">
              Profile
            </Link>
          </li>
          <li className={`nav-item ${active === "search" ? "active" : ""}`}>
            <Link className="nav-link" to="/search">
              Search
            </Link>
          </li>
          <li className={`nav-item ${active === "explore" ? "active" : ""}`}>
            <Link className="nav-link" to="/explore">
              Explore
            </Link>
          </li>
        </ul>
      </div>
      <i className="fas fa-user"></i>{" "}
    </nav>
  );
};
export default NavigationSidebar;
