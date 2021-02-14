//React specific imports
import React from 'react'

//React bootstrap router
import { LinkContainer } from "react-router-bootstrap"

//Bootstrap imports
import {Navbar, Nav, Container, Row, } from "react-bootstrap"

const Header = () => {
    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand>Something Shop</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                        <LinkContainer to="/cart">
                            <Nav.Link ><i className="fas fa-shopping-cart"></i> Cart</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to = "/login">
                            <Nav.Link><i className="fas fa-user"></i> Login</Nav.Link>
                        </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
