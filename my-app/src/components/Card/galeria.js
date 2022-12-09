import React from "react";
import Astronaut from '../../assets/img/astronaut2.png'
import Planet from '../../assets/img/planetSaturn.png'
import '../Card/galeria.css'
import Carousel from 'react-bootstrap/Carousel';
import Nocturna from '../../assets/img/nocturna.png'
import Planetario from '../../assets/img/Planetario.png'
import Reapertura from '../../assets/img/reapertura.png'


const Galeria = () => {
    return(
        <div className="containerGaleria">
            <header className="headerGaleria">
                <h1 className="fotos">Galeria</h1>
                <img src={Astronaut}></img>
            </header>
            <Carousel>
                <Carousel.Item>
                    <Carousel.Caption>
                        <img src={Nocturna}></img>
                    </Carousel.Caption>
                   
                </Carousel.Item>
                <Carousel.Item>
                <Carousel.Caption>
                        <img src={Nocturna}></img>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <Carousel.Caption>
                        <img src={Nocturna}></img>
                    </Carousel.Caption>
                </Carousel.Item>
                    
                    
            </Carousel>
            
        </div>
    )
}

export default Galeria