import React from 'react';

import Header from './sections/Header/Header';
import Hero from './sections/Hero/Hero';
import Projects from './sections/Projects/Projects';
import Skills from './sections/Skills/Skills';

import './App.css';

const App = () => {
    return (
        <body>
            <Header />
            <main>
                <Hero />
                <Skills />
                <Projects />
            </main>
        </body>
    );
};

export default App;
