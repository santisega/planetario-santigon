import React from "react";
import { Anchor } from "antd";

const { Link } = Anchor;

const AnchorComponent =  () => {

    return (<div style={{
        display: 'flex', flexDirection:'row', color: 'red'
      }}>
            <Anchor targetOffset="65" affix={false}>
                <Link href="#Actividades" title="Actividades" />
                <Link href="#Reservas" title="Reservas" />
                <Link href="#Contacto" title="Contacto" />
            </Anchor>
    </div>)
}

export default AnchorComponent