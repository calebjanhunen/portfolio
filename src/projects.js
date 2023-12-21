const projects = [
    {
        name: 'Fitracker API',
        technologiesUsed: [
            {
                imgPath: require('./images/logos/nestjs.svg'),
                alt: 'NestJS Logo',
            },
            {
                imgPath: require('./images/logos/typeorm.svg'),
                alt: 'TypeORM Logo',
            },
            {
                imgPath: require('./images/logos/postgresql.svg'),
                alt: 'PostgreSQL Logo',
            },
            {
                imgPath: require('./images/logos/docker.svg'),
                alt: 'Docker Logo',
            },
            {
                imgPath: require('./images/logos/jest.svg'),
                alt: 'Jest Logo',
            },
        ],
        description: [
            'Created a REST API for a workout app to track workouts (exercise, sets, reps, etc)',
            'Used NestJS for the API, TypeORM for the database management and PostgreSQL and Docker for the database',
            'Implemented security with token based authentication',
        ],
        img: '',
        githubLink: 'https://github.com/calebjanhunen/fitracker-api',
        demoLink: '',
    },
    {
        name: 'Fitracker App',
        technologiesUsed: [
            {
                imgPath: require('./images/logos/react.svg'),
                alt: 'React Logo',
            },
            {
                imgPath: require('./images/logos/typescript.svg'),
                alt: 'Typescript Logo',
            },
            {
                imgPath: require('./images/logos/supabase.svg'),
                alt: 'Supabase Logo',
            },
        ],
        description: [
            'Developed a mobile app to track workouts (exercise, sets, reps, etc)',
            'Used React Native for the frontend and implemented Supabase for the database (plan on integrating Fitracker API into the frontend)',
            "Designed and implemented the app's UI and UX to provide an intuitive and engaging workout tracking platform",
        ],
        img: require('./images/fitracker-app.png'),
        githubLink: 'https://github.com/calebjanhunen/fitracker-app',
        demoLink: '',
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
    },
];

export default projects;
