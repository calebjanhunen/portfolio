import React from 'react';

import './Header.scss';

import NavBar from '../../components/NavBar/NavBar';

const Header = () => {
    return (
        <header className="header">
            <p className="header__logo">Caleb Janhunen</p>

            <NavBar />
        </header>
    );
};

export default Header;
