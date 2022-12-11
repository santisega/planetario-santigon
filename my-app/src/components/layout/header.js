import React from "react";
import './header.css';
import Astronaut from '../../assets/img/astronaut.png'

const Header =  () => {

    return (<header className="header">
        <div className="containerTitulo">
           <p className="titulo">PLANETARIO</p>
            <img className="astronauta" src={Astronaut}></img> 
        </div>
        <ul className="listaContainer">
            <li>
               <a href="#Actividades">Actividades</a> 
            </li>
            <li>
               <a href="#Reservas">Reservas</a> 
            </li>
            <li>
               <a href="#Contacto">Contacto</a> 
            </li>
        </ul>
    </header>)
}

export default Header
