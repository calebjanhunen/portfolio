import React from 'react';
import { CgWebsite } from 'react-icons/cg';

const SingleProject = ({
    name,
    img,
    technologies,
    description,
    githubLink,
    demoLink,
}) => {
    const technologiesDisplay = technologies.map((logo, index) => (
        <img
            key={index}
            src={logo.imgPath.default}
            className="technology-used__logo"
            alt={logo.alt}
        />
    ));

    const descriptionListDisplay = description.map((desc, index) => (
        <li key={index} className="project__description-item">
            {desc}
        </li>
    ));

    return (
        <div className="project">
            <img className="project__img" src={img} alt={name} />

            <div className="project__body">
                <h3 className="heading-tertiary project__title">{name}</h3>
                <ul className="project__description-list">
                    {descriptionListDisplay}
                </ul>
                <div className="project__technology-used">
                    <p>Technologies Used:</p>
                    <div className="technology-used__logos">
                        {technologiesDisplay}
                    </div>
                </div>
                <div className="project__btns">
                    <a
                        href={githubLink}
                        target="_blank"
                        rel="noreferrer"
                        className="project__btn"
                    >
                        GitHub Repo
                    </a>
                    <a
                        href={demoLink}
                        target="_blank"
                        rel="noreferrer"
                        className="project__btn"
                    >
                        Live Demo
                    </a>
                </div>
            </div>
        </div>
    );
};

export default SingleProject;
