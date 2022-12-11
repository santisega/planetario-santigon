import React from "react";
import Cielo from '../../assets/img/cielo-estrellado.png'
const Reservas = () => {
    return(
        <div className="reservasContainer" id="Reservas">
            <h1 className="tituloReserva">Reservas</h1>
            <div>
                <img className="cielo" src={Cielo}></img>
                <button><a target="_blank" href="https://formularios.montevideo.gub.uy/solicitud-de-reservas-para-espectaculos-del-planetario">Reservar</a></button>
            </div>
            
        </div>
    )
}

export default Reservas