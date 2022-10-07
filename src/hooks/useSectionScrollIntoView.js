import React, { useEffect } from 'react';

const useSectionScrollIntoView = sectionRef => {
    const [isInView, setIsInView] = React.useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                if (entries[0].isIntersecting) setIsInView(true);
            },
            { threshold: 0.2 }
        );

        observer.observe(sectionRef.current);
    }, [sectionRef]);

    return isInView;
};

export default useSectionScrollIntoView;
