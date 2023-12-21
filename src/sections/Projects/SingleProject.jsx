import React from 'react';

const SingleProject = ({
    name,
    img,
    technologies,
    description,
    githubLink,
    demoLink,
}) => {
    const projectRef = React.useRef();
    const imgRef = React.useRef();
    const bodyRef = React.useRef();

    //animate project when scrolled into view
    React.useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                if (entries[0].isIntersecting) {
                    imgRef.current.classList.add('project__animation--img');
                    bodyRef.current.classList.add('project__animation--body');
                }
            },
            { threshold: 0.2 }
        );

        observer.observe(projectRef.current);
    }, []);

    const technologiesDisplay = technologies.map((logo, index) => (
        <img
            key={index}
            src={
                logo.alt === 'RestAPI Logo'
                    ? logo.imgPath
                    : logo.imgPath.default
            }
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
        <div ref={projectRef} className="project">
            {img ? (
                <img
                    ref={imgRef}
                    className="project__img"
                    src={img}
                    alt={name}
                />
            ) : (
                <h3 ref={imgRef} style={{ textAlign: 'center' }}>No Image</h3>
            )}

            <div ref={bodyRef} className="project__body">
                <h3 className="heading-tertiary project__title">{name}</h3>
                <ul className="project__description-list">
                    {descriptionListDisplay}
                </ul>
                <div className="project__technology-used">
                    <p className="technology-used__text">Technologies Used:</p>
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
                    {demoLink && (
                        <a
                            href={demoLink}
                            target="_blank"
                            rel="noreferrer"
                            className='project__btn'
                        >
                            Live Demo
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SingleProject;
