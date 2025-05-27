// src/App.js
import React, { useEffect } from 'react';
import Intro from './components/Intro';
import SectionFirst from './components/SectionFirst';
import SectionFeatures from './components/SectionFeatures';
import SectionGallery from './components/SectionGallery';
import SectionCallToAction from './components/SectionCallToAction';
import Contact from './components/Contact';
import Copyright from './components/Copyright';

function App() {
    useEffect(() => {
        document.body.classList.remove('is-preload');
    }, []);

    return (
        <div id="wrapper" className="is-preload">
            <Intro />
            <SectionFirst />
            <SectionFeatures />
            <SectionGallery />
            <SectionCallToAction />
            <Contact />
            <Copyright />
        </div>
    );
}

export default App;