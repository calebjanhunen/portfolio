import React from 'react';

// Languages Logos
import cLogo from '../../images/logos/c.svg';
import cssLogo from '../../images/logos/css3.svg';
import htmlLogo from '../../images/logos/html.svg';
import javaLogo from '../../images/logos/java.svg';
import javascriptLogo from '../../images/logos/javascript.svg';

// Frameworks & Libraries logos
import mongodbLogo from '../../images/logos/mongodb.svg';
import nodeLogo from '../../images/logos/node-js.svg';
import reactLogo from '../../images/logos/react.svg';

// Technologies Logos
import gitLogo from '../../images/logos/git.svg';
import linuxLogo from '../../images/logos/linux.svg';
import npmLogo from '../../images/logos/npm.svg';
import postmanLogo from '../../images/logos/postman.svg';

import './Skills.scss';

import SkillContainer from './SkillContainer/SkillContainer';

const Skills = () => {
    const languagesLogos = [
        { img: javascriptLogo, alt: 'JavaScript Logo' },
        { img: htmlLogo, alt: 'HTML Logo' },
        { img: cssLogo, alt: 'CSS Logo' },
        { img: javaLogo, alt: 'Java Logo' },
        { img: cLogo, alt: 'C Logo' },
    ];

    //nodejs, expressjs, mongodb,  sass?
    const frameworksLogos = [
        { img: reactLogo, alt: 'React Logo' },
        { img: nodeLogo, alt: 'NodeJS Logo' },
        { img: mongodbLogo, alt: 'MongoDB Logo' },
    ];

    //postman, linux, npm
    const techLogos = [
        { img: gitLogo, alt: 'Git Logo' },
        { img: postmanLogo, alt: 'Postman Logo' },
        { img: linuxLogo, alt: 'Linux Logo' },
        { img: npmLogo, alt: 'npm Logo' },
    ];

    return (
        <section className="section-skills" id="skills">
            <div className="container">
                <h2 className="heading-secondary">Skills</h2>
                <div className="skills">
                    <SkillContainer
                        title="Programming Languages"
                        logos={languagesLogos}
                    />
                    <SkillContainer
                        title="Frameworks & Libraries"
                        logos={frameworksLogos}
                    />
                    <SkillContainer title="Technologies" logos={techLogos} />
                </div>
            </div>
        </section>
    );
};

export default Skills;
