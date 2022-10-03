import React from 'react';

const SkillContainer = ({ title, logos }) => {
    const logoDisplay = logos.map((logo, index) => (
        <figure className="single-logo">
            <img
                className="single-logo__logo"
                key={index}
                src={logo.img}
                alt={logo.alt}
            />
            <figcaption className="single-logo__description">
                {logo.alt.split(' ')[0]}
            </figcaption>
        </figure>
    ));
    return (
        <div className="skills__container">
            <h3 className="heading-tertiary">{title}</h3>
            <div className="skills__logos-box">{logoDisplay}</div>
        </div>
    );
};

export default SkillContainer;
