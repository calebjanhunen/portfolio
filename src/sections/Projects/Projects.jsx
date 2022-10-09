import React from 'react';

import './Projects.scss';

import projects from '../../projects';
import SingleProject from './SingleProject';

const Projects = () => {
    const projectsDisplay = projects.map((project, index) => (
        <SingleProject
            key={index}
            name={project.name}
            technologies={project.technologiesUsed}
            description={project.description}
            img={project.img}
            githubLink={project.githubLink}
            demoLink={project.demoLink}
        />
    ));

    return (
        <section className="section-projects" id="projects">
            <div className="container">
                <h2 className="heading-secondary projects__title">Projects</h2>
                <div className="projects">{projectsDisplay}</div>
            </div>
        </section>
    );
};

export default Projects;
