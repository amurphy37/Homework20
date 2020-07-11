import React from "react"
import {Link, useLocation } from "react-router-dom"
import Resume from "../assets/resume.pdf"

function Nav() {

    const location = useLocation()
    return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
                    Home
                </Link>
            </li>
            <li className="nav-item">
                <Link
                    to="/about"
                    className={location.pathname === "/about" ? "nav-link active" : "nav-link"}
                >
                    About
                </Link>
            </li>
            <li className="nav-item">
                <Link
                    to="/projects"
                    className={location.pathname === "/projects" ? "nav-link active" : "nav-link"}
                >
                    Projects
                </Link>
            </li>
            <li className="nav-item">
                <Link
                    to={Resume}
                    target="_blank"
                    className={location.pathname === "/resume" ? "nav-link active" : "nav-link"}
                >
                    Resume
                </Link>
            </li>
            <li className="nav-item">
                <Link
                    to="/contact"
                    className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}
                >
                    Contact
                </Link>
            </li>
        </ul>
    </nav >

    )
}
        

export default Nav;