import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Color from "./Color";

//create your first component
const Semaforo = () => {

    const [luzPrendida,setLuzPrendida] = useState('');

    return (
        <div className="container-fluid"> 
            <div className="row justify-content-center">
                <div className="col-lg-4 mt-5 pt-4 pb-4 centrar">
                    
                    <Color colorLuz="red" luzPrendida={luzPrendida} setLuzPrendida={setLuzPrendida}/>
                    <div style={{height:"5px"}}></div>
                    <Color colorLuz="orange" luzPrendida={luzPrendida} setLuzPrendida={setLuzPrendida}/>
                    <div style={{height:"5px"}}></div>
                    <Color colorLuz="green" luzPrendida={luzPrendida} setLuzPrendida={setLuzPrendida}/>
                    
                </div>
            </div> 
        </div>
    );
};

export default Semaforo;