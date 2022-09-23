import React from 'react';

import './Hero.scss';

import picture from '../../images/hero-img.png';

const Hero = () => {
    return (
        <section className="section-hero">
            <div className="hero">
                <img className="hero__img" src={picture} alt="" />
                <div className="hero__text">
                    <h1 className="heading-primary">
                        Hi, I'm{' '}
                        <span className="hero__name">Caleb Janhunen</span>.
                    </h1>
                    <p className="hero__subtitle">A Full Stack Developer</p>
                </div>
            </div>
        </section>
    );
};

export default Hero;
