import React from "react";
const DETALLECARRO =({nombre,des,costo,imge})=>{
    return(
        <div className="Carros">
            <h3>Nombre del CARRO : {nombre}</h3>
            <img style ={{with:100 ,height:200 } }src={imge}></img>
            <hr/>
            <p className="Breve Descripcion">Comentarios : {des}</p>
            <hr/>
            <span>Costo del Carro {costo} Dolares</span>
            <br/>
            <hr/>

        </div>
    )
}
 export default DETALLECARRO;
