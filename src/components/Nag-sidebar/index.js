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
  return (
    <Container>
      <Row>
        <Col>Navigation SideBar</Col>
        <Col><Link to="/home" className={`list-group-item ${active === 'home'?'active':''}`}>Home</Link> </Col>
        <Col><Link to="/login" className={`list-group-item ${active === 'login'?'active':''}`}>login</Link> </Col>
        <Col><Link to="/profile" className={`list-group-item ${active === 'profile'?'active':''}`}>profile</Link> </Col>
        <Col><Link to="/search" className={`list-group-item ${active === 'search'?'active':''}`}>search</Link> </Col>
      </Row>
    </Container>
      // <div className="list-group">
      //   <a className="list-group-item">Navigation SideBar</a>
      //   <Link to="/home" className={`list-group-item ${active === 'home'?'active':''}`}>
      //     Home
      //   </Link>
      //   <Link to="/login" className={`list-group-item ${active === 'login'?'active':''}`}>
      //     Log in 
      //   </Link>
      //   <Link to="/profile" className={`list-group-item ${active === 'profile'?'active':''}`}>
      //     Profile
      //   </Link>
      //   <Link to="/search" className={`list-group-item ${active === 'search'?'active':''}`}>
      //     Search
      //   </Link>
      // </div>
  );
};
export default NavigationSidebar;