import React from "react";
import Astronaut from '../../assets/img/astronaut2.png'
import Planet from '../../assets/img/planetSaturn.png'
import '../Card/galeria.css'
import CarouselComponent from "../Carousel/Carousel";



const Galeria = () => {
    return(
         <div className="containerGaleria">
            <header className="headerGaleria">
                <h1 className="fotos">Galeria</h1>
                <img className="AstronautGallery" src={Astronaut}></img>
            </header>
            <CarouselComponent></CarouselComponent>
            <img className="planetGallery" src={Planet}></img>
        </div>
        
    )
}

export default Galeria