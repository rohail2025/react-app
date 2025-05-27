// src/components/SectionGallery.js
import React from 'react';
import GalleryItem from './GalleryItem';

const SectionGallery = () => {
    const galleryItems = [
        {
            title: 'Erat aliquam',
            description:
                'Vehicula ultrices dolor amet ultricies et condimentum. Magna sed etiam consequat, et lorem adipiscing sed dolor sit amet, consectetur amet do eiusmod tempor incididunt ipsum suspendisse ultrices gravida.',
            images: [
                { full: '/images/gallery/fulls/01.jpg', thumb: '/images/gallery/thumbs/01.jpg', className: 'landscape' },
                { full: '/images/gallery/fulls/02.jpg', thumb: '/images/gallery/thumbs/02.jpg' },
                { full: '/images/gallery/fulls/03.jpg', thumb: '/images/gallery/thumbs/03.jpg' },
                { full: '/images/gallery/fulls/04.jpg', thumb: '/images/gallery/thumbs/04.jpg', className: 'landscape' },
            ],
        },
        {
            title: 'Nisl consequat',
            description:
                'Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin aliquam sed facilisis ante interdum congue. Integer mollis, nisl amet convallis, porttitor magna ullamcorper, amet mauris. Ut magna finibus nisi nec lacinia ipsum maximus.',
            images: [
                { full: '/images/gallery/fulls/05.jpg', thumb: '/images/gallery/thumbs/05.jpg', className: 'landscape' },
                { full: '/images/gallery/fulls/06.jpg', thumb: '/images/gallery/thumbs/06.jpg' },
                { full: '/images/gallery/fulls/07.jpg', thumb: '/images/gallery/thumbs/07.jpg' },
            ],
        },
        {
            title: 'Lorem gravida',
            description:
                'Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aenean ornare velit lacus, ac varius sed enim lorem ullamcorper dolore. ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis.',
            images: [
                { full: '/images/gallery/fulls/08.jpg', thumb: '/images/gallery/thumbs/08.jpg', className: 'portrait' },
                { full: '/images/gallery/fulls/09.jpg', thumb: '/images/gallery/thumbs/09.jpg', className: 'portrait' },
                { full: '/images/gallery/fulls/10.jpg', thumb: '/images/gallery/thumbs/10.jpg', className: 'landscape' },
            ],
        },
    ];

    return (
        <section>
            <header>
                <h2>Ultrices erat magna sed condimentum</h2>
            </header>
            <div className="content">
                <p>
                    <strong>Integer mollis egestas</strong> nam maximus erat id
                    euismod egestas. Pellentesque sapien ac quam. Lorem ipsum dolor sit
                    nullam.
                </p>
                {galleryItems.map((item, index) => (
                    <GalleryItem
                        key={index}
                        title={item.title}
                        description={item.description}
                        images={item.images}
                    />
                ))}
            </div>
        </section>
    );
};

export default SectionGallery;