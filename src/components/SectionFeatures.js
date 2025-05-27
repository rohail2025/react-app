// src/components/SectionFeatures.js
import React from 'react';

const SectionFeatures = () => {
    return (
        <section>
            <header>
                <h2>Feugiat consequat tempus ultrices</h2>
            </header>
            <div className="content">
                <p>
                    <strong>Etiam tristique libero</strong> eu nibh porttitor amet
                    fermentum. Nullam venenatis erat id vehicula ultrices sed ultricies
                    condimentum.
                </p>
                <ul className="feature-icons">
                    <li className="icon solid fa-laptop">Consequat tempus</li>
                    <li className="icon solid fa-bolt">Etiam adipiscing</li>
                    <li className="icon solid fa-signal">Libero nullam</li>
                    <li className="icon solid fa-cog">Blandit condimentum</li>
                    <li className="icon solid fa-map-marker-alt">Lorem ipsum dolor</li>
                    <li className="icon solid fa-code">Nibh amet venenatis</li>
                </ul>
                <p>
                    Vehicula ultrices sed ultricies condimentum. Magna sed etiam
                    consequat, et lorem adipiscing sed nulla. Volutpat nisl et tempus et
                    dolor libero, feugiat magna tempus, sed et lorem adipiscing.
                </p>
            </div>
        </section>
    );
};

export default SectionFeatures;