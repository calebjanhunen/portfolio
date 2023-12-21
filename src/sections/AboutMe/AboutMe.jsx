import React, { useEffect, useRef } from 'react';

import './AboutMe.scss';

import useSectionScrollIntoView from '../../hooks/useSectionScrollIntoView';

const AboutMe = () => {
    const aboutMeRef = useRef();
    const aboutMeHeadingRef = useRef();

    return (
        <section
            ref={aboutMeRef}
            className={`section-aboutme ${
                useSectionScrollIntoView(aboutMeRef)
                    ? 'scroll-into-view-animation'
                    : ''
            }`}
            id="aboutme"
        >
            <div className="container">
                <h2 ref={aboutMeHeadingRef} className="heading-secondary">
                    About Me
                </h2>
                <p className="aboutme__paragraph">
                    I am a software developer who enjoys full stack programming
                    as well as foundational computer mechanisms. I’m currently
                    pursuing a degree in{' '}
                    <span className="aboutme__important-text">
                        Computer Engineering
                    </span>{' '}
                    at the{' '}
                    <span className="aboutme__important-text">
                        University of Guelph
                    </span>
                    . I am in my 5th year of the coop program and have gained an
                    extensive amount of experience from projects and past jobs
                    throughout that time. I am passionate about solving problems
                    and working in a team environment to expand my knowledge of
                    software development even more!
                </p>
            </div>
        </section>
    );
};

export default AboutMe;
