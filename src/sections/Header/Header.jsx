import React, { useEffect, useRef, useState } from 'react';

import './Header.scss';

import NavBar from '../../components/NavBar/NavBar';

const Header = () => {
    const [headerFixed, setHeaderFixed] = useState(false);
    const headerRef = useRef();

    useEffect(() => {
        window.addEventListener('scroll', e => {
            if (window.pageYOffset >= 2) setHeaderFixed(true);
            else setHeaderFixed(false);
        });
    }, [setHeaderFixed]);

    return (
        <header
            ref={headerRef}
            className={`header ${headerFixed ? 'scroll-down' : 'scroll-up'}`}
        >
            <a href="#hero" className="header__logo">
                Caleb Janhunen
            </a>

            <NavBar headerRef={headerRef} />
        </header>
    );
};

export default Header;
