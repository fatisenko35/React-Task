import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { BiSearch } from "react-icons/bi";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
const NavbarComponent = () => {
  const postDetail = useSelector((state) => state.postReducer.postDetail);
  const dispatch = useDispatch()
  let navigate = useNavigate();
  const handleNavigate = (item) => {
   if ( postDetail){
    navigate('/details/' + postDetail?.id, { state :{ item}})
   }
  }
  return (
    <Navbar className="border" expand="lg">
      <Container>
        <Navbar.Brand>
          <img
            src="https://eatzy.co.uk/wp-content/uploads/2021/09/EATZY-LOGO-FINAL.png"
            width="200"
            height="70"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <NavLink className="nav-link link-secondary" to="/">Home</NavLink>
            <Nav.Link>About Us</Nav.Link>
            <Nav.Link className="nav-link link-secondary" onClick = {() => handleNavigate(postDetail)}>Pages</Nav.Link>
            <NavLink className="nav-link link-secondary" to='/list'>Portfolio</NavLink>
            <Nav.Link>Blog</Nav.Link>
            <Nav.Link>Contact</Nav.Link>
            <Nav.Link><BiSearch /></Nav.Link>
          </Nav>
        </Navbar.Collapse>

      </Container>

    </Navbar>
  )
}

export default NavbarComponent