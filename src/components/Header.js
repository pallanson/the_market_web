import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar} from "react-bootstrap";
import '../index.css';
import '../containers/App/App.css';
import Logo from '../img/vector_logo.svg';

export default ({isAuthed = false, currentUser = {}, cartItems = 0, isVendor = false}) => (
    <div className="container">
        <Navbar sticky="top" className="navbar-dark">
            <Link className="navbar-brand" to="/"><img alt="Logo"
                                                                src={Logo}/></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive"
                    aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Home
                            <span className="sr-only">(current)</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/contact">Contact</Link>
                    </li>
                    {
                        isAuthed ? (
                            <React.Fragment>
                                <li>
                                    <Link className="nav-link" to="/vendor">Vendors</Link>
                                </li>
                                <li>
                                    <Link className="nav-link" to="/account">Account</Link>
                                </li>
                                <li>
                                    <Link className="nav-link" to="/cart">Cart{cartItems > 0 ? ` (${cartItems})` : null}</Link>
                                </li>
                                <li>
                                    <Link className="nav-link" to="/logout">Logout</Link>
                                </li>
                            </React.Fragment>
                        ) : (
                            <React.Fragment>
                                <li>
                                    <Link className="nav-link" to="/login">Login</Link>
                                </li>
                                <li>
                                    <Link className="nav-link" to="/register">Register</Link>
                                </li>
                            </React.Fragment>
                        )
                    }
                </ul>
            </div>
        </Navbar>
    </div>
)