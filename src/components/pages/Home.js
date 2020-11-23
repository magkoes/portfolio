import React, { useState } from "react";
import GalleryList from '../layouts/GalleryList';

const Home = (loader) => {

    var settings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    }

    return ( 
        <main className="main-homepage">
           
            {loader ? (
                <h1>Loading</h1>
            ) : (
                <div>
                    <div className="rectangle"></div>
                    <GalleryList {...settings}></GalleryList>
                </div>
            )}
        </main>
     );
}
 
export default Home;