// src/components/SectionFirst.js
import React from 'react';

const SectionFirst = () => {
    return (
        <section id="first">
            <header>
                <h2>Magna sed nullam nisl adipiscing</h2>
            </header>
            <div className="content">
                <p>
                    <strong>Lorem ipsum dolor</strong> sit amet consectetur adipiscing elit.
                    Duis dapibus rutrum facilisis. Class aptent taciti sociosqu ad litora
                    torquent per conubia nostra, per inceptos himenaeos. Etiam tristique
                    libero eu nibh porttitor amet fermentum. Nullam venenatis erat id
                    vehicula ultrices sed ultricies condimentum. Magna sed etiam
                    consequat, et lorem adipiscing sed nulla. Volutpat nisl et tempus et
                    dolor libero, feugiat magna tempus, sed et lorem adipiscing.
                </p>
                <span className="image main">
                    <img src="/images/pic02.jpg" alt="Section First" />
                </span>
            </div>
        </section>
    );
};

export default SectionFirst;