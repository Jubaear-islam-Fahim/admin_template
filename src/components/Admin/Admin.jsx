import React from 'react';

import { Container, Row, Col, Nav, Navbar, Image, Form, FormControl, Button, Dropdown, NavDropdown } from 'react-bootstrap';
import './admin.css';

import { FaSearch, FaBell, FaRegEnvelope, FaLightbulb, FaSignal, FaComments } from "react-icons/fa";

import Logos from '../../assets/img/logo3.png';
import Profile from '../../assets/img/profile.jpg';

function Admin() {
  return (
    <>

        <div className="header-top">
            <Container>
                <Row lg="12">
                    <div className="header-content">
                        <div className="header-logo align-self-center">
                            <Navbar.Brand href="#home"><Image src={Logos} height="50"/></Navbar.Brand>
                        </div>
                        <Form className="d-flex align-self-center header-form">
                            <FormControl type="search" placeholder="Search" className="header-input" ria-label="Search" />
                            <Button variant="search-i"><FaSearch/></Button>
                        </Form>
                        <div className="header-profile align-self-center">
                            <div href="#" className="profile-img d-flex gap-2">
                                <div className="title align-self-center">Hello, Raisul</div>
                                <Image src={Profile} roundedCircle width="50"/>
                            </div>
                        </div>
                    </div>
                    
                </Row>
            </Container>
        </div>

        <Navbar bg="light" expand="lg" sticky="top"> 
            <Container>
                {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#">Dashboard</Nav.Link> 
                        <NavDropdown title="Widgets" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#">Widgets</NavDropdown.Item>
                            <NavDropdown.Item href="#">Widgets action</NavDropdown.Item> 
                        </NavDropdown>
                        <Nav.Link href="#">Forms</Nav.Link>
                        <Nav.Link href="#">Gallery</Nav.Link>
                    </Nav>
                </Navbar.Collapse>

                <div className="notification-right d-flex gap-2">
                    <Dropdown className="nav-notification">
                        <Dropdown.Toggle variant="nots-ss" id="dropdown-basic">
                            <FaBell/>
                            <div className="not-number">1 <div className="waves"></div></div>
                        </Dropdown.Toggle> 
                        <Dropdown.Menu align="end">
                            .
                        </Dropdown.Menu>
                    </Dropdown> 
                    <Dropdown className="nav-notification ">
                        <Dropdown.Toggle variant="nots-ss " id="dropdown-basic2">
                            <FaRegEnvelope/>
                            <div className="not-number ">3 <div className="waves"></div></div>
                        </Dropdown.Toggle> 
                        <Dropdown.Menu align="end">
                            <div className="notif-box">
                                <div className="notif-item">
                                    <div className="notif-body">
                                        <div className="title d-flex">
                                            <div className="text-name">Mehedi Hasan</div>
                                            <div className="text-muted">2 hours ago</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Dropdown.Menu>
                    </Dropdown> 
                </div>
 
                

            </Container>
        </Navbar>

        <div className="fact-area">
            <Container>
                <Row >
                    <Col lg={3} md={6} xs={6}>
                        <div className="fact-item d-flex gap-2">
                            <div className="fact-icon align-self-center">
                                <FaSignal/>
                            </div>
                            <div className="fact-text ms-auto">
                                <h3>62,236</h3>
                                <h6>Site View</h6>
                            </div>
                        </div>
                    </Col>
                    <Col lg={3} md={6} xs={6}>
                        <div className="fact-item d-flex gap-2">
                            <div className="fact-icon align-self-center">
                                <FaLightbulb/>
                            </div>
                            <div className="fact-text ms-auto">
                                <h3>62,236</h3>
                                <h6>Site View</h6>
                            </div>
                        </div>
                    </Col>
                    <Col lg={3} md={6} xs={6}>
                        <div className="fact-item d-flex gap-2">
                            <div className="fact-icon align-self-center">
                                <FaLightbulb/>
                            </div>
                            <div className="fact-text ms-auto">
                                <h3>62,236</h3>
                                <h6>Site View</h6>
                            </div>
                        </div>
                    </Col>
                    <Col lg={3} md={6} xs={6}>
                        <div className="fact-item d-flex gap-2">
                            <div className="fact-icon align-self-center">
                                <FaComments/>
                            </div>
                            <div className="fact-text ms-auto">
                                <h3>62,236</h3>
                                <h6>Site View</h6>
                            </div>
                        </div>
                    </Col>
                    
                     
                </Row>
            </Container>
        </div>
    
        
    </>
  );
}

export default Admin;
