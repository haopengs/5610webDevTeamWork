import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const NavigationSidebar = () => {
  const {pathname} = useLocation();
  const paths = pathname.split('/')
  const active = paths[2];
  const isLoggedIn = false; // Need to change this when user is logged in
  return (
    <Container>
      <Row>
        <Col>Navigation SideBar</Col>
        <Col><Link to="/home" className={`list-group-item ${active === 'home'?'active':''}`}>Home</Link> </Col>
        {isLoggedIn ? (
          <Col><Link to="/logout" className={`list-group-item`}>Log Out</Link></Col>
        ) : (
          <Col><Link to="/login" className={`list-group-item ${active === 'login'?'active':''}`}>Login</Link> </Col>
        )}
        <Col><Link to="/profile" className={`list-group-item ${active === 'profile'?'active':''}`}>Profile</Link> </Col>
        <Col><Link to="/search" className={`list-group-item ${active === 'search'?'active':''}`}>Search</Link> </Col>
      </Row>
    </Container>
  );
};
export default NavigationSidebar;
