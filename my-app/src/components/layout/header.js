import React from "react";
import './header.css';
import Astronaut from '../../assets/img/astronaut.png'
import { Anchor } from "antd";
import AnchorComponent from "../Card/Anchor";

const { Link } = Anchor;

const Header =  () => {

    return (<header className="header">
        <div className="containerTitulo">
           <p className="titulo">PLANETARIO</p>
            <img className="astronauta" src={Astronaut}></img> 
        </div> 
            <AnchorComponent></AnchorComponent>
    </header>)
}

export default Header
