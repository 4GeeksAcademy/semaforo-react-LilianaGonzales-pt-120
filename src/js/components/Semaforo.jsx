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
                <div className="col-lg-8 mt-5">
                    <Color colorLuz="red" luzPrendida={luzPrendida} setLuzPrendida={setLuzPrendida}/>
                    <Color colorLuz="orange" luzPrendida={luzPrendida} setLuzPrendida={setLuzPrendida}/>
                    <Color colorLuz="green" luzPrendida={luzPrendida} setLuzPrendida={setLuzPrendida}/>
                </div>
            </div> 
        </div>
    );
};

export default Semaforo;