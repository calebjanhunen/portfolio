const projects = [
    {
        name: 'Workout Tracker',
        technologiesUsed: [
            { imgPath: require('./images/logos/react.svg'), alt: 'React Logo' },
            { imgPath: require('./images/logos/html.svg'), alt: 'HTML Logo' },
            { imgPath: require('./images/logos/css3.svg'), alt: 'CSS Logo' },
            {
                imgPath: require('./images/logos/node-js.svg'),
                alt: 'NodeJS Logo',
            },
            {
                imgPath: require('./images/logos/mongodb.svg'),
                alt: 'MongoDB Logo',
            },
        ],
        description: [
            'Designed a Full Stack Website used to track your workouts (exercises, sets, reps, etc)',
            'Created the backend REST API using Node.js, MongoDB and Express',
            'Developed the frontend website using React and MaterialUI (for UI design)',
        ],
        img: require('./images/workout-tracker-display.png'),
        githubLink: 'https://github.com/calebjanhunen/workout-tracker-app',
        demoLink: 'https://janhunen-workout-tracker.netlify.app/login',
    },
];

export default projects;
