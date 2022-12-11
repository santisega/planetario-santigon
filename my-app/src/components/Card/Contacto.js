import React from "react";
import './Contacto.css'
import Facebook from '../../assets/img/facebook.png'
import Twitter from '../../assets/img/twitter.png'
import Instagram from '../../assets/img/instagram.png'
const Contacto = () => {
    return(
        <div id="Contacto" className="containerContact">
            <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d708.0486828932294!2d-56.1442040455783!3d-34.901839020648644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959f81108c7103bf%3A0x568b22e488508f25!2sPlanetario!5e0!3m2!1ses-419!2suy!4v1669923602383!5m2!1ses-419!2suy" width="600" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            <div>
                <p className="infoContact">Planetario de Montevideo
                    Agrim. Germán Barbato
                    Av. Rivera 3275
                    Teléfono: [598 2] 1950 8550
                    Mail: info@planetariomvd.com
                </p>
                <input placeholder="Ingrese su mail aqui"></input>
                <button>Suscribase ahora</button>
                <div className="logos">
                    <img src={Facebook}></img>
                    <img src={Twitter}></img>
                    <img src={Instagram}></img>
                </div>  
            </div>
        </div>
    )
}

export default Contacto