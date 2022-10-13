const projects = [
    {
        name: 'Workout Tracker',
        technologiesUsed: [
            { imgPath: require('./images/logos/react.svg'), alt: 'React Logo' },
            { imgPath: require('./images/logos/html.svg'), alt: 'HTML Logo' },
            { imgPath: require('./images/logos/css3.svg'), alt: 'CSS Logo' },
            {
                imgPath: require('./images/logos/express.svg'),
                alt: 'ExpressJS Logo',
            },
            {
                imgPath: require('./images/logos/node-js.svg'),
                alt: 'NodeJS Logo',
            },
            {
                imgPath: require('./images/logos/mongodb.svg'),
                alt: 'MongoDB Logo',
            },
            {
                imgPath: require('./images/logos/rest-api-icon.webp'),
                alt: 'RestAPI Logo',
            },
        ],
        description: [
            'Designed a Full Stack Website used to track your workouts (exercises, sets, reps, etc)',
            'Created the backend REST API using Node.js, MongoDB and Express',
            'Developed the frontend website using React and Redux/Redux Toolkit',
        ],
        img: require('./images/workout-tracker-display.png'),
        githubLink: 'https://github.com/calebjanhunen/workout-tracker-app',
        demoLink: 'https://janhunen-workout-tracker.netlify.app/login',
    },

    {
        name: 'Chat Application',
        technologiesUsed: [
            { imgPath: require('./images/logos/html.svg'), alt: 'HTML Logo' },
            { imgPath: require('./images/logos/css3.svg'), alt: 'CSS Logo' },
            {
                imgPath: require('./images/logos/express.svg'),
                alt: 'ExpressJS Logo',
            },
            {
                imgPath: require('./images/logos/node-js.svg'),
                alt: 'NodeJS Logo',
            },
            {
                imgPath: require('./images/logos/Socket-io.svg'),
                alt: 'SocketIO Logo',
            },
        ],
        description: [
            'Constructed a chat website with the ability to message users across different domains',
            'Created the backend using Node.js and Express',
            'Used the Socket.io library for communication between the web client and the server',
        ],
        img: require('./images/chat-app-display.png'),
        githubLink: 'https://github.com/calebjanhunen/chat-app',
        demoLink: 'https://janhunen-chat-app.herokuapp.com',
    },

    {
        name: 'Website Portfolio',
        technologiesUsed: [
            { imgPath: require('./images/logos/react.svg'), alt: 'React Logo' },
            { imgPath: require('./images/logos/html.svg'), alt: 'HTML Logo' },
            { imgPath: require('./images/logos/css3.svg'), alt: 'CSS Logo' },
        ],
        description: [
            'Developed a website portfolio to showcase my skills and projects',
            'Desgined the frontend using React, HTML and CSS',
            'Maintained a responsive design throughout the website to preserve seamless functionality on different display sizes',
        ],
        img: require('./images/website-portfolio-display.png'),
        githubLink: 'https://github.com/calebjanhunen/website-portfolio',
        demoLink: 'https://janhunen-chat-app.herokuapp.com',
    },
];

export default projects;
