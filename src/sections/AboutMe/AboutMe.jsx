import React from 'react';

import './AboutMe.scss';

const AboutMe = () => {
    return (
        <section className="section-aboutme">
            <div className="container">
                <h2 className="heading-secondary" id="aboutme">
                    About Me
                </h2>
                <p className="aboutme__paragraph">
                    I am a software developer who enjoys full stack programming
                    as well as foundational computer mechanisms. I’m currently
                    pursuing a degree in Computer Engineering at the University
                    of Guelph. I am in my 4th year of the coop program and have
                    gained an extensive amount of experience from projects and
                    past jobs throughout that time. I am passionate about
                    solving problems and working in a team environment to expand
                    my knowledge of software development even more!
                </p>
            </div>
        </section>
    );
};

export default AboutMe;
