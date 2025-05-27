// src/components/Intro.js
import React from 'react';

const Intro = () => {
    const handleScroll = (e, sectionId) => {
        e.preventDefault();
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="intro">
            <header>
                <h1>Paradigm Shift</h1>
                <p>
                    A free responsive site template designed by{' '}
                    <a href="https://twitter.com/ajlkn">@ajlkn</a> /{' '}
                    <a href="https://html5up.net">HTML5 UP</a>
                </p>
                <ul className="actions">
                    <li>
                        <a
                            href="#first"
                            className="arrow scrolly"
                            onClick={(e) => handleScroll(e, 'first')}
                        >
                            <span className="label">Next</span>
                        </a>
                    </li>
                </ul>
            </header>
            <div className="content">
                <span className="image fill" data-position="center">
                    <img src="/images/pic01.jpg" alt="Intro" />
                </span>
            </div>
        </section>
    );
};

export default Intro;