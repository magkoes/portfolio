import React, { useState, useEffect } from "react";
import GalleryList from '../layouts/GalleryList';
import axios from 'axios';
import gsap from 'gsap';

const Home = () => {

    const [cover, setCover] = useState([]);
    const [response, setResponse] = useState(false);

    useEffect(()=>{
        axios
            .get(axios.defaults.baseURL + 'wp/v2/pages?slug=accueil')
            .then(response => {
                setCover(response.data[0].acf);
                setResponse(true);
            })
    }, []);

    useEffect(()=>{
        var tl = gsap.timeline();
            tl.from(".cover h1", {y: 100, opacity: 0})
            tl.from(".cover p", {y: 100, opacity: 0}, '.cover h1-=0.2')
    });

    if (response) {       
        return ( 
            <main className="main-homepage">
                <div className="cover">
                    <div><h1>{cover.overtitle_home}</h1></div>
                    <div><p>{cover.title_home}</p></div>
                    <img className="cover__img__fg" src={cover.cover_home.fg.url} alt={cover.cover_home.fg.name}/>
                    <img className="cover__img__bg" src={cover.cover_home.bg.url} alt={cover.cover_home.bg.name}/>
                </div>
                <GalleryList></GalleryList>
            </main>
        );
    }
    return <main></main>;

}
 
export default Home;