import React from 'react';
import GalleryList from '../layouts/GalleryList';

const Gallery = () => {
    
    var settings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        centerMode: true, 
        centerPadding: '20%',
    }
    return ( 
        <main className="gallery">
            <GalleryList {...settings}></GalleryList>
        </main>
     );
}
 
export default Gallery;