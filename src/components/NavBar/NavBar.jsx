import React from 'react';
import { GrClose, GrMenu } from 'react-icons/gr';

import './NavBar.scss';

const NavBar = ({ setMobileNavOpen }) => {
    return (
        <>
            <nav className="nav">
                <ul className="nav__list">
                    <li>
                        <a
                            href="#aboutme"
                            className="nav__link"
                            onClick={() => setMobileNavOpen(false)}
                        >
                            About
                        </a>
                    </li>
                    <li>
                        <a
                            href="#skills"
                            className="nav__link"
                            onClick={() => setMobileNavOpen(false)}
                        >
                            Skills
                        </a>
                    </li>
                    <li>
                        <a
                            href="#projects"
                            className="nav__link"
                            onClick={() => setMobileNavOpen(false)}
                        >
                            Projects
                        </a>
                    </li>
                    <li>
                        <a
                            href="#contact-form"
                            className="nav__cta btn"
                            onClick={() => setMobileNavOpen(false)}
                        >
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
            <button
                className="nav__mobile-btn"
                onClick={() => setMobileNavOpen(prev => !prev)}
            >
                <GrMenu className="mobile-icon mobile-icon--open" size="35" />
                <GrClose className="mobile-icon mobile-icon--close" size="35" />
            </button>
        </>
    );
};

export default NavBar;
