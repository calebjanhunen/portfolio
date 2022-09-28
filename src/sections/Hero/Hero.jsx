import React from 'react';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';

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
                        <span className="hero__name">Caleb Janhunen</span>
                    </h1>
                    <p className="hero__subtitle">A Full Stack Developer</p>

                    <a href="#contact-form" className="btn hero__cta">
                        Get in touch
                    </a>

                    <ul className="hero__socials-list">
                        <li>
                            <a
                                href="https://www.linkedin.com/in/caleb-janhunen-362b62171/"
                                target="_blank"
                                className="social-link"
                                rel="noreferrer"
                            >
                                <FaLinkedin size={40} />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://github.com/calebjanhunen"
                                target="_blank"
                                className="social-link"
                                rel="noreferrer"
                            >
                                <FaGithubSquare size={40} />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Hero;
