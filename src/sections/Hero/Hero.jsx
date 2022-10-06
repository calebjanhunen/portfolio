import React, { useRef } from 'react';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';

import './Hero.scss';

import picture from '../../images/hero-img.png';

const Hero = () => {
    const linkedinRef = useRef();
    const githubRef = useRef();

    //removes animation class after animation is done
    setTimeout(() => {
        linkedinRef.current?.classList.remove('social-link--expand');
        githubRef.current?.classList.remove('social-link--expand');
    }, 1000);

    return (
        <section className="section-hero" id="hero">
            <div className="hero">
                <img className="hero__img" src={picture} alt="" />
                <div className="hero__text">
                    <h1 className="heading-primary hero__heading">
                        Hi, I'm{' '}
                        <span className="hero__name">Caleb Janhunen</span>
                    </h1>
                    <p className="hero__subtitle">
                        A{' '}
                        <span className="hero__rotating-text">
                            Computer Engineer
                        </span>{' '}
                        <span className="hero__rotating-text">
                            Full Stack Developer
                        </span>{' '}
                        <span className="hero__rotating-text">
                            Problem Solver
                        </span>
                    </p>

                    <a href="#contact-form" className="btn hero__cta">
                        Get in touch
                    </a>

                    <ul className="hero__socials-list">
                        <li>
                            <a
                                href="https://www.linkedin.com/in/caleb-janhunen-362b62171/"
                                target="_blank"
                                className="social-link social-link--expand"
                                rel="noreferrer"
                                ref={linkedinRef}
                            >
                                <FaLinkedin size={40} />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://github.com/calebjanhunen"
                                target="_blank"
                                className="social-link social-link--expand"
                                rel="noreferrer"
                                ref={githubRef}
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
