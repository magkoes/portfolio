import React, { useEffect, useState } from "react";
import axios from 'axios';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const GalleryList = (settings) => {

    const [categories, setCategories] = useState([]);
    const [galleryList, setGalleryList] = useState([]);

    useEffect(()=>{
        axios
            .get(axios.defaults.baseURL + 'wp/v2/categories')
            .then(response => setCategories(response.data))
    }, []);

    useEffect(()=>{
        categories.forEach(category => {
            axios
                .get(axios.defaults.baseURL + 'acf/v3/categories/' + category.id)
                .then(response => {
                    setGalleryList(oldArray => [...oldArray, {'id': category.id, 'name': category.name, 'description': category.description,'cover': response.data.acf.cover_category}]);
                })
        });
    }, [categories]);

    return (  
        <div className="gallery-list">
            <Slider {...settings}>
                {galleryList.map(function(galleryItem){
                    return(
                        <div className="gallery-item" key={galleryItem.id}>
                            <h2 className="gallery-item__name">{galleryItem.name}</h2>
                            <p className="gallery-item__desc">{galleryItem.description}</p>
                            <img className="gallery-item__cover gallery-item__cover__bg" src={galleryItem.cover.bg.url} alt={galleryItem.cover.bg.name}/>
                            <img className="gallery-item__cover gallery-item__cover__fg" src= {galleryItem.cover.fg.url} alt={galleryItem.cover.fg.url}/>
                        </div>
                    )
                })}
            </Slider>
        </div>
    );
}
 
export default GalleryList;