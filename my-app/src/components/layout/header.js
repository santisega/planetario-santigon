import React from "react";
import './header.css';
import Astronaut from '../../assets/img/astronaut.png'

const Header =  () => {

    return (<navbar className="header">
        <div className="containerTitulo">
           <p className="titulo">PLANETARIO</p>
            <img className="astronauta" src={Astronaut}></img> 
        </div>
        <div className="listContainer">
        <ul className="items">
        <li className="item"><a className="link" href="">Actividades</a></li>
        <li className="item"><a className="link" href="">Reservas</a></li>
        <li className="item"><a className="link" href="">Contacto</a></li>
        </ul>
        </div>
    </navbar>)
}

export default Header
