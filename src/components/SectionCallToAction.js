// src/components/SectionCallToAction.js
import React from 'react';

const SectionCallToAction = () => {
    return (
        <section>
            <header>
                <h2>Duis sed adpiscing veroeros amet</h2>
            </header>
            <div className="content">
                <p>
                    <strong>Proin tempus feugiat</strong> sed varius enim lorem
                    ullamcorper dolore aliquam aenean ornare velit lacus, ac varius enim
                    lorem ullamcorper dolore.
                </p>
                <ul className="actions">
                    <li>
                        <a href="#" className="button primary large">
                            Get Started
                        </a>
                    </li>
                    <li>
                        <a href="#" className="button large">
                            Learn More
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default SectionCallToAction;