import React from "react";
import './home.css'
import PlanetCard from "../components/Card/PlanetCard";
import Astronaut from '../assets/img/astronaut2.png'
import Planet from '../assets/img/planetSaturn.png'
import Rocket from '../assets/img/rocket.png'
import Galeria from "../components/Card/galeria";
import Reservas from "../components/Card/Reservas";
import Header from "../components/layout/header";
import Contacto from "../components/Card/Contacto";
const Home= () => {
    return(
        <>
        <Header reservas=".reservas"/>
        <div className="container">
            <div className="textarea">
                    <h1 className="titulo2">Descubrí el planetario en <span style={{color:'white'}}>Noviembre</span>, sumate a la aventura!!!</h1>
                <img src={Planet}></img>
            </div>
            <div className="rocketContainer">
            <img src={Rocket}></img>
            </div>
            <div className="astronautContainer">
                <img src={Astronaut}></img>
                <h1>Lo mas destacado</h1>  
                <p className="parrafo">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum pretium mi eget purus id mauris adipiscing. Quam justo, et velit fermentum nisl sed auctor orci.</p>
            </div>
        <PlanetCard></PlanetCard>
        <Galeria></Galeria>
        <Reservas className="reservas"></Reservas>
        <Contacto></Contacto>
        </div>
        </>
    )
}

export default Home