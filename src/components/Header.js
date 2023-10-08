import React, { useEffect } from "react";
import {
    Container,
    Form,
    FormControl,
    Nav,
    Navbar,
    NavDropdown,
  } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {} from "react-router-dom";
import { logout } from "../actions/userActions";



  function Header({ setSearch }) {
    const dispatch = useDispatch();
  
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;
  
    const logoutHandler = () => {
      dispatch(logout());
    };
  
    useEffect(() => {}, [userInfo]);
  
    return (
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/layout" className="gradient__bg"><strong>Creative Power Organisation</strong></Navbar.Brand>
          <Navbar.Brand href="/layout"><i className="fa-solid fa-house-user"></i></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="m-auto">
              {userInfo && (
                <Form inline>
                  <FormControl
                    type="text"
                    placeholder="Search"
                    className="mr-sm-2"
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </Form>
              )}
            </Nav>
            <Nav>
                  <Nav.Link href="/insights">
                    <strong>Insight</strong>
                  </Nav.Link>
                  <Nav.Link href="/talks">
                    <strong>Talks</strong>
                  </Nav.Link>
                  <Nav.Link href="/payment">
                    <strong>Donate</strong>
                  </Nav.Link>
                  <Nav.Link href="/contact">
                    <strong>Contacts</strong>
                  </Nav.Link>
                  <Nav.Link href="/stories">
                    <strong>Stories</strong>
                  </Nav.Link>
                  <Nav.Link href="/page">
                  </Nav.Link>
                  {userInfo ? (
                <>
                  <Nav.Link href="/mynotes"></Nav.Link>
                 
                  <NavDropdown
                    title={`${userInfo.name}`}
                    id="collasible-nav-dropdown"
                  >
                    <NavDropdown.Item href="/profile">
                      My Profile
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/members">
                      All Members
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/covid">
                      COVID-19 Response
                    </NavDropdown.Item>
  
                    <NavDropdown.Divider />
                    <NavDropdown.Item  onClick={logoutHandler}
                    >
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                </>
              ) : (
                <Nav.Link href="/">Login</Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
  
  export default Header;