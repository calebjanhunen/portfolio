import React from 'react';
import { GrClose, GrMenu } from 'react-icons/gr';

import './NavBar.scss';

const NavBar = ({ headerRef }) => {
    function toggleNav() {
        headerRef.current.classList.toggle('nav-open');
    }

    return (
        <>
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
            <button className="nav__mobile-btn" onClick={toggleNav}>
                <GrMenu className="mobile-icon mobile-icon--open" size="35" />
                <GrClose className="mobile-icon mobile-icon--close" size="35" />
            </button>
        </>
    );
};

export default NavBar;
