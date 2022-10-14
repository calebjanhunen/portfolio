import React, { useEffect, useRef, useState } from 'react';

import './Header.scss';

import NavBar from '../../components/NavBar/NavBar';

const Header = () => {
    const [headerFixed, setHeaderFixed] = useState(false);
    const [mobileNavOpen, setMobileNavOpen] = useState(false);
    const headerRef = useRef();

    const headerClasses = `header ${headerFixed ? 'scroll-down' : ''} ${
        mobileNavOpen ? 'nav-open' : 'nav-closed'
    }`;

    useEffect(() => {
        window.addEventListener('scroll', e => {
            if (window.pageYOffset >= 2) setHeaderFixed(true);
            else setHeaderFixed(false);
        });
    }, [setHeaderFixed]);

    return (
        <header ref={headerRef} className={headerClasses}>
            <a href="#hero" className="header__logo">
                Caleb Janhunen
            </a>

            <NavBar setMobileNavOpen={setMobileNavOpen} />
        </header>
    );
};

export default Header;
