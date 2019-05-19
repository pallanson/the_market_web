import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar} from "react-bootstrap";
import '../index.css';
import '../App.css';
import Logo from '../img/vector_logo.svg';

const Header = () => (
        <div className="container">
            <Navbar sticky="top" className="navbar-dark">
                <a className="navbar-brand" href="index.html"><img alt="Logo"
                                                                   src={Logo}/></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive"
                        aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="index.html">Home
                                <span className="sr-only">(current)</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" onClick={Login}>About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact</a>
                        </li>
                        <li>
                            <a className="nav-link" href="#">Login</a>
                        </li>
                        <li>
                            <a className="nav-link" href="#">Register</a>
                        </li>
                    </ul>
                </div>
            </Navbar>
        </div>
    )
;

export default Header;