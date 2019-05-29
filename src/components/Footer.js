import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import { Link } from 'react-router-dom';

const Footer = () => (
    <div className="container">
        <footer className="py-3 bg-dark fixed-bottom">
            <div className="container">
                <p className="m-0 text-center text-white">Copyright &copy; the market 2019 |
                    <Link className="footer-link" to="/sitemap"> Sitemap</Link></p>
            </div>
        </footer>
    </div>
);

export default Footer;