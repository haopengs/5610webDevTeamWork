import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";

const NavigationSidebar = () => {
  const {pathname} = useLocation();
  const paths = pathname.split('/')
  const active = paths[2];
  return (
      <div className="list-group">
        <a className="list-group-item">Navigation SideBar</a>
        <Link to="/home" className={`list-group-item ${active === 'home'?'active':''}`}>
          Home
        </Link>
        <Link to="/login" className={`list-group-item ${active === 'login'?'active':''}`}>
          Log in 
        </Link>
        <Link to="/profile" className={`list-group-item ${active === 'profile'?'active':''}`}>
          Profile
        </Link>
        <Link to="/search" className={`list-group-item ${active === 'search'?'active':''}`}>
          Search
        </Link>
      </div>
  );
};
export default NavigationSidebar;