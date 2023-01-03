import React from 'react';

import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import resume from '../../documents/caleb_janhunen_resume.pdf';
import './Footer.scss';

const Footer = () => {
    return (
        <section className="section-footer">
            <div className="container footer">
                <div className="footer__contact">
                    <p className="name">Caleb Janhunen</p>
                    <p className="email">calebjanhunen@gmail.com</p>
                    <a href="#contact-form" className="nav__cta btn">
                        Contact
                    </a>
                </div>
                <ul className="footer__nav footer__list">
                    <li>
                        <a href="#aboutme" className="nav__link">
                            About
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
                </ul>

                <ul className="footer__socials-list footer__list">
                    <li className="social-list__item">
                        <a
                            href="https://www.linkedin.com/in/caleb-janhunen-362b62171/"
                            target="_blank"
                            className="social-link"
                            rel="noreferrer"
                        >
                            <FaLinkedin size={40} />
                        </a>
                    </li>
                    <li className="social-list__item">
                        <a
                            href="https://github.com/calebjanhunen"
                            target="_blank"
                            className="social-link"
                            rel="noreferrer"
                        >
                            <FaGithubSquare size={40} />
                        </a>
                    </li>
                    {/* <li className="social-list__item">
                        <a
                            href={resume}
                            target="_blank"
                            className="social-link resume"
                            rel="noreferrer"
                        >
                            Resume
                        </a>
                    </li> */}
                </ul>
            </div>
            <p className="footer__copyright">
                Copyright &copy; 2023 Caleb Janhunen
            </p>
        </section>
    );
};

export default Footer;
