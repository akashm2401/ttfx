import React from 'react'
import './NavbarComponent.css';
import logo from '../../assets/img/logo.png'
import { Link, useLocation  } from 'react-router-dom';

export default function NavbarComponent() {
    const location = useLocation();
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img src={logo} alt="brand-logo" id="brand-logo"/>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={location.pathname === '/' ? 'active nav-link' : 'nav-link'} aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={location.pathname === '/solutions' ? 'active nav-link' : 'nav-link'} to="/solutions">Solutions</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={location.pathname === '/markets' ? 'active nav-link' : 'nav-link'} to="#">Markets</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={location.pathname === '/about' ? 'active nav-link' : 'nav-link'} to="/about">About Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={location.pathname === '/contact-us' ? 'active nav-link' : 'nav-link'} to="/contact-us">Contact Us</Link>
                            </li>
                        </ul>

                        <button type="button" className="wp-button btn btn-success btn-sm me-4">WhatsApp</button>
                    </div>
                </div>
            </nav>
        </div>
    )
}
