import React from "react";
import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="n-wrapper">
            <div className="n-left">
                <NavLink to="/" className="button n-name">Khaled</NavLink>

            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul style={{ listStyleType: 'none' }}>
                        <NavLink to="/portfolio" className="button">Show Portfolio</NavLink>
                    </ul>
                </div>
                <NavLink to="/contact" className="button s-button">Contact Me</NavLink>
            </div>
        </div>

    )
}

export default Navbar; 