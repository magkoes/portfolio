import React, { useEffect, useState } from "react";
import axios from 'axios';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const GalleryList = ({settings}) => {

    const [categories, setCategories] = useState([]);
    const [galleryList, setGalleryList] = useState([]);
    const [loader, setLoader] = useState(true);

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
                    setLoader(false);
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
                            <p>{galleryItem.description}</p>
                            <div className="gallery-item__cover">
                                <img src={galleryItem.cover.bg.url} alt={galleryItem.cover.bg.name}/>
                                <img src= {galleryItem.cover.fg.url} alt={galleryItem.cover.fg.url}/>
                            </div>
                        </div>
                    )
                })}
            </Slider>
        </div>
    );
}
 
export default GalleryList;