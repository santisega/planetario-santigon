import React from "react";
import Astronaut from '../../assets/img/astronaut2.png'
import Planet from '../../assets/img/planetSaturn.png'
import '../Card/galeria.css'

const Galeria = () => {
    return(
        <div className="containerGaleria">
            <header className="headerGaleria">
                <h1 className="fotos">Galeria</h1>
                <img src={Astronaut}></img>
            </header>
            
        </div>
    )
}

export default Galeria