import React from 'react';

import AboutMe from './sections/AboutMe/AboutMe';
import ContactForm from './sections/ContactForm/ContactForm';
import Footer from './sections/Footer/Footer';
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
                <AboutMe />
                <Skills />
                <Projects />
                <ContactForm />
                <Footer />
            </main>
        </>
    );
};

export default App;
