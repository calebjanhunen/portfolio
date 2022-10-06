import React from 'react';

import './NavBar.scss';

const NavBar = () => {
    return (
        <nav className="nav">
            <ul className="nav__list">
                <li>
                    <a href="#aboutme" className="nav__link">
                        About Me
                    </a>
                </li>
                <li>
                    <a href="#skills" className="nav__link">
                        Skills
                    </a>
                </li>
                <li>
                    <a href="#projects" className="nav__link">
                        Projects
                    </a>
                </li>
                <li>
                    <a href="#contact-form" className="nav__cta btn">
                        Contact Me
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
