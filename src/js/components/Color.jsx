import React from "react";
import { useState, useEffect } from "react";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Color = () => {

     const [ colorSemaforoRojo, setColorSemaforoRojo ] = useState({backgroundColor: "red"});
     const [ colorSemaforoOrange, setColorSemaforoOrange ] = useState({backgroundColor: "orange"});
     const [ colorSemaforoGreen, setColorSemaforoGreen ] = useState({backgroundColor: "green"});
     const [showCirculo, setShowCirculo] = useState (true);

     useEffect (()=>{
            console.log(showCirculo);
    },[showCirculo])

    const cambio_color_rojo = () =>{
       setShowCirculo(!showCirculo);
        if(!showCirculo){
            console.log('ingreso en 1');
            setColorSemaforoRojo({backgroundColor: "red"});
        } else {
            console.log('ingreso en 2');
            setColorSemaforoRojo(styleSemaforoActivo);
            setColorSemaforoGreen({backgroundColor: "green"});
            setColorSemaforoOrange({backgroundColor: "orange"})
        }
        
    }

const cambio_color_orange = () =>{
    setShowCirculo(!showCirculo);
     if(showCirculo==false){
        console.log('ingreso en 1 orange');
        setColorSemaforoOrange({backgroundColor: "orange"});
    }
    else {
        console.log('ingreso en 2 orange');
        setColorSemaforoOrange(styleSemaforoActivo);
        setColorSemaforoRojo({backgroundColor: "red"});
        setColorSemaforoGreen({backgroundColor: "green"})
    }
}


const cambio_color_green = () =>{
    setShowCirculo(!showCirculo);
    console.log(showCirculo);
    if(!showCirculo){
        setColorSemaforoGreen({backgroundColor: "green"});
    } else {
        console.log('ingreso en 2');
        
        setColorSemaforoGreen(styleSemaforoActivo);
        setColorSemaforoRojo({backgroundColor: "red"});
        setColorSemaforoOrange({backgroundColor: "orange"})
    }
}

    const styleSemaforoActivo ={
        backgroundColor: 'black' 
    }

    return (
        <div>  

            <h1 className="text-center mt-5">Hello</h1>
            <div className="circulo" style={colorSemaforoRojo} onClick={cambio_color_rojo}></div>
            <div className="circulo" style={colorSemaforoOrange} onClick={cambio_color_orange}></div>
            <div className="circulo" style={colorSemaforoGreen} onClick={cambio_color_green}></div>
        </div>
    );
};

export default Color;