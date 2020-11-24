import React, { useState } from "react";
import GalleryList from '../layouts/GalleryList';

const Home = (settings) => {

    var settings = 'unslick';
     /* {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    }
 */
    return ( 
        <main className="main-homepage">
            <GalleryList {...settings}></GalleryList>
        </main>
     );
}
 
export default Home;