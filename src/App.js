import React from 'react';

import ContactForm from './sections/ContactForm/ContactForm';
import Header from './sections/Header/Header';
import Hero from './sections/Hero/Hero';
import Projects from './sections/Projects/Projects';
import Skills from './sections/Skills/Skills';

import './App.css';

const App = () => {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <Skills />
                <Projects />
                <ContactForm />
            </main>
        </>
    );
};

export default App;
