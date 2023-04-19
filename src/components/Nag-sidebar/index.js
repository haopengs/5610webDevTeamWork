import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";
import 'bootstrap/dist/css/bootstrap.css';

const NavigationSidebar = () => {
  const {pathname} = useLocation();
  const paths = pathname.split('/')
  const active = paths[2];
  const isLoggedIn = false; // Need to change this when user is logged in
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className={`nav-item ${active === 'home'?'active':''}`}>
            <Link className="nav-link" to="/home">Home</Link>
          </li>
          {isLoggedIn ? (
            <li className="nav-item">
              <Link className="nav-link" to="/logout">Log Out</Link>
            </li>
          ) : (
            <li className={`nav-item ${active === 'login'?'active':''}`}>
              <Link className="nav-link" to="/login">Login</Link>
            </li>
          )}
          <li className={`nav-item ${active === 'profile'?'active':''}`}>
            <Link className="nav-link" to="/profile">Profile</Link>
          </li>
          <li className={`nav-item ${active === 'search'?'active':''}`}>
            <Link className="nav-link" to="/search">Search</Link>
          </li>
        </ul>
      </div>
      <i className="fas fa-user"></i> {/*Add this icon to the right of the navigation bar*/}
    </nav>
  );
};
export default NavigationSidebar;
