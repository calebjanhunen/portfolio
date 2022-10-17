import React, { useEffect, useRef, useState } from 'react';

import './Header.scss';

import NavBar from '../../components/NavBar/NavBar';

const Header = () => {
    const [headerFixed, setHeaderFixed] = useState(false);
    const [mobileNavOpen, setMobileNavOpen] = useState(false);
    const headerRef = useRef();

    const headerClasses = `header ${headerFixed ? 'scroll-down' : ''} ${
        mobileNavOpen ? 'nav-open' : ''
    }`;

    useEffect(() => {
        window.addEventListener('scroll', e => {
            if (window.pageYOffset >= 2) setHeaderFixed(true);
            else setHeaderFixed(false);
        });
    }, [setHeaderFixed]);

    return (
        <header ref={headerRef} className={headerClasses}>
            <a
                href="#hero"
                className="header__logo"
                onClick={() => setMobileNavOpen(false)}
            >
                Caleb Janhunen
            </a>

            <NavBar
                mobileNavOpen={mobileNavOpen}
                setMobileNavOpen={setMobileNavOpen}
            />
            <div className="mobile-nav-circle"> </div>
        </header>
    );
};

export default Header;
