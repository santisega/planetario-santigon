import React from "react";
import Sun from '../../assets/img/sol.png'
import './PlanetCard.css'
const PlanetCard = () => {
    const Component =  () =>{
        return(
        <div className="containerDiv">
            <h6 className="tituloPlanet">El Universo en un minuto</h6>
            <img src={Sun} className="img"></img>
            <p className="parrafoPlanet">Las estrellas: enormes generadoras de energía</p>
        </div>)
    }
    return(
        <div className="ListPlanet">
        <Component></Component>
        <Component></Component>
        <Component></Component>
        </div>
        
    )
}

export default PlanetCard