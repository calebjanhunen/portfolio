import React from 'react';

// Languages Logos
import cLogo from '../../images/logos/c.svg';
import cssLogo from '../../images/logos/css3.svg';
import htmlLogo from '../../images/logos/html.svg';
import javaLogo from '../../images/logos/java.svg';
import javascriptLogo from '../../images/logos/javascript.svg';
import typescriptLogo from '../../images/logos/typescript.svg';
import phpLogo from '../../images/logos/php.svg';


// Frameworks & Libraries logos
import expressLogo from '../../images/logos/express.svg';
import mongodbLogo from '../../images/logos/mongodb.svg';
import nodeLogo from '../../images/logos/node-js.svg';
import reactLogo from '../../images/logos/react.svg';
import socketioLogo from '../../images/logos/Socket-io.svg';
import nestjsLogo from '../../images/logos/nestjs.svg';
import jestLogo from '../../images/logos/jest.svg';

// Technologies Logos
import gitLogo from '../../images/logos/git.svg';
import linuxLogo from '../../images/logos/linux.svg';
import npmLogo from '../../images/logos/npm.svg';
import postmanLogo from '../../images/logos/postman.svg';
import restApiLogo from '../../images/logos/rest-api-icon.webp';
import vsCodeLogo from '../../images/logos/vs-code.svg';
import dockerLogo from '../../images/logos/docker.svg';
import postgresLogo from '../../images/logos/postgresql.svg';
import jiraLogo from '../../images/logos/jira.svg';

import './Skills.scss';

import useSectionScrollIntoView from '../../hooks/useSectionScrollIntoView';
import SkillContainer from './SkillContainer/SkillContainer';

const Skills = () => {
    const languagesLogos = [
        { img: javascriptLogo, alt: 'JavaScript Logo' },
        { img: typescriptLogo, alt: 'Typescript Logo' },
        { img: htmlLogo, alt: 'HTML Logo' },
        { img: cssLogo, alt: 'CSS Logo' },
        { img: javaLogo, alt: 'Java Logo' },
        { img: cLogo, alt: 'C Logo' },
        { img: phpLogo, alt: 'PHP Logo' },
    ];

    //nodejs, expressjs, mongodb,  sass?
    const frameworksLogos = [
        { img: reactLogo, alt: 'React Logo' },
        { img: nodeLogo, alt: 'NodeJS Logo' },
        { img: nestjsLogo, alt: 'NestJS Logo' },
        { img: jestLogo, alt: 'Jest Logo' },
        { img: expressLogo, alt: 'ExpressJS Logo' },
        { img: mongodbLogo, alt: 'MongoDB Logo' },
        { img: socketioLogo, alt: 'SocketIO Logo' },
    ];

    //postman, linux, npm, vscode, windows, rest api
    const techLogos = [
        { img: gitLogo, alt: 'Git Logo' },
        { img: jiraLogo, alt: 'Jira Logo' },
        { img: postmanLogo, alt: 'Postman Logo' },
        { img: npmLogo, alt: 'npm Logo' },
        { img: postgresLogo, alt: 'PostgreSQL Logo' },
        { img: linuxLogo, alt: 'Linux Logo' },
        { img: dockerLogo, alt: 'Docker Logo' },
        { img: vsCodeLogo, alt: 'vsCode Logo' },
        { img: restApiLogo, alt: 'RestAPI Logo' },
    ];

    const skillsRef = React.useRef();

    return (
        <section
            ref={skillsRef}
            className={`section-skills ${
                useSectionScrollIntoView(skillsRef)
                    ? 'scroll-into-view-animation'
                    : ''
            }`}
            id="skills"
        >
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
