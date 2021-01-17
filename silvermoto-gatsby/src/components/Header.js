import { Link } from "gatsby";
import PropTypes from "prop-types";

import React, { Component } from "react";

export default class Header extends Component {
    render() {
        return (
            <header className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
                <div className="container">
                    <a className="navbar-brand" href="./index.html#headline">
                        <img src="./img/logo_white.png" width="130" height="40"></img>
                    </a>
                    <button
                        id="toggle-nav"
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarResponsive"
                        aria-controls="navbarResponsive"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="./index.html#aboutUs">
                                    O nás
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="./index.html#riders">
                                    Jazdci
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="./index.html#sponsors">
                                    Sponzori
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="./posts/2-z-dane/">
                                    Podporte nás
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="./blog.html">
                                    Blog
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="./contact.html">
                                    Kontakty
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        );
    }
}
/*
const Header = ({ siteTitle }) => (
    <header
        style={{
            background: `rebeccapurple`,
            marginBottom: `1.45rem`
        }}
    >
        <div
            style={{
                margin: `0 auto`,
                maxWidth: 960,
                padding: `1.45rem 1.0875rem`
            }}
        >
            <h1 style={{ margin: 0 }}>
                <Link
                    to="/"
                    style={{
                        color: `white`,
                        textDecoration: `none`
                    }}
                >
                    {siteTitle}
                </Link>
            </h1>
        </div>
    </header>
);

Header.propTypes = {
    siteTitle: PropTypes.string
};

Header.defaultProps = {
    siteTitle: ``
};

export default Header;*/
