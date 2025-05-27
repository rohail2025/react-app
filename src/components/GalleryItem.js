// src/components/GalleryItem.js
import React from 'react';

const GalleryItem = ({ title, description, images }) => {
    return (
        <section>
            <header>
                <h3>{title}</h3>
                <p>{description}</p>
            </header>
            <div className="content">
                <div className="gallery">
                    {images.map((image, index) => (
                        <a
                            key={index}
                            href={image.full}
                            className={image.className || ''}
                        >
                            <img src={image.thumb} alt={`Gallery ${title} ${index + 1}`} />
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GalleryItem;