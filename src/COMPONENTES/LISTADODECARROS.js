import React from "react";
import DETALLECARRO from "./DETALLECARRO";


const LISTADODECARROS =()=>(
<div >

    <div>

    <DETALLECARRO nombre="ROLLS-ROYCE SWEPTAIL " des="En Rolls-Royce están dispuestos a fabricarte cualquier cosa si tienes una billetera lo suficientemente gorda como para pagarla. Toma el caso del Sweptail, por ejemplo. Es un coupé único que un cliente encargó totalmente desde cero." costo={55} imge={require('../img/rolls.jpg')}></DETALLECARRO>
    <DETALLECARRO nombre="MERCEDES-MAYBACH EXELERO" des="En Rolls-Royce están dispuestos a fabricarte cualquier cosa si tienes una billetera lo suficientemente gorda como para pagarla. Toma el caso del Sweptail, por ejemplo. Es un coupé único que un cliente encargó totalmente desde cero. Su diseño se inspira en los modelos clásicos de la marca, al tiempo que toma prestadas pautas de diseño del mundo de los super-yates. Prácticamente todas las partes de este automóvil son únicas, y su diseño y fabricación tomó cuatro años de principio a fin. Cuatro años de trabajo en Rolls-Royce." costo={25} imge={require('../img/mercedes.jpg')}></DETALLECARRO>
    <DETALLECARRO nombre="KOENIGSEGG CCXR TREVITA  " des="Este súper deportivo sueco es uno de los autos más caro del mundo. Muy bien… ¿y por qué? Porque, literalmente, está revestido de diamantes. Y los diamantes son " costo={23} imge={require('../img/koenig.jpg')}></DETALLECARRO>
    <DETALLECARRO nombre="LAMBORGHINI VENENO " des="Veneno es el nombre que eligió Lamborghini para su Aventador modificado. No sabemos por qué exactamente, pero su diseño sí es asesino. " costo={67} imge={require('../img/lambo.jpg')}></DETALLECARRO>
    <DETALLECARRO nombre="W MOTORS LYKAN HYPERSPORT " des="Quizás recuerdes al Lykan Hypersport por su rol protagónico en la película Fast and Furious 7," costo={56} imge={require('../img/wmotors.jpg')}></DETALLECARRO>
    <DETALLECARRO nombre="BUGATTI VEYRON BY MANSORY VIVERE " des="La lista no estaría completa sin alguna versión del Bugatti Veyron. Y aquí elegimos el Mansory Vivere, no solo porque es uno de los más rápidos," costo={78} imge={require('../img/bugatti.jpg')}></DETALLECARRO>
    </div>
    <br/>
    </div>
);
export default LISTADODECARROS;