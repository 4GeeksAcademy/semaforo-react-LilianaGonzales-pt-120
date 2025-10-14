import React from "react";
import { useState, useEffect } from "react";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Color = () => {

     const [ colorSemaforo, setColorSemaforo ] = useState({backgroundColor: "red"});
     const [showCirculo, setShowCirculo] = useState (true);

     useEffect (()=>{
            console.log(showCirculo);
    },[])

    const cambio_color = () =>{
    setShowCirculo(!showCirculo);
    console.log(showCirculo);
    (!showCirculo)?setColorSemaforo(styleSemaforo):setColorSemaforo(styleSemaforoActivo);
    }

    const styleSemaforo = {
        backgroundColor: 'red'
    };
    const styleSemaforoActivo ={
        backgroundColor: 'blue' 
    }

    return (
        <div>  

            <h1 className="text-center mt-5">Hello</h1>
            <div className="circulo" style={colorSemaforo} onClick={cambio_color}></div>
        </div>
    );
};

export default Color;