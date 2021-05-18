import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Form, FormControl, Badge, Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";

const Header = () => {

    const cart = useSelector(state => state.cart);
    const { added, cartItems } = cart;

    return (
        <Navbar bg="dark" variant="dark" fixed="top">
            <Link to="/">
                <Navbar.Brand>Flipkart</Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <NavDropdown title="Products" id="collasible-nav-dropdown">
                        <NavDropdown.Item >
                            <Link to="/products?category=grocery">
                                Grocery
                            </Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                            <Link to="/products?category=laptop">
                                Laptops
                            </Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item >
                            <Link to="/products?category=mobile">
                                Mobiles
                            </Link>
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    </Form>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/cart">
                                <i className="bi bi-cart-fill">
                                </i> <sup><Badge pill variant="success" style={{ fontSize: 14 }}>
                                    {cartItems ? cartItems.length : 0}
                                    {added && <Spinner animation="border" size="sm" />}
                                </Badge></sup>
                            </NavLink>
                        </li>
                    </ul>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );

}

export default Header;